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

export type TrueFalseQuestion = {
  type: "truefalse";
  prompt: string;
  correct: boolean;
  explain: string;
};

export type MatchQuestion = {
  type: "match";
  prompt: string;
  left: { id: string; label: string }[];
  right: { id: string; label: string }[];
  /** bal id -> helyes jobb id */
  pairs: Record<string, string>;
  explain: string;
};

export type MultiQuestion = {
  type: "multi";
  prompt: string;
  choices: string[];
  correct: number[];
  explain: string;
};

export type Question =
  | AbcdQuestion
  | OrderQuestion
  | TrueFalseQuestion
  | MatchQuestion
  | MultiQuestion;

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
  quizzes: { title: string; questions: Question[] }[];
  relatedTopics: string[];
};
