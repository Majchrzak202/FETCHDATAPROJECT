import React, { useState, useEffect } from "react";
import MoviesList from "./components/MoviesList";
import "./App.css";
import AddMovie from "./components/AddMovie";
import useFetch from "./components/hooks/useFetch";

const api = {
  base: "https://react-http-project-6ee84-default-rtdb.europe-west1.firebasedatabase.app/movies.json" /*  "https://swapi.dev/api/films/" */,
};

function App() {
  const [movies, setMovies] = useState([]);

  const getMovies = (data) => {
    const loadedMovies = [];

    for (const key in data) {
      loadedMovies.push({
        id: key,
        title: data[key].title,
        relaseDate: data[key].relaseDate,
        openingText: data[key].openingText,
      });
    }

    setMovies(loadedMovies);
  };

  const {
    isLoading,
    error,
    sendRequest: fetchMovies,
  } = useFetch(
    {
      url: api.base,
    },
    getMovies
  );

  useEffect(() => {
    fetchMovies();
  }, []);

  console.log(error);

  function addMovieHandler(movie) {
    fetch(
      "https://react-http-project-6ee84-default-rtdb.europe-west1.firebasedatabase.app/movies.json",
      {
        method: "POST",
        body: JSON.stringify(movie),
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {});
  }

  let content = "Found no movies";

  if (movies === "undefined") {
    return null;
  }

  if (movies.length > 0) {
    content = <MoviesList movies={movies} />;
  }

  if (error) {
    content = <p>{error.message}</p>;
  }

  if (isLoading) {
    content = "Loading...";
  }

  return (
    <React.Fragment>
      <section>
        <AddMovie onAddMovie={addMovieHandler} />
      </section>
      <section>
        <button onClick={fetchMovies}>Fetch Movies</button>
      </section>
      <section>{content}</section>
    </React.Fragment>
  );
}

export default App;
