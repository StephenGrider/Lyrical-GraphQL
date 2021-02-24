import React, { useState } from 'react';

import { useMutation } from "@apollo/client";
import { withRouter } from 'react-router-dom';
import { ADD_LYRIC_TO_SONG } from '../queries/apolloQueries';

const LyricCreate = ({songId, history}) => {

    const [content, setContent] = useState('');
    const [ addLyricToSongMutation] = useMutation(ADD_LYRIC_TO_SONG);

    const onSubmit = (event) => {
        event.preventDefault();

        addLyricToSongMutation({ 
            variables: { 
                songId,
                content
            }
        }).then(()=> setContent(''))
        .then(() => history.push('/'));
    }

    return (
        <form onSubmit={onSubmit}>
            <label>Add a Lyric</label>
            <input 
                value={content}
                onChange={event => setContent(event.target.value)}
            />
        </form>
    );
};

export default LyricCreate;