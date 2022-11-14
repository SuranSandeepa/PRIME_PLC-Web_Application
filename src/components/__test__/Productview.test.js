import React from "react";
import Productview from "../Productview";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

test(" Product view header test", () => {
  const { getByTestId } = render(<Productview />);
  const supheader = getByTestId("heading");
  expect(supheader.textContent).toBe("Added products:");
});
