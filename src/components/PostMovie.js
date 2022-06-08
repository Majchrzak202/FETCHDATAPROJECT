import React, { useState, useEffect } from "react";
import AddMovie from "./AddMovie";
import useFetch from "./hooks/useFetch";

const PostMovie = ({ api }) => {
  const [movies, setMovies] = useState("");

  const addMovieHandler = (movie) => {
    setMovies(movie).then;
    postMovies();
  };



  const { sendRequest: postMovies } = useFetch({
    url: api.base,
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: { movies },
  }, addMovieHandler);

  useEffect(() => {
    postMovies();
  }, [postMovies]);

  return (
    <div>
      <AddMovie addMovieHandler={addMovieHandler} />
    </div>
  );
};

export default PostMovie;
