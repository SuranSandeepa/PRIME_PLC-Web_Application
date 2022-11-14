import React from "react";
import Orderform from "../Orderform";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

test("Check Order form selection", () => {
  const { getByTestId } = render(<Orderform />);
  const order = getByTestId("option");
  fireEvent.change(r, {
    value: "Approved",
  });
  expect(order.value).toBe("Approved");
});
