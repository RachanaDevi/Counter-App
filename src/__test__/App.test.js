import React from "react";
import { render } from "@testing-library/react";
import App from "../App";

test("should have title as Counter App", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Counter App/i);
  expect(linkElement).toBeInTheDocument();
});
