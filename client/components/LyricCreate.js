import React, { Component } from 'react';
import gql from 'graphql-tag';
import {graphql} from 'react-apollo';

export class LyricCreate extends Component {

    constructor(props) {
        super(props);

        this.state = {
            content: ''
        }
    }

    submitContent (e) {
        e.preventDefault();

        this.props.mutate({
            variables: {
                content: this.state.content, 
                songId: this.props.songId
            }
        }).then(() => {
            this.setState({content: ''})
        })
    }


    render() {

        console.log(this.props)
        return (
            <form onSubmit={(e) => this.submitContent(e)}>
                <label>Add a Lyric</label>
                <input type="text" value={this.state.content} onChange={(e) => this.setState({ content: e.target.value})}/>
            </form>
        )
    }
}

const mutation = gql`
    mutation AddLyricToSong($content: String, $songId: ID) {
        addLyricToSong (content: $content, songId: $songId) {
            id
            lyrics {
                content
            }
        }
    }
`;

export default graphql(mutation)(LyricCreate)
