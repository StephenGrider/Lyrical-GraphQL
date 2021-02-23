import React, { useState } from 'react';

import { useMutation } from "@apollo/client";
import { withRouter, Link } from 'react-router-dom';
import { ADD_SONG, FETCH_SONGS} from '../queries/apolloQueries';

const SongCreate = ({history}) => {
    const [songTitle, setSongTitle] = useState('');
    const [ addSongMutation] = useMutation(ADD_SONG);

    const onSubmit = (e) => {
        e.preventDefault();

        addSongMutation({ 
            variables: { title: songTitle },
            refetchQueries: [ { query: FETCH_SONGS }]
        }).then(() => {
            history.push('/');
        });
    }
    return (
        <div>
            <Link to="/">Back</Link>
            <h3>Create a New Song</h3>
            <form onSubmit={onSubmit}>
                <label>Song Title</label>
                <input 
                    onChange={e => setSongTitle(e.target.value)}
                    value={songTitle}
                />
            </form>
        </div>
    );
}

export default withRouter(SongCreate);