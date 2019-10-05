import React from 'react';
import Header from './components/header';
import RandomSong from './components/random-song';
import AlbumsPanel from './components/albums-panel';


function App() {
  return (
    <div>
        <Header />
        <RandomSong />
    <div className = "container-fluid">
          <AlbumsPanel />
        </div>
    </div>
  );
}

export default App;
