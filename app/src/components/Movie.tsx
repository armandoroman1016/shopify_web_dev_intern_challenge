import React from "react";
import { Movie as M } from "../types";

interface Props {
  movie: M;
  handleNomination: (movie: M, action: "add" | "delete") => void;
  buttonText: "Nominate" | "Dismiss";
}

const Movie = (props: Props): JSX.Element => {
  const { movie, handleNomination, buttonText } = props;

  const nominate = () => {
    handleNomination(movie, movie.nominated ? "delete" : "add");
  };

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
      <button
        onClick={nominate}
        disabled={buttonText === "Nominate" && movie.nominated}
      >
        {buttonText}
      </button>
    </div>
  );
};

export default Movie;
