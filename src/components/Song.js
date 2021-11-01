/* eslint-disable jsx-a11y/alt-text */
import React from 'react'

const Song = ({currentSong}) => {
    return (
        <div className="song-container">
            <img alt={currentSong.name} src={currentSong.cover}></img>
            <h1>{currentSong.artist}</h1>
            <h2>{currentSong.name}</h2>
            <h3>{currentSong.style}</h3>
        </div>
    )
}

export default Song
