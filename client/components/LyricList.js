import React, { Component } from 'react'

class LyricList extends Component {

    renderLyrics() {
        return (
            this.props.lyrics.map((lyric => {
                return <li key={lyric.id} className="collection-item">{lyric.content}</li>
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

export default LyricList
