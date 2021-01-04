import React, { useState, SetStateAction } from "react";
import { Movie } from "../types";

const KEY = process.env.REACT_APP_API_KEY;

interface Props {
  setSearchRes: React.Dispatch<SetStateAction<Movie[]>>;
  nominated: Movie[];
}

const Search = (props: Props) => {
  const { setSearchRes, nominated } = props;

  const [val, setVal] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formatted = val.trim().toLowerCase().split(" ").join("+");
    fetch(`http://www.omdbapi.com/?apikey=${KEY}&s=${formatted}`)
      .then((res) => res.json())
      .then((data) => {
        if (!data.Search) throw new Error("Please enter a search title");
        const nominatedIds = new Set(nominated.map((i) => i.imdbID));
        data.Search.forEach((m: Movie) => {
          if (nominatedIds.has(m.imdbID)) m.nominated = true;
        });
        setSearchRes(data.Search);
        setVal("");
      })
      .catch((err) => console.log(err));
  };

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setVal(e.currentTarget.value);
  };

  return (
    <form className="moviesForm" onSubmit={handleSubmit}>
      <label htmlFor="movieName">Search movie titles</label>
      <input
        placeholder="i.e 'Home Alone'"
        name="movieName"
        value={val}
        onChange={handleChange}
      />
      <button type="submit">SEARCH</button>
    </form>
  );
};

export default Search;
