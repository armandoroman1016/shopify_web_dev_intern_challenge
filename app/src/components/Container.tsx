import React from "react";
import Search from "./Search";
import MovieList from "./MoviesList";
import { Movie } from "../types";

const { useState } = React;

interface Props {
  _?: number;
}

const Container = (props: Props) => {
  const [searchRes, setSearchRes] = useState<Movie[]>([]);
  const [nominated, setNominated] = useState<Movie[]>([]);

  const handleNomination = (movie: Movie, action: "add" | "delete") => {
    if (action === "add") {
      setNominated((prevState) => [
        ...prevState,
        { ...movie, nominated: true },
      ]);
      setSearchRes((prevState) =>
        prevState.map((m: Movie) => {
          if (m.imdbID === movie.imdbID) m.nominated = true;
          return m;
        })
      );
    } else {
      setNominated((prevState) => {
        return prevState.filter((m) => m.imdbID !== movie.imdbID);
      });
      setSearchRes((prevState) =>
        prevState.map((m: Movie) => {
          if (m.imdbID === movie.imdbID) m.nominated = false;
          return m;
        })
      );
    }
  };

  return (
    <div className="app-container">
      <h2>Movie Nominator</h2>
      <Search setSearchRes={setSearchRes} nominated={nominated} />
      <MovieList
        listType="Search Results"
        movies={searchRes}
        handleNomination={handleNomination}
      />
      <MovieList
        nominated={nominated}
        listType="Nominated"
        movies={searchRes}
        handleNomination={handleNomination}
      />
    </div>
  );
};

export default Container;
