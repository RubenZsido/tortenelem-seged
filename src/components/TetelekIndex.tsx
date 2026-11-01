import { Link } from "react-router-dom";
import { tetelekList } from "../data/tetelek";

export function TetelekIndex() {
  return (
    <div>
      <h1 className="page-title">Tételek</h1>
      <p className="intro">Érettségi szerű vázlat + önellenőrző feladatok. Egyelőre 2 tétel.</p>
      <div className="home-grid">
        {tetelekList.map((t) => (
          <Link key={t.slug} to={`/tetelek/${t.slug}`} className="card">
            <h3>{t.title}</h3>
            <span>~{t.minutes} perc</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
