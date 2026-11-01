import type { TrueFalseQuestion } from "../lib/types";

type Props = {
  q: TrueFalseQuestion;
  name: string;
  picked: boolean | undefined;
  onPick: (v: boolean) => void;
  submitted: boolean;
  correct: boolean;
};

export function QuizTrueFalse({ q, name, picked, onPick, submitted, correct }: Props) {
  return (
    <div className="quiz-item">
      <p className="prompt">{q.prompt}</p>
      <div className="quiz-choices truefalse-choices">
        <label>
          <input
            type="radio"
            name={name}
            checked={picked === true}
            disabled={submitted}
            onChange={() => onPick(true)}
          />{" "}
          Igaz
        </label>
        <label>
          <input
            type="radio"
            name={name}
            checked={picked === false}
            disabled={submitted}
            onChange={() => onPick(false)}
          />{" "}
          Hamis
        </label>
      </div>
      {submitted && (
        <div className={`explain ${correct ? "ok" : "bad"}`}>{q.explain}</div>
      )}
    </div>
  );
}
