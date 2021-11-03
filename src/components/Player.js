import React, {useEffect} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay,faPause, faAngleLeft,faAngleRight } from '@fortawesome/free-solid-svg-icons'

const Player = ({
    songs,
    currentSong, 
    isPlaying, 
    setIsPlaying, 
    audioRef,
    songInfo,
    setSongInfo,
    setCurrentSong,
    setSongs
    }) => {

    // Use Effect:
    useEffect(() => {
        const newSongs = songs.map(song => {
            if(song.id === currentSong.id){
                return{
                    ...song,
                    active: true,
                }
            }else{
                return{
                    ...song,
                    active: false,
                }
            }
        })
        setSongs(newSongs)
    },[currentSong, setSongs, songs])
    // Event Handlers :
    const playSongHandler = () =>{
        console.log(audioRef)
        if(isPlaying){
        setIsPlaying(!isPlaying)
         audioRef.current.pause()
        }else{
            audioRef.current.play()
            setIsPlaying(!isPlaying)
        } 
    }
    
    const convertSongTime = (time) =>{
        return(
            Math.floor(time / 60) + ':' + ('0' + Math.floor(time % 60)).slice(-2)
        )
    }
    const dragHandler = (e) =>{
        audioRef.current.currentTime = e.target.value
        setSongInfo({...songInfo, currentTime: e.target.value})
    }
    const skipTrackHandler = async (direction) =>{
        let currentIndex = songs.findIndex((song)=> song.id === currentSong.id)
        if(direction === 'skip-forward'){
            await setCurrentSong(songs[(currentIndex + 1) % songs.length])
        }
        if(direction === 'skip-back'){
            if((currentIndex - 1) % songs.length === -1){
                await setCurrentSong(songs[songs.length - 1])
                if(isPlaying) audioRef.current.play()
                return
            }
            await setCurrentSong(songs[(currentIndex - 1) % songs.length])
        }
        if(isPlaying) audioRef.current.play()
    }
    // Add animate styles:
    const trackAnimatin = {
        transform: `translateX(${songInfo.animationPercentage}%)`
    }
    return (
        <div className="player">
            <div className="time-control">
                <p>{convertSongTime(songInfo.currentTime)}</p>
                <div 
                    style={{ background:`linear-gradient(to right, ${currentSong.color[1]}, ${currentSong.color[0]} )` }}
                    className="track">
                        <input 
                            type="range"
                            min={0} 
                            max={songInfo.duration || 0} 
                            value={songInfo.currentTime}
                            onChange={dragHandler}
                        />
                        <div className="animate-track" style={trackAnimatin}></div>
                    </div>                
                <p>{songInfo.duration ? convertSongTime(songInfo.duration) : '0:00'}</p>
            </div>
            <div className="play-control">
                <FontAwesomeIcon 
                    className="skip-back" 
                    size="2x" 
                    icon={faAngleLeft} 
                    onClick={()=> skipTrackHandler('skip-back')}
                />
                <FontAwesomeIcon 
                    className="play" 
                    size="2x" 
                    icon={isPlaying ? faPlay : faPause } 
                    onClick={playSongHandler}
                />
                <FontAwesomeIcon 
                    className="skip-forward" 
                    size="2x" 
                    icon={faAngleRight}
                    onClick={()=> skipTrackHandler('skip-forward')}
                />
            </div>
        </div>
    )
}

export default Player
