import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import { useParams } from 'react-router-dom';

import { GET_SONG } from '../queries/apolloQueries';
import { useQuery } from "@apollo/client";
import LyricCreate from './LyricCreate';
import LyricList from './LyricList';

const SongDetail = ({history}) => {

    let { id } = useParams();
    const { data, loading, error } = useQuery(GET_SONG, {
        variables: { id }
    });

    if (loading) return <p>Loading...</p>;
    if (error) return <p>ERROR: {error.message}</p>;
    if (!data?.song) return <p>Not found</p>;
    
    const { title, lyrics } = data.song;

    console.dir(data.song);
    
    return (<div>
        <Link to="/">Back</Link>
        <h3>{title}</h3>
        <LyricList lyrics={lyrics} />
        <LyricCreate songId={id} history={history} />
    </div>);
}

export default withRouter(SongDetail);