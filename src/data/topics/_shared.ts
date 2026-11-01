import type { AbcdQuestion, ContentBlock, FigureData, Question } from "../../lib/types";

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
