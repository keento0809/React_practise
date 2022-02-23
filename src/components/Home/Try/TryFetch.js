import React, { useEffect, useState, useCallback } from "react";
import TryList from "./TryList";

const TryFetch = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const FetchMovieHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch("https://swapi.dev/api/people/");
      if (!response.ok) {
        throw new Error("Something is wrong.");
      }
      const data = await response.json();

      const transformedPeople = data.results.map((person) => {
        return {
          name: person.name,
          height: person.director,
          mass: person.mass,
          birthYear: person.birth_year,
        };
      });

      setMovies(transformedPeople);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  });

  useEffect(() => {
    FetchMovieHandler();
  }, []);

  let content = <p>Found No Movies.</p>;

  if (movies.length > 0) content = <TryList persons={movies} />;

  if (error) content = { error };

  if (isLoading) content = <p>Loading...</p>;

  return <div>{content}</div>;
};

export default TryFetch;
