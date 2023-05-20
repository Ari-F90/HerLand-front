import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { MemoryRouter as Router } from "react-router-dom";
import { store } from "../../../store/store";
import { Menu, MenuOptions } from "./menu";

describe("Given Menu component", () => {
  describe("When it is rendered", () => {
    test("Then home should be in the screen", () => {
      const mockOptions: MenuOptions[] = [
        {
          label: "Home",
          path: "/home",
        },
      ];
      render(
        <Provider store={store}>
          <Router>
            <Menu props={mockOptions}></Menu>
          </Router>
        </Provider>
      );
      const element = screen.getByText(mockOptions[0].label);
      expect(element).toBeInTheDocument();
    });
  });
});
