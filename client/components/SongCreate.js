import React, { Component } from 'react';
import {graphql} from 'react-apollo';
import gql from 'graphql-tag';

class SongCreate extends Component {
   
    constructor(props) {
        super(props);
        this.state = {
            title: '',
        },
        this.submitHandler = this.submitHandler.bind(this)
    }

    submitHandler (e) {
        e.preventDefault();
        
        this.props.mutate({
            variables: {
                title: this.state.title
            }
        })
    }

    render() {
        return (
            <div className="container">
                <h3>Create a new song</h3>
                <form onSubmit={this.submitHandler}>
                    <label>Song Title:</label>
                    <input 
                        onChange={event => this.setState({title: event.target.value})}
                        value={this.state.title}
                    />
                </form>
            </div>
        )
    }
}

const mutation = gql`

    mutation AddSong ($title: String){
        addSong(title: $title) {
            id
            title
        }
    }
`;

export default graphql(mutation)(SongCreate);
