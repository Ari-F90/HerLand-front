import { Figure, FigureServerResp } from "../models/figure";

export class FigureApiRepo {
  url: string;
  actualPage: number;
  constructor() {
    this.url = "https://herland.onrender.com/figures";
    this.actualPage = 1;
  }
  async loadFigures(
    pageChange: number,
    category: string
  ): Promise<FigureServerResp> {
    this.actualPage = this.actualPage + pageChange;
    if (this.actualPage === 0 || pageChange === 0) this.actualPage = 1;
    const pageString = this.actualPage.toString();
    const urlPage = this.url + "/?page=" + pageString + "&category=" + category;
    const resp = await fetch(urlPage);
    if (!resp.ok)
      throw new Error("Error Http: " + resp.status + "/" + resp.statusText);
    const data = await resp.json();
    return data;
  }

  async loadOneFigure(id: Figure["id"]): Promise<FigureServerResp> {
    const url = this.url + "/" + id;
    const resp = await fetch(url);
    if (!resp.ok)
      throw new Error("Error Http: " + resp.status + "/ " + resp.statusText);
    const data = await resp.json();
    return data;
  }
}
