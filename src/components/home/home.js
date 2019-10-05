import React from "react";
import Header from '../header';
import RandomSong from '../random-song';
import AlbumsPanel from '../albums-panel';

function Home() {
    return(
        <div>
        <Header />
        <RandomSong />
            <div className = "container-fluid">
          <AlbumsPanel />
        </div>
        
    </div>
    )
}

export default Home;