import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

class LyricList extends Component {
  onLike(lyric) {
    this.props.mutate({ variables: { id: lyric.id },
      optimisticResponse: {
        __typename: 'Mutation',
        likeLyric: {
          id: lyric.id,
          __typename: 'Lyric',
          likes: lyric.likes + 1
        },
      }
    });
  }

  renderLyrics() {
    return this.props.lyrics.map(lyric => {
      return (
        <li key={lyric.id} className="collection-item">
          <div>{lyric.content}</div>
          <div className="vote-box">
            <i
              onClick={() => this.onLike(lyric)}
              className="material-icons"
            >
              thumb_up
            </i>
            {lyric.likes}
          </div>
        </li>
      );
    });
  }

  render() {
    return (
      <ul className="collection">
        {this.renderLyrics()}
      </ul>
    );
  }
}

const mutation = gql`
  mutation LikeLyric($id: ID!){
    likeLyric(id: $id) {
      id
      likes
    }
  }
`;

export default graphql(mutation)(LyricList);
