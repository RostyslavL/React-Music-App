import React, {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay,faPause, faAngleLeft,faAngleRight } from '@fortawesome/free-solid-svg-icons'

const Player = ({currentSong, isPlaying, setIsPlaying, audioRef,songInfo,setSongInfo}) => {
    
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
    
    return (
        <div className="player">
            <div className="time-control">
                <p>{convertSongTime(songInfo.currentTime)}</p>
                <input 
                    type="range" 
                    min={0} 
                    max={songInfo.duration || 0} 
                    value={songInfo.currentTime}
                    onChange={dragHandler}
                />
                <p>{convertSongTime(songInfo.duration)}</p>
            </div>
            <div className="play-control">
                <FontAwesomeIcon className="skip-back" size="2x" icon={faAngleLeft}/>
                <FontAwesomeIcon className="play" size="2x" icon={isPlaying ? faPlay : faPause } onClick={playSongHandler}/>
                <FontAwesomeIcon className="skip-forward" size="2x" icon={faAngleRight}/>
            </div>
        </div>
    )
}

export default Player
