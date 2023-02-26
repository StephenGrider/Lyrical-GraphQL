import React, { Component } from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";

class LyricList extends Component {
  onLike(id, currentLikes) {
    this.props.mutate({
      variables: {
        id,
      },
      optimisticResponse: {
        __typename: "Mutation",
        likeLyric: {
          id,
          __typename: "LyricType",
          likes: currentLikes + 1,
        },
      },
    });
  }

  renderLyrics() {
    return (this.props.lyrics || []).map(({ id, content, likes }) => {
      return (
        <li className="collection-item " key={id}>
          {`${content} (${likes || 0})`}
          <i
            className="material-icons"
            onClick={() => {
              this.onLike(id, likes);
            }}
          >
            thumb_up
          </i>
        </li>
      );
    });
  }

  render() {
    return <ul className="collection">{this.renderLyrics()}</ul>;
  }
}

const mutation = gql`
  mutation AddLike($id: ID!) {
    likeLyric(id: $id) {
      id
      likes
    }
  }
`;

export default graphql(mutation)(LyricList);
