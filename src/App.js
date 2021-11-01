import React from 'react'
// Adding Component to App:
import Song from './components/Song'
import Player from './components/Player'
// Add scss Styles :
import './styles/app.scss'
// import utils:
import data from './util.js'


function App() {
  return (
    <div className="App">
      <Song/>
      <Player/>
    </div>
  );
}

export default App;
