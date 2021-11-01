import React from 'react'
import LibrarySong from './LibrarySong'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCompactDisc} from '@fortawesome/free-solid-svg-icons'

const Library = ({songs}) => {
    return (
        <div className="library">            
            <h2>
                <FontAwesomeIcon size="3x" icon={faCompactDisc}/>&nbsp;
                Library
            </h2>
            <div className="library-songs">
                {songs.map((song) => (
                    <LibrarySong song={song}/>
                ))}
            </div>
        </div>
    )
}

export default Library
