import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../../store/store";
import { FigureApiRepo } from "../repository/figure.repo";
import * as ac from "../reducer/figures.actions.creator";
import { Figure } from "../models/figure";

export function useFigures(repo: FigureApiRepo) {
  const figures = useSelector((state: RootState) => state.figures);
  const dispatch = useDispatch<AppDispatch>();

  const loadFigures = useCallback(
    async (pageChange: number = 0, category: string = "all") => {
      try {
        const data = await repo.loadFigures(pageChange, category);
        dispatch(ac.loadCreator(data.results));
      } catch (error) {
        console.log((error as Error).message);
      }
    },
    [dispatch, repo]
  );
  const loadOneFigure = async (id: Figure["id"]) => {
    try {
      const data = await repo.loadOneFigure(id);
      dispatch(ac.loadOneCreator(data.results[0]));
    } catch (error) {
      console.log((error as Error).message);
    }
  };

  return {
    figures,
    loadFigures,
    loadOneFigure,
  };
}
