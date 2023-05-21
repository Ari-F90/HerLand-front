import { render } from "@testing-library/react";
import FigureListPage from "./figureListpage";

jest.mock("./figureListpage");
describe("Given the Figure List page", () => {
  describe("When it is rendered", () => {
    test('Then it should render "Herstory makers"', () => {
      render(
        <>
          <FigureListPage></FigureListPage>
        </>
      );
      expect(FigureListPage).toHaveBeenCalled();
    });
  });
});
