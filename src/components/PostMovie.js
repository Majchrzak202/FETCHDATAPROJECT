import React /* { useState } */ from "react";
import AddMovie from "./AddMovie";
/* import useFetch from "./hooks/useFetch"; */

const PostMovie = ({ api }) => {
  const addMovieHandler = (movie) => {
    fetch(api.base, {
      method: "POST",
      body: JSON.stringify(movie),
    });
  };

  return (
    <div>
      <AddMovie addMovieHandler={addMovieHandler} />
    </div>
  );
};

export default PostMovie;
