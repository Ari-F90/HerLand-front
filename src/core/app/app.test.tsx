import React from "react";
import { render } from "@testing-library/react";

import App from "./app";

describe("Given the app component", () => {
  describe("When it is rendered", () => {
    test("renders learn react link", () => {
      render(<App />);
    });
  });
});
