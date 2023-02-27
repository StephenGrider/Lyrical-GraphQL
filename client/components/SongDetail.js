import React from "react";
import { Link, useParams } from "react-router-dom";
import LyricCreate from "./LyricCreate";
import LyricList from "./LyricList";
import songQuery from "../queries/song";
import { useQuery } from "@apollo/client";

const SongDetail = () => {
  const { id } = useParams();
  const { data, loading } = useQuery(songQuery, {
    variables: { id },
  });

  return (
    <div>
      <Link to="/">Back </Link>
      <h3>{loading ? "Loading..." : data.song.title}</h3>
      {!loading && <LyricList lyrics={data.song.lyrics} />}
      <LyricCreate songId={id} />
    </div>
  );
};

export default SongDetail;
