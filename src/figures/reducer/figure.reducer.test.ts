import { Figure } from "../models/figure";
import * as ac from "./figures.actions.creator";
import { figureReducer } from "./figures.reducer";

describe("Given the figureReducer", () => {
  let initialState: Figure[] = [{ id: "1", name: "figure" } as Figure];
  describe("When the loadFigures method is called", () => {
    test("Then it should return all the figures in the data base", () => {
      const figures: Figure[] = [
        {
          id: "1",
          name: "Figure1",
          img: "test",
        } as Figure,
      ];
      const action = ac.loadCreator(figures);
      const state = figureReducer(initialState, action);
      expect(state).toEqual(figures);
    });
  });

  describe("When the loadOneFigure is called", () => {
    test("Then it should return the asked figure", () => {
      const figure2: Figure = {
        id: "2",
        name: "Figure2",
        img: "test2",
      } as Figure;
      const action2 = ac.loadOneCreator(figure2);
      const state2 = figureReducer(initialState, action2);
      expect(state2).toEqual({ ...initialState, payload: figure2 });
    });
  });
  describe("When the default case method is called", () => {
    test("Then it should return the initial state", () => {
      const action3 = { type: "" };
      const state3 = figureReducer(initialState, action3);
      expect(state3).toEqual(initialState);
    });
  });
});
