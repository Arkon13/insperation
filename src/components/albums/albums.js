import React, { Component } from 'react';
import ApiService from '../../service/service';

class Albums extends Component {
    apiService = new ApiService()
    constructor() {
        super()
        this.state = {
            albums: {},
            loading: true
        }
        this.loadAlbums()
    }

    updateAlbums = (albums) => {
        this.setState({albums, loading: false})
    }

    loadAlbums() {
        this.apiService.getAllAlbums()
        .then(this.updateAlbums)
    }

    render() {
        const { albums, loading } = this.state;
        console.log(albums)
        const allalbums = !loading ? albums.map(album => <AlbumItem  album = {album} />) : 'Loading'
        return(
            <div className = "col-lg-6">
                <ul className="list-group">
                    {
                        allalbums
                    }

                </ul>

            </div>
        )
    }
}

export default Albums;

const AlbumItem = ({album}) => {
    const {name, count} = album;
    return(
        <React.Fragment>
            <li className="list-group-item d-flex justify-content-between align-items-center">
                {name}
              <span className="badge badge-primary badge-pill">{count}</span>
            </li>
        </React.Fragment>
    )
}
