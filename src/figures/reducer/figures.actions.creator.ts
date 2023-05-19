import { createAction } from "@reduxjs/toolkit";
import { Figure } from "../models/figure";
import { figuresActions } from "./figure.actions.types";

export const loadCreator = createAction<Figure[]>(figuresActions.load);
export const loadOneCreator = createAction<Figure>(figuresActions.loadOne);
