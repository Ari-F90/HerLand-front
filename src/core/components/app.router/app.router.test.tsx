/* eslint-disable testing-library/no-wait-for-side-effects */

import { MemoryRouter as Router } from "react-router-dom";
import { render, screen, waitFor } from "@testing-library/react";
import { AppRouter } from "./app.router";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import { store } from "../../../store/store";

describe("Given AppRouter", () => {
  const renderAppRouter = (number: number) => {
    render(
      <Provider store={store}>
        <Router initialEntries={["/home", "/figures"]} initialIndex={number}>
          <AppRouter></AppRouter>
        </Router>
      </Provider>
    );
  };
  describe("When rendering and the path is '/home'", () => {
    test("Then it should be titles in the screen", async () => {
      await waitFor(async () => renderAppRouter(0));
      const element = await screen.findByRole("button");
      expect(element).toBeInTheDocument();
    });
  });

  describe("When rendering and the path is '/figures'", () => {
    test("Then, the title 'About us' should be in the screen", async () => {
      await waitFor(async () => renderAppRouter(1));
      const element = await screen.findByRole("heading", {
        name: "Herstory makers",
      });
      expect(element).toBeInTheDocument();
    });
  });
});
