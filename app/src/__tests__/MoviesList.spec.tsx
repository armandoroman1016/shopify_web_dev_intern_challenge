import * as React from "react";
import { render } from "@testing-library/react";
import MoviesList from "../components/MoviesList";
import { Movie as MovieObj } from "../types";

const MOVIES: Record<string, MovieObj> = {
  1: {
    Poster: "https://rb.gy/enaq3a",
    Title: "Some arbitrary movie title",
    Type: "Classic",
    Year: "1938",
    imdbID: "123",
  },
};

describe("MoviesList", () => {
  it("Will display 'Nominated' when specified as listType", async () => {
    const { queryByText } = render(
      <MoviesList
        listType="Nominated"
        handleNomination={() => null}
        movies={MOVIES}
      />,
    );
    const heading = await queryByText(/Nominated/);
    expect(heading).toBeInTheDocument();
  });
  it("Will display 'Search Results' when specified as listType", async () => {
    const { queryByText } = render(
      <MoviesList
        listType="Search Results"
        handleNomination={() => null}
        movies={MOVIES}
      />,
    );

    const heading = await queryByText(/Search Results/);
    expect(heading).toBeInTheDocument();
  });
  it("Will not display 'Search Results' when 'Nominated' is specified as listType", async () => {
    const { queryByText } = render(
      <MoviesList
        listType="Nominated"
        handleNomination={() => null}
        movies={MOVIES}
      />,
    );

    const heading = await queryByText(/Search Results/);
    expect(heading).not.toBeInTheDocument();
  });
  it("Will not display 'Nominated' when 'Search Results' is specified as listType", async () => {
    const { queryByText } = render(
      <MoviesList
        listType="Search Results"
        handleNomination={() => null}
        movies={MOVIES}
      />,
    );

    const heading = await queryByText(/Nominated/);
    expect(heading).not.toBeInTheDocument();
  });
});
