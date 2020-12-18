import React, { SetStateAction, Dispatch } from "react";
import Movie from "./Movie";

import { Movie as M } from "../types";

interface Props {
  movies: Record<string, M>;
  handleNomination: (id: string) => void;
  listType: "Nominated" | "Search Results";
  nominated?: Set<string>;
}

const MoviesList = (props: Props) => {
  const { movies, handleNomination, listType, nominated } = props;

  return (
    <div>
      <h3>{listType}</h3>
      {listType === "Search Results"
        ? Object.keys(movies) &&
          Object.values(movies).map((m) => {
            return (
              <Movie
                movie={m}
                key={m.imdbID}
                handleNomination={handleNomination}
              />
            );
          })
        : nominated &&
          Array.from(nominated).map((id) => {
            return (
              <Movie
                movie={movies[id]}
                key={id + "_nominated"}
                handleNomination={handleNomination}
              />
            );
          })}
    </div>
  );
};

export default MoviesList;
