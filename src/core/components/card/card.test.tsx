import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { MemoryRouter as Router } from "react-router-dom";
import { Figure } from "../../../figures/models/figure";
import { store } from "../../../store/store";

import { Card } from "./card";

const mockFigure: Figure = {
  name: "figure1",
  img: "test",
} as unknown as Figure;

describe("Given a Card Figure component", () => {
  describe("When it is rendered", () => {
    render(
      <Provider store={store}>
        <Router>
          <Card figure={mockFigure}></Card>
        </Router>
      </Provider>
    );
    test("Then the figure's name should be in the document", () => {
      const element1 = screen.getByText(mockFigure.name);
      expect(element1).toBeInTheDocument();
    });
  });
});
