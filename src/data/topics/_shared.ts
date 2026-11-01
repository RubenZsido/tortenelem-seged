import type {
  AbcdQuestion,
  ContentBlock,
  FigureData,
  MatchQuestion,
  MultiQuestion,
  Question,
  TrueFalseQuestion,
} from "../../lib/types";

/** Gyors ABCD — kevesebb ismétlődés a témakör fájlokban */
export function abcd(
  prompt: string,
  choices: [string, string, string, string],
  correct: 0 | 1 | 2 | 3,
  explain: string,
): AbcdQuestion {
  return { type: "abcd", prompt, choices, correct, explain };
}

export function sec(
  heading: string,
  paragraphs: string[],
  figures?: FigureData[],
): ContentBlock {
  return { kind: "section", heading, paragraphs, figures };
}

export function quiz(id: string, title: string, questions: Question[]): ContentBlock {
  return { kind: "quiz", id, title, questions };
}

export function truefalse(
  prompt: string,
  correct: boolean,
  explain: string,
): TrueFalseQuestion {
  return { type: "truefalse", prompt, correct, explain };
}

export function match(
  prompt: string,
  left: { id: string; label: string }[],
  right: { id: string; label: string }[],
  pairs: Record<string, string>,
  explain: string,
): MatchQuestion {
  return { type: "match", prompt, left, right, pairs, explain };
}

export function multi(
  prompt: string,
  choices: string[],
  correct: number[],
  explain: string,
): MultiQuestion {
  return { type: "multi", prompt, choices, correct, explain };
}
