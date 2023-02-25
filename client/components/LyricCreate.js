import React, { Component } from "react";
import { graphql } from "react-apollo";
import gql from "graphql-tag";

class LyricCreate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: "",
    };
  }

  handleSubmit(event) {
    event.preventDefault();

    this.props
      .mutate({
        variables: {
          id: this.props.songId,
          content: this.state.content,
        },
        // refetchQueries: [
        //   {
        //     query: songs,
        //   },
        // ],
      })
      .then(() => {});

    this.setState({
      content: "",
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <label>Add a lyric:</label>
        <input
          type="text"
          value={this.state.content}
          onChange={(event) => {
            this.setState({
              content: event.target.value,
            });
          }}
        ></input>
      </form>
    );
  }
}

const mutation = gql`
  mutation AddLyric($id: ID!, $content: String!) {
    addLyricToSong(songId: $id, content: $content) {
      id
      lyrics {
        id
        content
        likes
      }
    }
  }
`;

export default graphql(mutation)(LyricCreate);
