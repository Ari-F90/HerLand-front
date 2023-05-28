/* eslint-disable testing-library/no-unnecessary-act */
/* eslint-disable testing-library/no-render-in-setup */

import { render, screen, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import { useFigures } from "../../../figures/hooks/use.figures";
import { Figure } from "../../../figures/models/figure";
import { FigureApiRepo } from "../../../figures/repository/figure.repo";
import { FigureList } from "./figureList";

jest.mock("../card/card");
jest.mock("../../../figures/hooks/use.figures");

const mockRepo = {} as FigureApiRepo;

describe("Given Figure List component", () => {
  beforeEach(async () => {
    (useFigures as jest.Mock).mockReturnValue({
      figures: [
        {
          id: "1",
          name: "test1",
          category: "Science",
        } as Figure,
        {
          id: "2",
          name: "test2",
          category: "Literature",
        } as Figure,
      ],
      loadFigures: jest.fn(),
    });
    await act(async () => {
      render(
        <MemoryRouter>
          <FigureList></FigureList>
        </MemoryRouter>
      );
    });
  });

  describe("When the Figure list component is rendered", () => {
    test("Then it should appear the 'prev page' button", async () => {
      await act(async () => {
        const buttonsPages = await screen.findAllByRole("img");
        expect(buttonsPages[0]).toBeInTheDocument();
        await userEvent.click(buttonsPages[0]);
        expect(useFigures(mockRepo).loadFigures).toHaveBeenCalled();
      });
    });
    test("Then it should appear the 'next page' button", async () => {
      await act(async () => {
        const buttonsPages = await screen.findAllByRole("img");
        expect(buttonsPages[1]).toBeInTheDocument();
        await userEvent.click(buttonsPages[1]);
        expect(useFigures(mockRepo).loadFigures).toHaveBeenCalled();
      });
    });
    test("Then it should return, apart from the pagination buttons, the buttons for each category", async () => {
      await act(async () => {
        const buttons = await screen.findAllByRole("button");
        expect(buttons.length).toBe(13);
        await userEvent.click(buttons[0]);
        await userEvent.click(buttons[1]);
        await userEvent.click(buttons[2]);
        await userEvent.click(buttons[3]);
        await userEvent.click(buttons[4]);
        await userEvent.click(buttons[5]);
        await userEvent.click(buttons[6]);
        await userEvent.click(buttons[7]);
        await userEvent.click(buttons[8]);
        await userEvent.click(buttons[9]);
        await userEvent.click(buttons[10]);
        await userEvent.click(buttons[11]);
        await userEvent.click(buttons[12]);
        expect(useFigures(mockRepo).loadFigures).toHaveBeenCalled();
      });
    });
    test('Then it should appear the text "Science"', () => {
      const element = screen.getByText(/Science/i);
      expect(element).toBeInTheDocument();
    });
    test('Then it should appear the text "Literature"', () => {
      const element = screen.getByText(/Literature/i);
      expect(element).toBeInTheDocument();
    });
  });
});
