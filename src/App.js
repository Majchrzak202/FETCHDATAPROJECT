import React, { useState, useEffect } from "react";
import MoviesList from "./components/MoviesList";
import "./App.css";
import useFetch from "./components/hooks/useFetch";
/* import PostMovie from "./components/PostMovie"; */

const api = {
  base: "https://react-http-project-6ee84-default-rtdb.europe-west1.firebasedatabase.app/movies.json" /*  "https://swapi.dev/api/films/" */,
};

function App() {
  const [movies, setMovies] = useState([]);

  

  const { isLoading, error, sendRequest: fetchMovies } = useFetch();

  useEffect(() => {
    const getMovies = (data) => {
      const loadedMovies = [];
  
      for (const key in data) {
        loadedMovies.push({
          id: key,
          title: data[key].title,
          releaseDate: data[key].releaseDate,
          openingText: data[key].openingText,
        });
      }
  
      setMovies(loadedMovies);
    };

    fetchMovies({
      url: api.base,
    },getMovies);
  }, [fetchMovies]);

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
      {/*   <PostMovie api={api} /> */}
      </section>
      <section>
        <button onClick={fetchMovies}>Fetch Movies</button>
      </section>
      <section>{content}</section>
    </React.Fragment>
  );
}

export default App;
