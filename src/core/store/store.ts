import { configureStore } from "@reduxjs/toolkit";
import { figureReducer } from "../../figures/reducer/figures.reducer";

export const store = configureStore({
  reducer: { figures: figureReducer },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
