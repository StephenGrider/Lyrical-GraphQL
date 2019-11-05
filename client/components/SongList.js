import React, { Component } from 'react';
import gql from 'graphql-tag';
import {graphql} from 'react-apollo';
import {Link} from 'react-router-dom';

import query from '../quieries/fetchSongs';

class SongList extends Component {

    deleteSong(id) {
        this.props.mutate({
            variables: {
                id: id,
            },
            refetchQueries: [{ query }]
        })
    }

    renderSongs() {
        return this.props.data.songs.map(song => {
            return (
                <li key={song.id} className="collection-item">
                    {song.title}
                    <i className="material-icons" onClick={() => this.deleteSong(song.id)}>delete</i>
                </li>
            );
        })
    }


    render() {
        if (this.props.data.loading) {
            return (
                <div>
                    Loading...
                </div>
            );
        }

        return (
            <div>
                <ul className="collection">
                    {this.renderSongs()}
                </ul>
                <Link to="/songs/new" className="btn-floating btn-large red light"><i className="material-icons">add</i></Link>
            </div>
        );

    }
}

const mutation = gql`
    mutation DeleteSong($id: ID!) {
        deleteSong(id: $id) {
            id
        }
    }
`;

export default graphql(mutation)(
    graphql(query)(SongList)
);
