import { render, screen } from "@testing-library/react";
import { Header } from "./header";

describe("Given the Header component", () => {
  describe("When it is rendered", () => {
    test("Then it should appear two images in the screen", () => {
      render(<Header></Header>);
      const elements = screen.getAllByRole("img");
      expect(elements.length).toBe(2);
    });
  });
});
