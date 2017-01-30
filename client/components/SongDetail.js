import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { Link } from 'react-router';
import gql from 'graphql-tag';
import LyricList from './LyricList';
import LyricCreate from './LyricCreate';

class SongDetail extends Component {
  render() {
    const { song } = this.props.data;

    if (!song) { return <div />; }

    return (
      <div>
        <Link to="/">Back</Link>
        <h3>{song.title}</h3>
        <LyricList
          refetch={this.props.data.refetch}
          songId={this.props.params.id}
          lyrics={song.lyrics}
        />
        <LyricCreate songId={this.props.params.id} />
      </div>
    );
  }
};

const query = gql`
  query SongQuery($id: ID!){
    song(id: $id) {
      id
      title
      lyrics {
        id
        content
        likes
      }
    }
  }
`;

export default graphql(query, {
  options: (props) => { return { variables: { id: props.params.id } } }
})(SongDetail);
