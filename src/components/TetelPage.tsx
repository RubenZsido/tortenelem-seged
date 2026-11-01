import { Link, useParams } from "react-router-dom";
import { topicTitles } from "../data/topicTitles";
import { getTetelBySlug } from "../data/tetelek";
import { QuizBlock } from "./QuizBlock";

export function TetelPage() {
  const { slug } = useParams<{ slug: string }>();
  const tetel = slug ? getTetelBySlug(slug) : undefined;

  if (!tetel) {
    return (
      <div>
        <h1>Nincs ilyen tétel</h1>
        <Link to="/tetelek">Vissza</Link>
      </div>
    );
  }

  return (
    <article>
      <h1 className="page-title">{tetel.title}</h1>
      <p className="intro">Javasolt idő: {tetel.minutes} perc. Először a vázlatot tanuld, utána a kvíz.</p>

      <section className="tetel-outline content-section">
        <h2>Tanulási vázlat</h2>
        {tetel.outline.map((block, i) => (
          <div key={i}>
            <h3>{block.heading}</h3>
            <ul>
              {block.points.map((p, j) => (
                <li key={j}>{p}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section className="content-section">
        <h2>Kapcsolódó témakörök</h2>
        <ul>
          {tetel.relatedTopics.map((s) => (
            <li key={s}>
              <Link to={`/temakor/${s}`}>{topicTitles[s] ?? s}</Link>
            </li>
          ))}
        </ul>
      </section>

      {tetel.quizzes.map((q, i) => (
        <QuizBlock key={`${tetel.slug}-quiz-${i}`} title={q.title} questions={q.questions} />
      ))}
    </article>
  );
}
