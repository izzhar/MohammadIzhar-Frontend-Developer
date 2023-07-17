import React from "react";
import { render, screen } from "@testing-library/react";
import GridItem from "../Components/GridItem";

test("renders grid item with rocket name correctly", () => {
  const mockRocket = {
    id: 1,
    name: "Rocket 1",
    status: "active",
    first_flight: "2022-01-01",
    type: "Type 1",
    imageURL: "https://example.com/rocket1.jpg",
  };

  render(<GridItem item={mockRocket} />);
  const rocketName = screen.getByText(/Rocket 1/i);
  expect(rocketName).toBeInTheDocument();
});
