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
            }
        })
        .then(() => this.props.data.refetch());
    }

    renderSongs() {
        return this.props.data.songs.map(song => {
            return (
                <Link to={`/songs/${song.id}`} key={song.id} className="collection-item">
                    <span>{song.title}</span>
                    <i className="material-icons" onClick={() => this.deleteSong(song.id)}>delete</i>
                </Link>
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
