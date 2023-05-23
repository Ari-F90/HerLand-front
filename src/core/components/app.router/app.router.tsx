import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import { menuOptions } from "../menu/menu";

const HomePage = lazy(() => import("../pages/homepage/homepage"));
const AboutPage = lazy(() => import("../pages/aboutpage/aboutpage"));
const FigureListPage = lazy(
  () => import("../pages/figureListpage/figureListpage")
);

export function AppRouter() {
  return (
    <Suspense>
      <Routes>
        <Route path={"/"} element={<HomePage></HomePage>}></Route>
        <Route
          path={menuOptions[0].path}
          element={<HomePage></HomePage>}
        ></Route>
        <Route
          path={menuOptions[1].path}
          element={<AboutPage></AboutPage>}
        ></Route>
        <Route
          path={menuOptions[2].path}
          element={<FigureListPage></FigureListPage>}
        ></Route>
      </Routes>
    </Suspense>
  );
}
