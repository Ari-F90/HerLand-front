import { render, screen } from "@testing-library/react";
import { Header } from "./header";
import { MemoryRouter as Router } from "react-router-dom";
import { store } from "../../../store/store";
import { Provider } from "react-redux";

describe("Given the Header component", () => {
  describe("When it is rendered", () => {
    test("Then it should appear two images in the screen", () => {
      render(
        <Provider store={store}>
          <Router>
            <Header>
              <></>
            </Header>
            ;
          </Router>
        </Provider>
      );

      const elements = screen.getAllByRole("img");
      expect(elements.length).toBe(1);
    });
  });
});
