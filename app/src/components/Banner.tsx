import React, { useState } from "react";
import { Movie } from "../types";

interface Props {
  nominated: Movie[];
}

export const Banner = (props: Props) => {
  const { nominated } = props;
  const [open, setOpen] = useState<boolean>(true);

  return (
    <div
      className={open && nominated.length >= 5 ? "banner open" : "banner close"}
      onClick={() => setOpen(false)}
    >
      <button className="close btn">x</button>
      <p>You have nominated {nominated.length} movies.</p>
    </div>
  );
};
