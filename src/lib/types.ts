/** Kép: helyi public/ útvonal vagy külső URL */
export type FigureData = {
  src: string;
  alt: string;
  caption?: string;
  credit?: string;
  external?: boolean;
};

export type AbcdQuestion = {
  type: "abcd";
  prompt: string;
  choices: [string, string, string, string];
  correct: 0 | 1 | 2 | 3;
  explain: string;
};

export type OrderQuestion = {
  type: "order";
  prompt: string;
  items: { id: string; label: string }[];
  correctOrder: string[];
  explain: string;
};

export type Question = AbcdQuestion | OrderQuestion;

export type ContentBlock =
  | {
      kind: "section";
      heading: string;
      paragraphs: string[];
      figures?: FigureData[];
    }
  | { kind: "quiz"; id: string; title: string; questions: Question[] };

export type OpenErettsegi = {
  type: "open";
  prompt: string;
  hintPoints: string[];
};

export type ErettsegiTask = AbcdQuestion | OrderQuestion | OpenErettsegi;

export type Topic = {
  slug: string;
  title: string;
  intro: string;
  blocks: ContentBlock[];
  erettsegi: ErettsegiTask[];
};

export type NavGroup = {
  label: string;
  slugs: string[];
};

export type Tetel = {
  slug: string;
  title: string;
  minutes: number;
  outline: { heading: string; points: string[] }[];
  quiz: Question[];
  relatedTopics: string[];
};
