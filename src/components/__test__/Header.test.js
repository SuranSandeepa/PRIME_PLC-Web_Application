import React from "react";
import Header from "../Header";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

test(" Check Main Header", () => {
  const { getByTestId } = render(<Header />);
  const header = getByTestId("head");
  expect(header.textContent).toBe("Procument Management System");
});
