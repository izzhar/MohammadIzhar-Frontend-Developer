// src/components/DataGrid.test.js
import React from "react";
import { render, screen } from "@testing-library/react";
import DataGrid from "../Components/DataGrid";
import { RocketsContext } from "../contexts/RocketsContext";

test("renders data grid with rockets correctly", () => {
  const mockRockets = [
    {
      id: 1,
      name: "Rocket 1",
      status: "active",
      first_flight: "2022-01-01",
      type: "Type 1",
      imageURL: "https://example.com/rocket1.jpg",
    },
    {
      id: 2,
      name: "Rocket 2",
      status: "inactive",
      first_flight: "2022-02-02",
      type: "Type 2",
      imageURL: "https://example.com/rocket2.jpg",
    },
  ];

  render(
    <RocketsContext.Provider value={{ rockets: mockRockets }}>
      <DataGrid />
    </RocketsContext.Provider>
  );

  const rocketNames = screen.getAllByText(/Rocket /i);
  expect(rocketNames.length).toBe(2);
});
