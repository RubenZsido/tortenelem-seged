import { useMemo, useState } from "react";
import {
  checkAbcd,
  checkMatch,
  checkMulti,
  checkOrder,
  checkTrueFalse,
  isAbcd,
  isMatch,
  isMulti,
  isOrder,
  isTrueFalse,
  scoreQuestions,
  shuffleIds,
  type QuizAnswers,
} from "../lib/quizCheck";
import type { Question } from "../lib/types";
import { QuizABCD } from "./QuizABCD";
import { QuizMatch } from "./QuizMatch";
import { QuizMulti } from "./QuizMulti";
import { QuizOrder } from "./QuizOrder";
import { QuizTrueFalse } from "./QuizTrueFalse";

type Props = {
  title: string;
  questions: Question[];
};

function initAnswers(questions: Question[]): QuizAnswers {
  const order: Record<number, string[]> = {};
  const match: Record<number, Record<string, string | undefined>> = {};
  questions.forEach((q, i) => {
    if (isOrder(q)) order[i] = shuffleIds(q.items.map((it) => it.id));
    if (isMatch(q)) {
      const row: Record<string, string | undefined> = {};
      q.left.forEach((l) => {
        row[l.id] = undefined;
      });
      match[i] = row;
    }
  });
  return { abcd: {}, order, truefalse: {}, match, multi: {} };
}

/** Közbeni / záró kvíz blokk — egy Ellenőrzés gomb, utána magyarázatok */
export function QuizBlock({ title, questions }: Props) {
  const [submitted, setSubmitted] = useState(false);
  const [answers, setAnswers] = useState<QuizAnswers>(() => initAnswers(questions));

  const score = useMemo(
    () => (submitted ? scoreQuestions(questions, answers) : null),
    [submitted, questions, answers],
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
            picked={answers.abcd[i]}
            onPick={(v) => setAnswers((prev) => ({ ...prev, abcd: { ...prev.abcd, [i]: v } }))}
            submitted={submitted}
            correct={submitted && checkAbcd(q, answers.abcd[i])}
          />
        ) : isOrder(q) ? (
          <QuizOrder
            key={i}
            q={q}
            order={answers.order[i] ?? []}
            onOrderChange={(o) =>
              setAnswers((prev) => ({ ...prev, order: { ...prev.order, [i]: o } }))
            }
            submitted={submitted}
            correct={submitted && checkOrder(q, answers.order[i] ?? [])}
          />
        ) : isTrueFalse(q) ? (
          <QuizTrueFalse
            key={i}
            name={`quiz-tf-${title}-${i}`}
            q={q}
            picked={answers.truefalse[i]}
            onPick={(v) =>
              setAnswers((prev) => ({ ...prev, truefalse: { ...prev.truefalse, [i]: v } }))
            }
            submitted={submitted}
            correct={submitted && checkTrueFalse(q, answers.truefalse[i])}
          />
        ) : isMatch(q) ? (
          <QuizMatch
            key={i}
            q={q}
            picks={answers.match[i] ?? {}}
            onPick={(leftId, rightId) =>
              setAnswers((prev) => ({
                ...prev,
                match: {
                  ...prev.match,
                  [i]: { ...prev.match[i], [leftId]: rightId || undefined },
                },
              }))
            }
            submitted={submitted}
            correct={submitted && checkMatch(q, answers.match[i] ?? {})}
          />
        ) : isMulti(q) ? (
          <QuizMulti
            key={i}
            q={q}
            picked={answers.multi[i] ?? []}
            onToggle={(idx) =>
              setAnswers((prev) => {
                const cur = prev.multi[i] ?? [];
                const next = cur.includes(idx) ? cur.filter((x) => x !== idx) : [...cur, idx];
                return { ...prev, multi: { ...prev.multi, [i]: next } };
              })
            }
            submitted={submitted}
            correct={submitted && checkMulti(q, answers.multi[i] ?? [])}
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
