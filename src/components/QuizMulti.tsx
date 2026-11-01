import type { MultiQuestion } from "../lib/types";

type Props = {
  q: MultiQuestion;
  picked: number[];
  onToggle: (index: number) => void;
  submitted: boolean;
  correct: boolean;
};

export function QuizMulti({ q, picked, onToggle, submitted, correct }: Props) {
  return (
    <div className="quiz-item">
      <p className="prompt">{q.prompt}</p>
      <p className="multi-hint">Több helyes válasz is lehet.</p>
      <div className="quiz-choices multi-choices">
        {q.choices.map((choice, i) => (
          <label key={i}>
            <input
              type="checkbox"
              checked={picked.includes(i)}
              disabled={submitted}
              onChange={() => onToggle(i)}
            />{" "}
            {choice}
          </label>
        ))}
      </div>
      {submitted && (
        <div className={`explain ${correct ? "ok" : "bad"}`}>{q.explain}</div>
      )}
    </div>
  );
}
