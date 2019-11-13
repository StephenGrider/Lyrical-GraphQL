import React, { Component } from 'react';
import {graphql} from 'react-apollo';
import fetchSong from '../quieries/fetchSong';
import {Link} from 'react-router-dom';
import LyricCreate from './LyricCreate';

export class SongDetail extends Component {
    render() {
        const { song } = this.props.data;

        if (!song) {
            return <div>Loading...</div>;
        } else {
            return (
                <div>
                    <Link to="/">Back</Link>
                    <h3>{song.title}</h3>
                    <LyricCreate songId={this.props.match.params.id}/>
                </div>
            )
        }
    }
}


export default graphql(fetchSong, {
    options: (props) => { return {variables: {id: props.match.params.id}}}
})(SongDetail)
