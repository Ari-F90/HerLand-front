import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import { MenuOptions, menuOptions } from "../menu/menu";

const HomePage = lazy(() => import("../pages/homepage/homepage"));
const AboutPage = lazy(() => import("../pages/aboutpage/aboutpage"));
const FigureListPage = lazy(
  () => import("../pages/figureListpage/figureListpage")
);
const Details = lazy(() => import("../details/details"));

export const routesOptions: MenuOptions[] = [
  { label: "Details", path: "/details/:id" },
];

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
        <Route
          path={routesOptions[0].path}
          element={<Details></Details>}
        ></Route>
      </Routes>
    </Suspense>
  );
}
