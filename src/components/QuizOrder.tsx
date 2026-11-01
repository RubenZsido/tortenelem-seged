import { moveItem } from "../lib/quizCheck";
import type { OrderQuestion } from "../lib/types";

type Props = {
  q: OrderQuestion;
  order: string[];
  onOrderChange: (order: string[]) => void;
  submitted: boolean;
  correct: boolean;
};

export function QuizOrder({ q, order, onOrderChange, submitted, correct }: Props) {
  const labelById = Object.fromEntries(q.items.map((it) => [it.id, it.label]));

  return (
    <div className="quiz-item">
      <p className="prompt">{q.prompt}</p>
      <ol className="order-list">
        {order.map((id, index) => (
          <li key={id}>
            {!submitted && (
              <>
                <button type="button" aria-label="Fel" onClick={() => onOrderChange(moveItem(order, index, -1))}>
                  ↑
                </button>
                <button type="button" aria-label="Le" onClick={() => onOrderChange(moveItem(order, index, 1))}>
                  ↓
                </button>
              </>
            )}
            <span>
              {index + 1}. {labelById[id]}
            </span>
          </li>
        ))}
      </ol>
      {submitted && (
        <div className={`explain ${correct ? "ok" : "bad"}`}>{q.explain}</div>
      )}
    </div>
  );
}
