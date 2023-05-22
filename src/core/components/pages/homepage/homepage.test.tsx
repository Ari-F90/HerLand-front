import { render } from "@testing-library/react";
import HomePage from "./homepage";

jest.mock("./homepage");

describe("Given the Homepage component", () => {
  describe("When it is rendered", () => {
    test('Then it should render "Discover"', () => {
      render(
        <>
          <HomePage></HomePage>
        </>
      );
    });
  });
});
