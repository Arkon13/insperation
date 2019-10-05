import React, { Component } from 'react';
import Albums from '../albums';
import TrackList from '../tracks';
import ApiService from '../../service/service';

class AlbumsPanel extends Component {
    apiService = new ApiService()
    constructor() {
        super()
        this.state = {
            selectedAlbums: 2,
            albums: [],
            loading: true
        }
        this.loadAlbums()
    }
    
    onAlbumSelected = (selectedAlbums) => {
        this.setState({ selectedAlbums });
      };

      updateAlbums = (albums) => {
        this.setState({albums, loading: false})
    }

    loadAlbums() {
        this.apiService.getAllAlbums()
        .then(this.updateAlbums)
    }

      

    render() {
        const {albums, selectedAlbums} = this.state;
        console.log(selectedAlbums, "state")
        return(
            <div className = "row">
                <Albums onItemSelected = {this.onAlbumSelected} albums = {albums}/>
                <TrackList albumId = {this.state.selectedAlbums}/>
            </div>
        )
    }
}

export default AlbumsPanel;