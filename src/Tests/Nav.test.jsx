import { render, screen } from "@testing-library/react";
import { it, expect, describe } from "vitest";

import Nav from "../Nav";

describe("Nav component", () => {
  it("should render with correct initial values and state", () => {
    render(<Nav />);

    const header = screen.getByText(/rick & morty/i);
    expect(header).toBeInTheDocument();

    const scoreP = screen.getByTestId("score-p");
    expect(scoreP).toBeInTheDocument();

    const bestScoreP = screen.getByText(/best score/i);
    expect(bestScoreP).toBeInTheDocument();
  });

  it("should render the value of score with an initial value of 0", () => {
    render(<Nav score={0} bestScore={0} />);

    const scoreP = screen.getByTestId("score-p");
    expect(scoreP).toHaveTextContent("Score: 0");

    const bestScoreP = screen.getByText(/best score/i);
    expect(bestScoreP).toHaveTextContent("Best Score: 0");
  });
});
