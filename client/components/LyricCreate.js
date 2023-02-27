import React, { useState } from "react";
import { gql, useMutation } from "@apollo/client";

const mutation = gql`
  mutation AddLyric($id: ID!, $content: String!) {
    addLyricToSong(songId: $id, content: $content) {
      id
      lyrics {
        id
        content
        likes
      }
    }
  }
`;

const LyricCreate = ({ songId }) => {
  const [content, setContent] = useState("");
  const [mutateFunction] = useMutation(mutation);

  const handleSubmit = (event) => {
    event.preventDefault();

    mutateFunction({
      variables: {
        id: songId,
        content,
      },
    });

    setContent("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Add a lyric:</label>
      <input
        type="text"
        value={content}
        onChange={(event) => {
          setContent(event.target.value);
        }}
      ></input>
    </form>
  );
};

export default LyricCreate;
