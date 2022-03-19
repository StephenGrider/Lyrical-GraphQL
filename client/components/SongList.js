import React from 'react';
import { DELETE_SONG, FETCH_SONGS } from '../queries/apolloQueries';
import { Link } from 'react-router-dom';
import { useQuery, useMutation } from "@apollo/client";

const SongList = () => {
    const { data, loading, error } = useQuery(FETCH_SONGS);
    const [ deleteSongMutation] = useMutation(DELETE_SONG);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>ERROR: {error.message}</p>;
    if (!data) return <p>Not found</p>;

    const deleteSong = (id) => {
        deleteSongMutation({ 
            variables: { id },
            refetchQueries: [ { query: FETCH_SONGS }]
        });
    }

    return (
        <div>
            <ul className="collection">
                {data && data.songs && data.songs.map(({id, title}) => (
                    <li key={id} className="collection-item">
                        <Link to={`/songs/${id}`}>
                            {title}
                        </Link>
                        <i
                            className="material-icons"
                            onClick={() => deleteSong(id)}
                            >delete</i>
                    </li>
                ))}
            </ul>
            <Link 
                to="/songs/new"
                className="btn-floating btn-large red right">
                    <i className="material-icons">add</i>
            </Link>
        </div>
    )

}

export default SongList;