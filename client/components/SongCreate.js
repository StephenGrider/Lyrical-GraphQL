import React, { Component } from 'react'

class SongCreate extends Component {
   
    constructor(props) {
        super(props);
        this.state = {
            title: ''
        }
    }

    render() {
        return (
            <div className="container">
                <h3>Create a new song</h3>
                <form>
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

export default SongCreate
