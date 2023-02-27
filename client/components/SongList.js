import React from "react";
import { useQuery, gql, useMutation } from "@apollo/client";
import { Link } from "react-router-dom";
import songs from "../queries/songs";

const mutation = gql`
  mutation DeleteSong($id: ID) {
    deleteSong(id: $id) {
      id
    }
  }
`;

const SongList = () => {
  const { loading, data, refetch } = useQuery(songs);
  const [mutateFunction] = useMutation(mutation);

  const onSongDelete = (id) => {
    mutateFunction({
      variables: {
        id,
      },
    }).then(() => {
      refetch();
    });
  };

  const renderSongs = () => {
    return (data.songs || []).map(({ id, title }) => {
      return (
        <li className="collection-item " key={id}>
          <Link to={`/song/${id}`}>{title}</Link>
          <i
            className="material-icons"
            onClick={() => {
              onSongDelete(id);
            }}
          >
            delete
          </i>
        </li>
      );
    });
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <ul className="collection">{renderSongs()}</ul>
      <Link to="/song/new" className="btn-floating btn-large red right">
        <i className="material-icons">add</i>
      </Link>
    </div>
  );
};

export default SongList;
