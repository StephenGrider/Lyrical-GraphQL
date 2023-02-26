import { gql } from "@apollo/client";

export default gql`
  query GetSongs {
    songs {
      id
      title
    }
  }
`;
