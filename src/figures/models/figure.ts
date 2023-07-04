export type ProtoFigure = {
  name: string;
  img: string;
  category: string;
  quote: string;
  birth: string;
  description1: string;
  description2: string;
  description3: string;
  description4: string;
};

export type Figure = {
  id: string;
  name: string;
  img: string;
  category: string;
  quote: string;
  birth: string;
  description1: string;
  description2: string;
  description3: string;
  description4: string;
};

export type FigureServerResp = {
  results: Figure[];
};
