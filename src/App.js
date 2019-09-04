import React from 'react';
import Header from './components/header';
import Albums from './components/albums';
import RandomSong from './components/random-song';
import TrackList from './components/tracks';


function App() {
  return (
    <div>
        <Header />
        <RandomSong />
    <div className = "container-fluid">
        <div className = "row">
            <Albums />
            <TrackList />
        </div>
        </div>
    </div>
  );
}

export default App;
