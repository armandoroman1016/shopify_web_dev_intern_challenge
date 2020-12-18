import React, { useState, SetStateAction } from "react";
import { Movie } from "../types";

const KEY = process.env.REACT_APP_API_KEY;

interface Props {
  setSearchRes: React.Dispatch<SetStateAction<Record<string, Movie>>>;
}

const Search = (props: Props) => {
  const { setSearchRes } = props;

  const [val, setVal] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formatted = val.trim().toLowerCase().split(" ").join("+");
    fetch(`http://www.omdbapi.com/?apikey=${KEY}&s=${formatted}`)
      .then((res) => res.json())
      .then((data) => {
        const map: Record<string, Movie> = {};
        data.Search.forEach((item: Movie) => {
          map[item.imdbID] = item;
        });
        setSearchRes(map);
        setVal("");
      })
      .catch((err) => console.log(`ERROR: ${err}`));
  };

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setVal(e.currentTarget.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="movieName">Movie Name</label>
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
