import React, { Component } from 'react';
import {graphql} from 'react-apollo';
import fetchSong from '../quieries/fetchSong';

export class SongDetail extends Component {
    render() {
        console.log(this.props)
        return (
            <div>
                SongDetail
                
            </div>
        )
    }
}



export default graphql(fetchSong, {
    options: (props) => { return {variables: {id: props.match.params.id}}}
})(SongDetail)
