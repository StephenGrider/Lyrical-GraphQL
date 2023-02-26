import React, { useState } from "react";
import { gql, useMutation } from "@apollo/client";
import { Link, useHistory } from "react-router-dom";
import songs from "../queries/songs";

const mutation = gql`
  mutation AddSong($title: String) {
    addSong(title: $title) {
      id
      title
    }
  }
`;

const SongCreate = () => {
  const [mutateFunction] = useMutation(mutation);
  const [title, setTitle] = useState("");
  const history = useHistory();

  const onSubmit = (event) => {
    event.preventDefault();

    mutateFunction({
      variables: {
        title,
      },
      refetchQueries: [
        {
          query: songs,
        },
      ],
    }).then(() => {
      history.push("/");
    });
  };

  return (
    <div>
      <Link to="/">Back </Link>
      <h3>Create a new song</h3>
      <form onSubmit={onSubmit}>
        <label>Song title:</label>
        <input
          type="text"
          value={title}
          onChange={(event) => {
            setTitle(event.target.value);
          }}
        ></input>
      </form>
    </div>
  );
};

export default SongCreate;
