import { screen, render } from "@testing-library/react";
import { Footer } from "./footer";

describe("Given the Footer component", () => {
  describe("When it is rendered", () => {
    test('Then it should appear "Designed with" in the screen', () => {
      render(<Footer></Footer>);
      const element = screen.getByText(/Designed with/i);
      expect(element).toBeInTheDocument();
    });
  });
});
