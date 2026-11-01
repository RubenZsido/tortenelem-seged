import type {
  AbcdQuestion,
  MatchQuestion,
  MultiQuestion,
  OrderQuestion,
  Question,
  TrueFalseQuestion,
} from "./types";

export type QuizAnswers = {
  abcd: Record<number, number | undefined>;
  order: Record<number, string[]>;
  truefalse: Record<number, boolean | undefined>;
  /** kérdés index -> bal id -> választott jobb id */
  match: Record<number, Record<string, string | undefined>>;
  multi: Record<number, number[]>;
};

export function emptyQuizAnswers(): QuizAnswers {
  return { abcd: {}, order: {}, truefalse: {}, match: {}, multi: {} };
}

export function isAbcd(q: Question): q is AbcdQuestion {
  return q.type === "abcd";
}

export function isOrder(q: Question): q is OrderQuestion {
  return q.type === "order";
}

export function isTrueFalse(q: Question): q is TrueFalseQuestion {
  return q.type === "truefalse";
}

export function isMatch(q: Question): q is MatchQuestion {
  return q.type === "match";
}

export function isMulti(q: Question): q is MultiQuestion {
  return q.type === "multi";
}

export function checkAbcd(q: AbcdQuestion, picked: number | undefined): boolean {
  return picked === q.correct;
}

export function checkOrder(q: OrderQuestion, order: string[]): boolean {
  if (order.length !== q.correctOrder.length) return false;
  return order.every((id, i) => id === q.correctOrder[i]);
}

export function checkTrueFalse(q: TrueFalseQuestion, picked: boolean | undefined): boolean {
  return picked === q.correct;
}

export function checkMatch(q: MatchQuestion, picks: Record<string, string | undefined>): boolean {
  return q.left.every((l) => picks[l.id] === q.pairs[l.id]);
}

export function checkMulti(q: MultiQuestion, picked: number[]): boolean {
  const a = [...picked].sort((x, y) => x - y);
  const b = [...q.correct].sort((x, y) => x - y);
  if (a.length !== b.length) return false;
  return a.every((v, i) => v === b[i]);
}

export function scoreQuestions(
  questions: Question[],
  answers: QuizAnswers,
): { correct: number; total: number } {
  let correct = 0;
  questions.forEach((q, i) => {
    if (isAbcd(q) && checkAbcd(q, answers.abcd[i])) correct++;
    if (isOrder(q) && checkOrder(q, answers.order[i] ?? [])) correct++;
    if (isTrueFalse(q) && checkTrueFalse(q, answers.truefalse[i])) correct++;
    if (isMatch(q) && checkMatch(q, answers.match[i] ?? {})) correct++;
    if (isMulti(q) && checkMulti(q, answers.multi[i] ?? [])) correct++;
  });
  return { correct, total: questions.length };
}

/** Kezdeti sorrend: véletlenszerű (tanuláshoz ne legyen mindig ugyanaz) */
export function shuffleIds(ids: string[]): string[] {
  const a = [...ids];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
