import { useMemo } from "react";
import type { MatchQuestion } from "../lib/types";

type Props = {
  q: MatchQuestion;
  picks: Record<string, string | undefined>;
  onPick: (leftId: string, rightId: string) => void;
  submitted: boolean;
  correct: boolean;
};

export function QuizMatch({ q, picks, onPick, submitted, correct }: Props) {
  const rightOptions = useMemo(
    () => [...q.right].sort((a, b) => a.label.localeCompare(b.label, "hu")),
    [q.right],
  );

  return (
    <div className="quiz-item">
      <p className="prompt">{q.prompt}</p>
      <ul className="match-list">
        {q.left.map((l) => (
          <li key={l.id} className="match-row">
            <span className="match-left">{l.label}</span>
            <select
              className="match-select"
              value={picks[l.id] ?? ""}
              disabled={submitted}
              onChange={(e) => onPick(l.id, e.target.value)}
            >
              <option value="">— válassz —</option>
              {rightOptions.map((r) => (
                <option key={r.id} value={r.id}>
                  {r.label}
                </option>
              ))}
            </select>
          </li>
        ))}
      </ul>
      {submitted && (
        <div className={`explain ${correct ? "ok" : "bad"}`}>{q.explain}</div>
      )}
    </div>
  );
}
