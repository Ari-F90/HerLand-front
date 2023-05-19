import { createReducer } from "@reduxjs/toolkit";
import { Figure } from "../models/figure";
import * as ac from "./figures.actions.creator";

const initialState: Figure[] = [];

export const figureReducer = createReducer(initialState, (builder) => {
  builder.addCase(ac.loadCreator, (_state, { payload }) => payload);
  builder.addCase(ac.loadOneCreator, (state, { payload }) => {
    return { ...state, payload };
  });
  builder.addDefaultCase((state) => state);
});
