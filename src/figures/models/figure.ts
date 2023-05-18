export type ProtoFigure = {
  name: string;
  img: string;
  category: string;
  quote: string;
  birth: string;
  description: string;
};

export type Figure = {
  id: string;
  name: string;
  img: string;
  category: string;
  quote: string;
  birth: string;
  description: string;
};

export type FigureServerResp = {
  results: Figure[];
};
