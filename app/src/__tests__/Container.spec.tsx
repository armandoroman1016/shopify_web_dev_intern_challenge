import * as React from "react";

import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Container from "../components/Container";

describe("Container", () => {
  it("Renders 'Movie Nominator'", async () => {
    const { getByText } = render(<Container />);

    const heading = getByText("Movie Nominator");
    expect(heading).toBeInTheDocument();
  });
});
