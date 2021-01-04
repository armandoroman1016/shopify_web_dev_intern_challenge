import * as React from "react";
import { findByText, fireEvent, render } from "@testing-library/react";
import { Movie as MovieObj } from "../types";
import "@testing-library/user-event";
import Movie from "../components/Movie";

const FILM: MovieObj = {
  Poster: "https://rb.gy/enaq3a",
  Title: "Some arbitrary movie title",
  Type: "Classic",
  Year: "1938",
  imdbID: "123",
};

describe("Movie", () => {
  it("Will render the movie title", async () => {
    const { findByText } = render(
      <Movie movie={FILM} handleNomination={() => null} />
    );
    const title = await findByText(FILM.Title);
    expect(title).toBeInTheDocument();
  });
  it("Will render the movie poster", async () => {
    const { container } = render(
      <Movie movie={FILM} handleNomination={() => null} />
    );
    const img = container.querySelector("img");
    expect(img?.src).toBe(FILM.Poster);
  });
  it("Will display the films year of release", async () => {
    const { findByText } = render(
      <Movie movie={FILM} handleNomination={() => null} />
    );
    const year = await findByText(FILM.Year);
    expect(year).toBeInTheDocument();
  });
  it("Will fire function on button element", async () => {
    const cb = jest.fn();
    const { container } = render(<Movie movie={FILM} handleNomination={cb} />);
    const btn = container.querySelector("button");
    btn && fireEvent.click(btn);
    expect(cb.mock.calls.length).toBe(1);
  });
});
