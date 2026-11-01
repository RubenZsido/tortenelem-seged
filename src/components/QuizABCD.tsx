import type { AbcdQuestion } from "../lib/types";

type Props = {
  q: AbcdQuestion;
  name: string;
  picked: number | undefined;
  onPick: (index: number) => void;
  submitted: boolean;
  correct: boolean;
};

export function QuizABCD({ q, name, picked, onPick, submitted, correct }: Props) {
  const labels = ["A", "B", "C", "D"];
  return (
    <div className="quiz-item">
      <p className="prompt">{q.prompt}</p>
      <div className="quiz-choices">
        {q.choices.map((choice, i) => (
          <label key={i}>
            <input
              type="radio"
              name={name}
              checked={picked === i}
              disabled={submitted}
              onChange={() => onPick(i)}
            />{" "}
            {labels[i]}) {choice}
          </label>
        ))}
      </div>
      {submitted && (
        <div className={`explain ${correct ? "ok" : "bad"}`}>{q.explain}</div>
      )}
    </div>
  );
}
