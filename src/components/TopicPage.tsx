import { Link, useParams } from "react-router-dom";
import { getTopicBySlug } from "../data/topics";
import { ErettsegiSection } from "./ErettsegiSection";
import { Figure } from "./Figure";
import { QuizBlock } from "./QuizBlock";

export function TopicPage() {
  const { slug } = useParams<{ slug: string }>();
  const topic = slug ? getTopicBySlug(slug) : undefined;

  if (!topic) {
    return (
      <div>
        <h1>Nincs ilyen témakör</h1>
        <Link to="/">Vissza a főoldalra</Link>
      </div>
    );
  }

  return (
    <article>
      <h1 className="page-title">{topic.title}</h1>
      <p className="intro">{topic.intro}</p>

      {topic.blocks.map((block, i) =>
        block.kind === "section" ? (
          <section key={i} className="content-section">
            <h2>{block.heading}</h2>
            {block.paragraphs.map((p, j) => (
              <p key={j}>{p}</p>
            ))}
            {block.figures?.map((fig, k) => (
              <Figure key={k} figure={fig} />
            ))}
          </section>
        ) : (
          <QuizBlock
            key={`${topic.slug}-${block.id}`}
            title={block.title}
            questions={block.questions}
          />
        ),
      )}

      <ErettsegiSection key={`${topic.slug}-erettsegi`} tasks={topic.erettsegi} />
    </article>
  );
}