/* eslint-disable jsx-a11y/alt-text */
import React from 'react'

const LibrarySong = ({song}) => {
    return (
        <div className="library-song">
            <img alt={song.name} src={song.cover}/>
            <div className="song-description">
                <h3>{song.artist}</h3>
                <h4>{song.name}</h4>
                <h5>{song.style}</h5>
            </div>
        </div>
    )
}

export default LibrarySong
