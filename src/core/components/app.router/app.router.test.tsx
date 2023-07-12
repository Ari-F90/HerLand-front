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
        <Router
          initialEntries={["/home", "/about", "/figures", "/details/:id"]}
          initialIndex={number}
        >
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

  describe("When rendering and the path is '/about'", () => {
    test("Then it should be titles in the screen", async () => {
      await waitFor(async () => renderAppRouter(1));
      const element = await screen.findByRole("heading", {
        name: "About the project",
      });
      expect(element).toBeInTheDocument();
    });
  });
  describe("When rendering and the path is '/figures'", () => {
    test("Then, the title 'Herstory makers' should be in the screen", async () => {
      await waitFor(async () => renderAppRouter(2));
      const element = await screen.findByRole("heading", {
        name: "Herstory makers",
      });
      expect(element).toBeInTheDocument();
    });
  });
  describe("When rendering and the path is '/details/:id'", () => {
    test("Then, the title 'A closer look' should be in the screen", async () => {
      await waitFor(async () => renderAppRouter(3));
      const element = await screen.findByRole("heading", {
        name: "A closer look",
      });
      expect(element).toBeInTheDocument();
    });
  });
});
