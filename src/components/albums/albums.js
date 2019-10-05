import React, { Component } from 'react';


class Albums extends Component {
    


    renderAlbumsItem(arr) {
        return arr.map(({name, count, id}) => {
            return (
                <li className="list-group-item d-flex justify-content-between align-items-center" key = {id}
                onClick={() => this.props.onItemSelected(id)}>
                    {name} 
                  <span className="badge badge-primary badge-pill">{count}</span>
                </li>
            )
        }) 
    }

    render() {
        const { albums } = this.props;
        if (!albums) {
            return <div>Loading</div>;
          }
        const allalbums = this.renderAlbumsItem(albums);
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

