import React from 'react';

import { useMutation } from "@apollo/client";
import { LIKE_LYRIC, LIKE_LYRIC_OPTIMISTIC_RESPONSE } from '../queries/apolloQueries';

const LyricList = ({lyrics}) => {

    const [ likeLyricMutation ] = useMutation(LIKE_LYRIC);


    const onLike = (id, likes) => {
        likeLyricMutation({ 
            variables: { id },
            optimisticResponse: {
                __typename: 'Mutation',
                likeLyric: {
                    id,
                    __typename: 'LyricType',
                    likes: likes + 1
                }
            }
            // refetchQueries: [ { query: FETCH_SONGS }]
        });
    };

    return (
        <ul className="collection">
           {lyrics.map(({ id, content, likes })=> (
                <li key={id} className="collection-item">
                   {content}
                   <div className="vote-box">
                       { likes }
                        <i className="material-icons"
                            onClick={() => onLike(id, likes)}
                            >thumb_up</i>
                    </div>
               </li>
           ))}
        </ul>
    );
}

export default LyricList;