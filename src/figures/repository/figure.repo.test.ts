import { FigureApiRepo } from "./figure.repo";

const mockFigureRepo = new FigureApiRepo();

describe("Given the Figure Api Repo", () => {
  describe("When the loadFigures method is called", () => {
    test("Then it should appear all the figures with a GET request", async () => {
      global.fetch = jest.fn().mockResolvedValue({
        ok: true,
        json: jest.fn().mockResolvedValue({ category: "Science" }),
      });
      const pageChange = 1;
      const category = "all";
      const data = await mockFigureRepo.loadFigures(pageChange, category);
      expect(data).toEqual({ category: "Science" });
    });

    test("Then it should throw an error when it does not find any data", async () => {
      global.fetch = jest.fn().mockResolvedValue({
        ok: false,
        json: jest.fn().mockResolvedValue("Error test"),
      });
      const pageChangeError = 0;
      const categoryError = "all";
      const data = mockFigureRepo.loadFigures(pageChangeError, categoryError);
      await expect(data).rejects.toThrow();
    });
  });

  describe("When the loadOneFigure method is called", () => {
    test("Then it should return the asked figure", async () => {
      global.fetch = jest.fn().mockResolvedValue({
        ok: true,
        json: jest.fn().mockResolvedValue({ id: "1", figure1: "Marie Curie" }),
      });
      const getOneFigure = await mockFigureRepo.loadOneFigure("1");
      expect(getOneFigure).toEqual({ id: "1", figure1: "Marie Curie" });
    });
    test("Then it should throw an error if the ID is not found", async () => {
      global.fetch = jest.fn().mockResolvedValue("Error test");
      const data = mockFigureRepo.loadOneFigure("2");
      await expect(data).rejects.toThrow();
    });
  });
});
