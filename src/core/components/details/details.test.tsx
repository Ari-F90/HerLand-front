/* eslint-disable no-restricted-globals */
/* eslint-disable testing-library/no-render-in-setup */
/* eslint-disable testing-library/no-unnecessary-act */

import { act, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import { useFigures } from "../../../figures/hooks/use.figures";
import { store } from "../../../store/store";
import Details from "./details";

jest.mock("../../../figures/hooks/use.figures");

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: () => ({
    id: "1",
  }),
}));

describe("Given Details page component", () => {
  beforeEach(async () => {
    (useFigures as jest.Mock).mockReturnValue({
      figures: [
        {
          id: "1",
          name: "figure1",
        },
        {
          id: "2",
          name: "figure2",
        },
      ],
      loadOneFigure: jest.fn(),
    });

    await act(async () => {
      render(
        <Provider store={store}>
          <MemoryRouter>
            <Details></Details>
          </MemoryRouter>
        </Provider>
      );
    });
  });

  describe("When we render the component", () => {
    test('Then, the title "A close look" should be in the document', () => {
      const element1 = screen.getByRole("heading");
      expect(element1).toBeInTheDocument();
    });
  });
  describe("When we call the 'GO BACK' button", () => {
    test("Then it will be back to the Figures List Page", async () => {
      const element2 = screen.getByRole("button");
      expect(element2).toBeInTheDocument();
    });
  });
});
