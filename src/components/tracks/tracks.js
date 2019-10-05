import React, { Component } from 'react';
import { Link } from "react-router-dom";

import ApiService from '../../service/service';

class TrackList extends Component {
    apiService = new ApiService()
    constructor() {
        super()
        this.state = {
            trackList: []
        }
        
    }

    componentDidMount() {
        this.loadTrackList();
    }

    componentDidUpdate(prevProps) {
        if (this.props.albumId !== prevProps.albumId) {
            this.loadTrackList();
        }
      }
    

    updateTrackList = (trackList) => {
        this.setState({trackList})
    }


    loadTrackList() {
        const { albumId } = this.props;
        this.apiService.getAllSong(albumId)
        .then(this.updateTrackList)
    }
    render() {
        console.log(this.props.albumId)
        const {trackList} = this.state;
        console.log(trackList, "tracks")
        return (
            <div className = "col-lg-6">
                <ul>
                    { trackList.map(track => <TrackListItem track = {track} key = {track.id}/>) }
                </ul>
            </div>
        )
    }
}

export default TrackList;

const TrackListItem = ({track}) => {
    const { title, id } = track;
    return (
        <React.Fragment>
            <li><Link to = {`./song/${id}`}>{title.rendered}</Link></li>
        </React.Fragment>
    )

}
