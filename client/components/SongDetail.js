import React, { Component } from "react";
import { Link } from "react-router";
import gql from "graphql-tag";
import { graphql } from "react-apollo";
import LyricCreate from "./LyricCreate";
import LyricList from "./LyricList";
import query from "../queries/song";

class SongDetail extends Component {
  renderLyrics() {
    return (this.props.data.song.lyrics || []).map(({ id, content }) => {
      return (
        <li className="collection-item " key={id}>
          {content}
          {/* <i
            className="material-icons"
            onClick={() => {
              this.onSongDelete(id);
            }}
          >
            delete
          </i> */}
        </li>
      );
    });
  }

  render() {
    return (
      <div>
        <Link to="/">Back </Link>
        <h3>
          {this.props.data.loading ? "Loading..." : this.props.data.song.title}
        </h3>
        {!this.props.data.loading && (
          <LyricList lyrics={this.props.data.song.lyrics} />
        )}
        <LyricCreate songId={this.props.params.id} />
      </div>
    );
  }
}

export default graphql(query, {
  options: (props) => ({ variables: { id: props.params.id } }),
})(SongDetail);
