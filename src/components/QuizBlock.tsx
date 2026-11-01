import { useMemo, useState } from "react";
import {
  checkAbcd,
  checkOrder,
  isAbcd,
  isOrder,
  scoreQuestions,
  shuffleIds,
} from "../lib/quizCheck";
import type { Question } from "../lib/types";
import { QuizABCD } from "./QuizABCD";
import { QuizOrder } from "./QuizOrder";

type Props = {
  title: string;
  questions: Question[];
};

/** Közbeni / záró kvíz blokk — egy Ellenőrzés gomb, utána magyarázatok */
export function QuizBlock({ title, questions }: Props) {
  const [submitted, setSubmitted] = useState(false);
  const [abcd, setAbcd] = useState<Record<number, number | undefined>>({});
  const [orders, setOrders] = useState<Record<number, string[]>>(() => {
    const init: Record<number, string[]> = {};
    questions.forEach((q, i) => {
      if (isOrder(q)) init[i] = shuffleIds(q.items.map((it) => it.id));
    });
    return init;
  });

  const score = useMemo(
    () => (submitted ? scoreQuestions(questions, abcd, orders) : null),
    [submitted, questions, abcd, orders],
  );

  return (
    <div className="quiz-block">
      <h3>{title}</h3>
      {questions.map((q, i) =>
        isAbcd(q) ? (
          <QuizABCD
            key={i}
            name={`quiz-${title}-${i}`}
            q={q}
            picked={abcd[i]}
            onPick={(v) => setAbcd((prev) => ({ ...prev, [i]: v }))}
            submitted={submitted}
            correct={submitted && checkAbcd(q, abcd[i])}
          />
        ) : isOrder(q) ? (
          <QuizOrder
            key={i}
            q={q}
            order={orders[i] ?? []}
            onOrderChange={(o) => setOrders((prev) => ({ ...prev, [i]: o }))}
            submitted={submitted}
            correct={submitted && checkOrder(q, orders[i] ?? [])}
          />
        ) : null,
      )}
      {!submitted ? (
        <button type="button" className="btn" onClick={() => setSubmitted(true)}>
          Ellenőrzés
        </button>
      ) : (
        score && (
          <p className="quiz-score">
            Eredmény: {score.correct} / {score.total}
          </p>
        )
      )}
    </div>
  );
}
