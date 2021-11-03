import React from 'react'
import LibrarySong from './LibrarySong'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCompactDisc} from '@fortawesome/free-solid-svg-icons'

const Library = ({songs,setCurrentSong, audioRef, isPlaying, setSongs, libraryStatus}) => {
    return (
        <div className={libraryStatus ? "library active-library" : "library"}>            
            <h2>
                <FontAwesomeIcon size="3x" icon={faCompactDisc}/>&nbsp;
                Library
            </h2>
            <div className="library-songs">
                {songs.map((song) => (
                    <LibrarySong
                        audioRef={audioRef}  
                        songs={songs} 
                        song={song} 
                        setCurrentSong={setCurrentSong}
                        id={song.id}
                        key={song.id}
                        isPlaying={isPlaying}
                        setSongs={setSongs}
                    />
                ))}
            </div>
        </div>
    )
}

export default Library
