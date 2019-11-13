import React, { Component } from 'react';
import {graphql} from 'react-apollo';
import fetchSong from '../quieries/fetchSong';

export class SongDetail extends Component {
    render() {
        const { song } = this.props.data;

        if (!song) {
            return <div>Loading...</div>;
        } else {
            return (
                <div>
                    {song.title}  
                </div>
            )
        }
    }
}




export default graphql(fetchSong, {
    options: (props) => { return {variables: {id: props.match.params.id}}}
})(SongDetail)
