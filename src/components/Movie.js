import React from "react";

import classes from "./Movie.module.css";

const Movie = ({ title, releaseDate, openingText, producer, director }) => {
  return (
    <li className={classes.movie}>
      <h2>{title}</h2>
      <h4>{director}</h4>
      <h3>{releaseDate}</h3>
      <p>{openingText}</p>
      <p>{producer}</p>
    </li>
  );
};

export default Movie;
