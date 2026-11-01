import type { AbcdQuestion, OrderQuestion, Question } from "./types";

export function isAbcd(q: Question): q is AbcdQuestion {
  return q.type === "abcd";
}

export function isOrder(q: Question): q is OrderQuestion {
  return q.type === "order";
}

/** ABCD: választott index vagy undefined */
export function checkAbcd(q: AbcdQuestion, picked: number | undefined): boolean {
  return picked === q.correct;
}

/** Sorrend: item id-k tömbje */
export function checkOrder(q: OrderQuestion, order: string[]): boolean {
  if (order.length !== q.correctOrder.length) return false;
  return order.every((id, i) => id === q.correctOrder[i]);
}

export function scoreQuestions(
  questions: Question[],
  abcdAnswers: Record<number, number | undefined>,
  orderAnswers: Record<number, string[]>,
): { correct: number; total: number } {
  let correct = 0;
  questions.forEach((q, i) => {
    if (isAbcd(q) && checkAbcd(q, abcdAnswers[i])) correct++;
    if (isOrder(q) && checkOrder(q, orderAnswers[i] ?? [])) correct++;
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

export function moveItem(order: string[], index: number, dir: -1 | 1): string[] {
  const next = [...order];
  const j = index + dir;
  if (j < 0 || j >= next.length) return next;
  [next[index], next[j]] = [next[j], next[index]];
  return next;
}
