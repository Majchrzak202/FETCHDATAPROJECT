import React from "react";

import Movie from "./Movie";
import classes from "./MoviesList.module.css";

const MovieList = ({ movies }) => {
  return (
    <ul className={classes["movies-list"]}>
      {movies.map((movie) => (
        <Movie
          movie={movie}
          key={movie.id}
          title={movie.title}
          /* producer={movie.producer} */
          releaseDate={movie.releaseDate}
          openingText={movie.openingText}
          /* director={movie.director} */
        />
      ))}
    </ul>
  );
};

export default MovieList;
