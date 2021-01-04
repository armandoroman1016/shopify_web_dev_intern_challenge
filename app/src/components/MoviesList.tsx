import React from "react";
import Movie from "./Movie";

import { Movie as M } from "../types";

interface Props {
  movies: M[];
  handleNomination: (movie: M, action: "add" | "delete") => void;
  listType: "Nominated" | "Search Results";
  nominated?: M[];
}

const MoviesList = (props: Props) => {
  const { movies, handleNomination, listType, nominated } = props;

  return (
    <div className="movieList">
      <h3>{listType}</h3>
      {listType === "Search Results"
        ? movies &&
          movies.map((m) => {
            return (
              <Movie
                movie={m}
                key={m.imdbID}
                handleNomination={handleNomination}
                buttonText="Nominate"
              />
            );
          })
        : nominated &&
          nominated.map((movie) => {
            return (
              <Movie
                movie={movie}
                key={movie.imdbID + "_nominated"}
                handleNomination={handleNomination}
                buttonText="Dismiss"
              />
            );
          })}
    </div>
  );
};

export default MoviesList;
