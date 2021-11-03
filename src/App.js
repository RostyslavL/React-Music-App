import React, {useState,useRef} from 'react'
// Adding Component to App:
import Song from './components/Song'
import Player from './components/Player'
import Library from './components/Library'
import Nav from './components/Nav'
// Add scss Styles :
import './styles/app.scss'
// import utils:
import data from './data.js'


function App() {
  // Reference:
  const audioRef = useRef(null)

  // state:

  const [songs, setSongs] = useState(data())
  const [currentSong, setCurrentSong] = useState(songs[1])
  const [isPlaying, setIsPlaying] = useState(false)
  const [songInfo, setSongInfo] = useState({
    currentTime:0,
    duration:0,
    animationPercentage:0
  })
  const [libraryStatus, seLibraryStatus] = useState(false)
  
  const timeUptadeHandler = (e) =>{
    const currentTime = e.target.currentTime
    const duration = e.target.duration
    // Calculate Percentage:
    const roundedCurrent = Math.round(currentTime)
    const roundedDuration = Math.round(duration)
    const animation = Math.round((roundedCurrent)/(roundedDuration) * 100)
    setSongInfo({...songInfo, currentTime, duration, animationPercentage:animation})
  }

  const songEndHandler = async () =>{
    let currentIndex = songs.findIndex((song)=> song.id === currentSong.id)
    await setCurrentSong(songs[(currentIndex + 1) % songs.length])
    if(isPlaying) audioRef.current.play()
  }
  return (
    <div className={`App ${libraryStatus ? 'library-active': ''}`}>
      <Nav 
        libraryStatus={libraryStatus} 
        seLibraryStatus={seLibraryStatus}
      />
      <Song currentSong={currentSong}/>
      <Player
        audioRef={audioRef} 
        isPlaying={isPlaying} 
        setIsPlaying={setIsPlaying} 
        currentSong={currentSong}
        setCurrentSong={setCurrentSong}
        setSongInfo={setSongInfo}
        songInfo={songInfo}
        songs={songs}
        setSongs={setSongs}
      />
      <Library
        audioRef={audioRef} 
        isPlaying={isPlaying}  
        songs={songs} 
        setCurrentSong={setCurrentSong}
        setSongs={setSongs}
        libraryStatus={libraryStatus}
      />
      <audio
        onLoadedMetadata={timeUptadeHandler} 
        onTimeUpdate={timeUptadeHandler} 
        ref={audioRef} 
        src={currentSong.audio} 
        onEnded={songEndHandler} 
        /> 
    </div>
  );
}

export default App;
