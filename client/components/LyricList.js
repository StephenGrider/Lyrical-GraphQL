import React from "react";
import { gql, useMutation } from "@apollo/client";

const mutation = gql`
  mutation AddLike($id: ID!) {
    likeLyric(id: $id) {
      id
      likes
    }
  }
`;

const LyricList = ({ lyrics }) => {
  const [mutateFunction] = useMutation(mutation);

  const onLike = (id, currentLikes) => {
    mutateFunction({
      variables: {
        id,
      },
      optimisticResponse: {
        __typename: "Mutation",
        likeLyric: {
          id,
          __typename: "LyricType",
          likes: currentLikes + 1,
        },
      },
    });
  };

  const renderLyrics = () => {
    return (lyrics || []).map(({ id, content, likes }) => {
      return (
        <li className="collection-item " key={id}>
          {`${content} (${likes || 0})`}
          <i
            className="material-icons"
            onClick={() => {
              onLike(id, likes);
            }}
          >
            thumb_up
          </i>
        </li>
      );
    });
  };

  return <ul className="collection">{renderLyrics()}</ul>;
};

export default LyricList;
