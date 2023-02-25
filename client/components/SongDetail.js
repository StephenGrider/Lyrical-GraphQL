import React, { Component } from "react";
import { Link } from "react-router";
import { graphql } from "react-apollo";
import LyricCreate from "./LyricCreate";
import LyricList from "./LyricList";
import query from "../queries/song";

class SongDetail extends Component {
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
