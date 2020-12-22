import React, { SetStateAction } from "react";
import { Movie as MovieObj } from "../types";

interface Props {
  movie: MovieObj;
  handleNomination: (id: string) => void;
}

const Movie = (props: Props): JSX.Element => {
  const { movie, handleNomination } = props;

  return (
    <div className="movie">
      <h4>{movie.Title}</h4>
      {movie.Poster && (
        <img
          data-testid="movie-poster"
          src={movie.Poster}
          alt={`Poster for ${movie.Title}`}
        />
      )}
      <p>{movie.Year}</p>
      <button onClick={() => handleNomination(movie.imdbID)}>NOMINATE</button>
    </div>
  );
};

export default Movie;
