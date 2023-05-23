import { render } from "@testing-library/react";
import AboutPage from "./aboutpage";

jest.mock("./aboutpage");

describe("Given the AboutPage component", () => {
  describe("When it is rendered", () => {
    test('Then it should render "About the project"', () => {
      render(
        <>
          <AboutPage></AboutPage>
        </>
      );
    });
  });
});
