import React from "react";
import Supliers from "../Supliers";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

test(" Supplier header test", () => {
  const { getByTestId } = render(<Supliers />);
  const supheader = getByTestId("supheading");
  expect(supheader.textContent).toBe("Suppliers:");
});
