import React from "react";
import { render } from "@testing-library/react";

import App from "./app";
import { Provider } from "react-redux";
import { store } from "../../store/store";
import { Header } from "../components/header/header";
import { Footer } from "../components/footer/footer";

jest.mock("../components/header/header");

jest.mock("../components/footer/footer");

describe("Given the app component", () => {
  describe("When it is rendered", () => {
    test("renders learn react link", () => {
      render(
        <Provider store={store}>
          <App />
        </Provider>
      );
      expect(Header).toHaveBeenCalled();
      expect(Footer).toHaveBeenCalled();
    });
  });
});
