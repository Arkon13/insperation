import React, {Component} from 'react';
import ApiService from '../../service/service';

class Song extends Component {
    apiService = new ApiService();
    state = {
        songText: null
    }
    componentDidMount() {
        this.loadSongText();
    }

    updateSongText = (songText) => {
        this.setState({songText})
    }

    loadSongText() {
        const {id} = this.props.match.params;
        this.apiService.getSong(id)
        .then(this.updateSongText)
    }
    render() {
        const { songText } = this.state;
        console.log(songText, "song obj")
        if (!songText) {
            return <div>Loading</div>;
          }
        return(
            <div className = "text-center">
                <h1>{songText.title}</h1>
                {songText.text}
            </div>
        )
    }
}

export default Song;