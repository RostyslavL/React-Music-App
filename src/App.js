import React from 'react'
// Adding Component to App
import Song from './components/Song'
import Player from './components/Player'

function App() {
  return (
    <div className="App">
      <Song/>
      <Player/>
    </div>
  );
}

export default App;
