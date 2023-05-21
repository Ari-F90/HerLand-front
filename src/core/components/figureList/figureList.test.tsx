/* eslint-disable testing-library/no-unnecessary-act */
/* eslint-disable testing-library/no-render-in-setup */

import { render, screen, act, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import { useFigures } from "../../../figures/hooks/use.figures";
import { Figure } from "../../../figures/models/figure";
import { FigureApiRepo } from "../../../figures/repository/figure.repo";
import { store } from "../../../store/store";
import { FigureList } from "./figureList";

jest.mock("../card/card");

const mockRepo = {
  url: "testing",
  loadFigures: jest.fn(),
  loadOneFigure: jest.fn(),
} as unknown as FigureApiRepo;

describe("Given Figure List component", () => {
  const mockLoadFigures = jest.fn();
  const mockLoadOneFigure = jest.fn();

  beforeEach(() => {
    (useFigures as jest.Mock).mockReturnValue({
      figures: [
        {
          id: "1",
          name: "test1",
          category: "Science",
        } as Figure,
        {
          id: "2",
          name: "test2",
          category: "Literature",
        } as Figure,
      ],
      loadFigures: mockLoadFigures,
      loadOneFigure: mockLoadOneFigure,
    });

    render(
      <Provider store={store}>
        <MemoryRouter>
          <FigureList></FigureList>
        </MemoryRouter>
      </Provider>
    );
  });

  describe("When the Figure list component is rendered", () => {
    test("Then it should appear the 'previous page' button", async () => {
      await act(async () => {
        const buttons = await screen.findAllByRole("button");
        expect(buttons[0]).toBeInTheDocument();
        await userEvent.click(buttons[0]);
        expect(useFigures(mockRepo).loadFigures).toHaveBeenCalled();
      });
    });
    test("Then it should appear the 'next page' button", async () => {
      await act(async () => {
        const buttons = await screen.findAllByRole("button");
        expect(buttons[1]).toBeInTheDocument();
        await userEvent.click(buttons[1]);
        expect(useFigures(mockRepo).loadFigures).toHaveBeenCalled();
      });
    });
  });
});
