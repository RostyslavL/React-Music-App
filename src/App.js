import React, {useState} from 'react'
// Adding Component to App:
import Song from './components/Song'
import Player from './components/Player'
// Add scss Styles :
import './styles/app.scss'
// import utils:
import data from './util.js'


function App() {

  // state:

  const [songs, setSongs] = useState(data())
  const [currentSong, setCurrentSong] = useState(songs[1])

  console.log(data)
  return (
    <div className="App">
      <Song currentSong={currentSong}/>
      <Player/>
    </div>
  );
}

export default App;
