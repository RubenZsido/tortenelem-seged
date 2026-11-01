import { useMemo, useState } from "react";
import {
  checkAbcd,
  checkOrder,
  isAbcd,
  isOrder,
  scoreQuestions,
  shuffleIds,
} from "../lib/quizCheck";
import type { ErettsegiTask } from "../lib/types";
import { QuizABCD } from "./QuizABCD";
import { QuizOrder } from "./QuizOrder";

type Props = { tasks: ErettsegiTask[] };

/** Csak érettségi jellegű feladatok — külön vizuális blokk */
export function ErettsegiSection({ tasks }: Props) {
  const closed = tasks.filter((t) => t.type !== "open") as Exclude<
    ErettsegiTask,
    { type: "open" }
  >[];
  const openTasks = tasks.filter((t) => t.type === "open");

  const [submitted, setSubmitted] = useState(false);
  const [abcd, setAbcd] = useState<Record<number, number | undefined>>({});
  const [orders, setOrders] = useState<Record<number, string[]>>(() => {
    const init: Record<number, string[]> = {};
    closed.forEach((q, i) => {
      if (isOrder(q)) init[i] = shuffleIds(q.items.map((it) => it.id));
    });
    return init;
  });

  const score = useMemo(
    () =>
      submitted
        ? scoreQuestions(closed, { abcd, order: orders, truefalse: {}, match: {}, multi: {} })
        : null,
    [submitted, closed, abcd, orders],
  );

  return (
    <aside className="erettsegi">
      <h2>Érettségi feladatok</h2>
      {closed.map((q, i) =>
        isAbcd(q) ? (
          <QuizABCD
            key={i}
            name={`erettsegi-${i}`}
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
      {openTasks.map((t, i) => (
        <div key={`open-${i}`} className="open-task quiz-item">
          <p className="prompt">{t.prompt}</p>
          <p>
            <strong>Válasz vázlat (ellenőrzőlista):</strong>
          </p>
          <ul>
            {t.hintPoints.map((p, j) => (
              <li key={j}>{p}</li>
            ))}
          </ul>
        </div>
      ))}
      {closed.length > 0 && (
        <>
          {!submitted ? (
            <button type="button" className="btn" onClick={() => setSubmitted(true)}>
              Érettségi feladatok ellenőrzése
            </button>
          ) : (
            score && (
              <p className="quiz-score">
                Zárt feladatok: {score.correct} / {score.total}
              </p>
            )
          )}
        </>
      )}
    </aside>
  );
}
