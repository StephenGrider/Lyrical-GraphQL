import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag'
import { hashHistory, Link } from 'react-router';

class SongCreate extends Component {
  constructor(props) {
    super(props);

    this.state = { title: '' };
  }

  onSubmit(event) {
    event.preventDefault();

    this.props.mutate({ variables: {
      title: this.state.title
    }})
      .then(response =>  hashHistory.push(`/songs/${response.data.addSong.id}`));
  }

  render() {
    return (
      <div>
        <Link to="/">Back</Link>
        <h3>Create a new Song</h3>
        <form onSubmit={this.onSubmit.bind(this)}>
          <label>Song Title</label>
          <input
            onChange={event => this.setState({ title: event.target.value })}
            value={this.state.title}
          />
        </form>
      </div>
    );
  }
}

const mutation = gql`
  mutation AddSong($title: String) {
    addSong(title: $title) {
      id
      title
      lyrics {
        id
      }
    }
  }
`;

export default graphql(mutation)(SongCreate);
