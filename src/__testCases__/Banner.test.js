// src/components/Banner.test.js
import React from "react";
import { render, screen } from "@testing-library/react";
import Banner from "../Components/Banner";

test("renders banner text correctly", () => {
  render(<Banner />);
  const bannerText = screen.getByText(/Welcome to SpaceX/i);
  expect(bannerText).toBeInTheDocument();
});
