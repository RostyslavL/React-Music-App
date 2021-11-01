import React, {useRef,useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faAngleLeft,faAngleRight } from '@fortawesome/free-solid-svg-icons'

const Player = ({currentSong, isPlaying, setIsPlaying}) => {
    // Reference:
    const audioRef = useRef(null)

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
    const timeUptadeHandler = (e) =>{
        const currentTime = e.target.currentTime
        const duration = e.target.duration
        setSongInfo({...songInfo, currentTime, duration})
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
    // State:
    const [songInfo, setSongInfo] = useState({
        currentTime:0,
        duration:0
    })
    return (
        <div className="player">
            <div className="time-control">
                <p>{convertSongTime(songInfo.currentTime)}</p>
                <input 
                    type="range" 
                    min={0} 
                    max={songInfo.duration} 
                    value={songInfo.currentTime}
                    onChange={dragHandler}
                />
                <p>{convertSongTime(songInfo.duration)}</p>
            </div>
            <div className="play-control">
                <FontAwesomeIcon className="skip-back" size="2x" icon={faAngleLeft}/>
                <FontAwesomeIcon className="play" size="2x" icon={faPlay} onClick={playSongHandler}/>
                <FontAwesomeIcon className="skip-forward" size="2x" icon={faAngleRight}/>
            </div>
            <audio
                onLoadedMetadata={timeUptadeHandler} 
                onTimeUpdate={timeUptadeHandler} 
                ref={audioRef} 
                src={currentSong.audio} 
            /> 
        </div>
    )
}

export default Player
