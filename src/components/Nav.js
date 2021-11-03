import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMusic } from '@fortawesome/free-solid-svg-icons'

const Nav = ({libraryStatus, seLibraryStatus}) => {
    return (
        <nav>
            <h1>React MusicApp</h1>
            <button onClick={() => seLibraryStatus(!libraryStatus)}>
                Library&nbsp;
                <FontAwesomeIcon icon={faMusic}/>
            </button>
        </nav>
    )
}

export default Nav
