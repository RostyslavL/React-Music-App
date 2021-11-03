/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

const LibrarySong = ({
        song, 
        setCurrentSong, 
        audioRef, 
        isPlaying, 
        songs, 
        id,
        setSongs
    }) => {
    const songSelectHandler = async() =>{
        await setCurrentSong(song)
        // Add active state :
        const newSongs = songs.map(song => {
            if(song.id === id){
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
        // check if song is playing:
        if(isPlaying) audioRef.current.play()
    }
      
    return (
        <div className={song.active ? "library-song selected" : "library-song"} onClick={songSelectHandler} >
            <img alt={song.name} src={song.cover}/>
            <div className="song-description">
                {song.active &&  <FontAwesomeIcon icon={faArrowLeft}  style={{ marginLeft: "12rem"}}/>} 
                <h3>{song.artist}</h3>
                <h4>{song.name}</h4>
                <h5>{song.style}</h5>
            </div>
        </div>
    )
}

export default LibrarySong
