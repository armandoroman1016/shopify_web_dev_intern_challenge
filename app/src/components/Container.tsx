import React from "react";
import Search from "./Search";
import MovieList from "./MoviesList";
import { Movie } from "../types";

const { useState, useEffect } = React;

interface Props {
  _?: number;
}

const Container = (props: Props) => {
  const [searchRes, setSearchRes] = useState<Record<string, Movie>>({});
  const [nominated, setNominated] = useState<Set<string>>(new Set());

  const handleNomination = (id: string) => {
    setNominated((prevState) => {
      const newState = new Set(prevState);
      if (newState.has(id)) newState.delete(id);
      else newState.add(id);
      return newState;
    });
  };

  return (
    <div>
      <h3>Movie Nominator</h3>
      <Search setSearchRes={setSearchRes} />
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
