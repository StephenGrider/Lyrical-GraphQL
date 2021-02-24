import { gql } from "@apollo/client";

export const GET_SONG =  gql`
    query SongQuery($id: ID!) {
        song(id: $id) {
            id
            title
            lyrics {
                id
                content
                likes
            }
        }
    }
`;

export const ADD_SONG = gql`
    mutation AddSong($title: String) {
        addSong(title: $title) {
            id
            title
        }
    }
`;

export const FETCH_SONGS = gql`
    {
        songs {
            id
            title
        }
    }
`;

export const DELETE_SONG = gql`
    mutation DeleteSong($id: ID) {
        deleteSong(id: $id) {
            id
        }
    }
`;

export const ADD_LYRIC_TO_SONG = gql`
    mutation AddLyricToSong($content: String, $songId: ID) {
        addLyricToSong(content: $content, songId: $songId) {
        id
            lyrics {
                content
            }
        }
    }
`;

export const LIKE_LYRIC = gql`
    mutation LikeLyric($id: ID) {
        likeLyric(id: $id) {
            id
            likes
        }
    }
`;
