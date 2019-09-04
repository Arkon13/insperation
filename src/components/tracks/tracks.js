import React, { Component } from 'react';
import ApiService from '../../service/service';

class TrackList extends Component {
    apiService = new ApiService()
    constructor() {
        super()
        this.state = {
            trackList: []
        }
        this.loadTrackList();
    }

    updateTrackList = (trackList) => {
        this.setState({trackList})
    }

    loadTrackList() {
        const id = 1
        this.apiService.getAllSong(id)
        .then(this.updateTrackList)
    }
    render() {
        const {trackList} = this.state;
        return (
            <div className = "col-lg-6">
                <ul>
                    { trackList.map(track => <TrackListItem track = {track} />) }
                </ul>
            </div>
        )
    }
}

export default TrackList;

const TrackListItem = () => {
    return (
        <React.Fragment>
            <li>Экстрасенс</li>
        </React.Fragment>
    )

}
