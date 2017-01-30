import React, { Component } from 'react';
import { Link } from 'react-router';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

class SongList extends Component {
  onSongDelete(id) {
    this.props.mutate({ variables: { id } })
      .then(() => this.props.data.refetch());
  }

  renderSongs() {
    return this.props.data.songs.map(({ id, title }) =>
      <li className="collection-item" key={id}>
        <Link to={`/songs/${id}`}>
          {title}
        </Link>
        <i
          onClick={() => this.onSongDelete(id)}
          className="material-icons"
        >
          delete
        </i>
      </li>
    );
  }

  render() {
    if (!this.props.data.songs) { return <div />; }

    return (
      <div>
        <ul className="collection">
          {this.renderSongs()}
        </ul>
        <Link
          to="/songs/create"
          className="btn-floating btn-large waves-effect waves-light red right"
        >
          <i className="material-icons">add</i>
        </Link>
      </div>
    );
  }
};

const query = gql`
  {
    songs {
      id
      title
    }
  }
`;

const mutation = gql`
  mutation DeleteSong($id: ID) {
    deleteSong(id: $id) {
      id
    }
  }
`;

export default graphql(mutation)(graphql(query)(SongList));
