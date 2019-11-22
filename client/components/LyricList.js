import React, { Component } from 'react';
import gql from 'graphql-tag';

class LyricList extends Component {

    onLike(id) {
        console.log('test');
    
    }

    renderLyrics() {
        return (
            this.props.lyrics.map((lyric => {
                return (
                    <li key={lyric.id} className="collection-item">{lyric.content}
                        <i className="material-icons" onClick={() => this.onLike(lyric.id)}>thumb_up</i>
                    </li>)
            }))
        )
    }

    render() {

        console.log(this.props)
        return (
            <ul className="collection">
                {this.renderLyrics()}
            </ul>
        )
    }
}

const mutation = gql`
    mutation LikeLyric($id: ID!) {
        likeLyric(id: $id) {
            id
            likes
        }
    }
`;

export default LyricList
