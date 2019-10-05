import React, {Component} from 'react';

class Song extends Component {

    render() {
        const {id} = this.props.match.params;
        return(
            <div>Song {id}</div>
        )
    }
}

export default Song;