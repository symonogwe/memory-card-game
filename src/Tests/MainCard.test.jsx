import { render, screen } from "@testing-library/react";
import { it, expect, describe } from "vitest";
import MainCard from "../MainCard";

describe("MainCard", () => {
  it("should render with correct initial states and values", async () => {
    render(<MainCard />);

    const dataCards = await screen.findAllByTestId("data-card");
    expect(dataCards.length).toEqual(12);
  });
});
