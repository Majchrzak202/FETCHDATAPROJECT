import React, { useState, useEffect } from "react";
import MoviesList from "./components/MoviesList";
import "./App.css";
import AddMovie from "./components/AddMovie";

const api = {
  base: "https://swapi.dev/api/films/",
};

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchMovies()
  }, [])

  const fetchMovies = () => {
    setIsLoading(true);
    setError(null);
    fetch(api.base)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setMovies(data.results);
      })
      .catch((error) => {
        setError(error);
      }); setIsLoading(false)
  };

  function addMovieHandler(movie) {
    console.log(movie)
  }

  let content = 'Found no movies'

  if (movies.length > 0) {
    content =  <MoviesList movies={movies} />
  }

  if (error) {
    content = <p>{error.message}</p>
  }

  if (isLoading) {
    content = 'Loading...'
  }

 
 

  return (
    <React.Fragment>
      <section>
      <AddMovie onAddMovie={addMovieHandler}/>
      </section>
      <section>
        <button onClick={fetchMovies}>Fetch Movies</button>
      </section>
      <section>
        {content}
      </section>
    </React.Fragment>
  );
}

export default App;

 

  
