import React, { Component } from "react";

class LyricList extends Component {
  renderLyrics() {
    return (this.props.lyrics || []).map(({ id, content }) => {
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
    return <ul className="collection">{this.renderLyrics()}</ul>;
  }
}

export default LyricList;
