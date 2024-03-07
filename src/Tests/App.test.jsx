import { render, screen } from "@testing-library/react";
import { it, expect, describe } from "vitest";
import App from "../App";

describe("App component", () => {
  it("Should render with correct state and initial values", () => {
    render(<App />);

    const navBar = screen.getByRole("navbar");
    expect(navBar).toBeInTheDocument();

    const instructionText = screen.getByText(/Get points by clicking/i);
    expect(instructionText).toBeInTheDocument;

    const mainCard = screen.getByRole("main-card");
    expect(mainCard).toBeInTheDocument();
  });
});
