/* eslint-disable testing-library/no-render-in-setup */
/* eslint-disable testing-library/no-unnecessary-act */
import { configureStore } from "@reduxjs/toolkit";
import { fireEvent } from "@testing-library/react";

import { render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { store } from "../../core/store/store";
import { Figure } from "../models/figure";
import * as ac from "../reducer/figures.actions.creator";
import { figureReducer } from "../reducer/figures.reducer";
import { FigureApiRepo } from "../repository/figure.repo";
import { useFigures } from "./use.figures";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";

describe("Given the useFigures hook", () => {
  const mockFigure = {
    id: "1",
    name: "Figure1",
    img: "test1",
  } as unknown as Figure;
  let initialState = [{ id: "1", img: "test1", name: "Figure1" } as Figure];

  let elements: HTMLElement[];

  const mockStore = configureStore({
    reducer: { figures: figureReducer },
    preloadedState: {
      figures: [],
    },
  });

  const mockRepo = {
    url: "test",
    loadFigures: jest.fn(),
    loadOneFigure: jest.fn(),
  } as unknown as FigureApiRepo;
  beforeEach(async () => {
    const TestComponent = function () {
      const { loadFigures, loadOneFigure } = useFigures(mockRepo);
      return (
        <div>
          <button onClick={() => loadFigures()}></button>
          <button onClick={() => loadOneFigure("2")}></button>
        </div>
      );
    };

    await act(async () => {
      render(
        <>
          <Provider store={mockStore}>
            <MemoryRouter>
              <TestComponent></TestComponent>
            </MemoryRouter>
          </Provider>
        </>
      );
    });
    elements = await screen.findAllByRole("button");
  });
  describe("When the TestComponent is rendered", () => {
    test("We should find a button in the document", async () => {
      const element = await screen.findAllByRole("button");
      expect(element[0]).toBeInTheDocument();
    });
  });

  describe("When clicking on the first button", () => {
    test("Then it should call the repo method loadFigures", async () => {
      await fireEvent.click(elements[0]);
      expect(mockRepo.loadFigures).toHaveBeenCalled();
    });
  });
  describe("When clicking on the second button", () => {
    test("Then it should call the repo method loadOneFigure", async () => {
      const oneFigure = await fireEvent.click(elements[1]);
      expect(mockRepo.loadOneFigure).toHaveBeenCalled();
      expect(oneFigure).toEqual(true);
    });
  });
});
