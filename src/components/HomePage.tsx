import { Link } from "react-router-dom";
import { navGroups } from "../data/nav";
import { topicTitles } from "../data/topicTitles";

export function HomePage() {
  return (
    <div>
      <h1 className="page-title">Történelem — tananyag és kvízek</h1>
      <p className="intro">
        OH-TOR09TA tankönyv alapján. Minden témakörnél közbeni és záró kvíz, érettségi feladatok. A
        Tételek menüben összefoglaló vázlatok.
      </p>
      <p>
        <Link to="/tetelek" className="btn" style={{ display: "inline-block", textDecoration: "none" }}>
          Tételek (2 db)
        </Link>
      </p>
      {navGroups.map((group) => (
        <section key={group.label} className="content-section">
          <h2>{group.label}</h2>
          <div className="home-grid">
            {group.slugs.map((slug) => (
              <Link key={slug} to={`/temakor/${slug}`} className="card">
                <h3>{topicTitles[slug]}</h3>
                <span>Tananyag + kvíz</span>
              </Link>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
