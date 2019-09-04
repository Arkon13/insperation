import React, { Component } from 'react';

class RandomSong extends Component {
    render() {
        return(
            <div className="jumbotron row" >
                <div className="col-lg-10">
                    <p>Последняя песня</p>
                    <span>Аутодафе</span>
                </div>
              <p className="col-lg-2">
                <a className="btn btn-primary btn-lg" href="#" role="button">Случайная песня</a>
              </p>
          </div>

        )
    }
}

export default RandomSong;
