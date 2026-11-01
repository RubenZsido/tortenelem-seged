import { NavLink } from "react-router-dom";
import { navGroups } from "../data/nav";
import { topicTitles } from "../data/topicTitles";

type Props = { open: boolean; onNavigate?: () => void };

export function SideNav({ open, onNavigate }: Props) {
  return (
    <nav className={`sidebar ${open ? "open" : ""}`} aria-label="Témakörök">
      <h2>
        <NavLink to="/" onClick={onNavigate}>
          Rahel — Történelem
        </NavLink>
      </h2>
      <NavLink to="/tetelek" onClick={onNavigate} className={({ isActive }) => (isActive ? "active" : "")}>
        Tételek
      </NavLink>
      {navGroups.map((group) => (
        <div key={group.label} className="nav-group">
          <div className="nav-group-title">{group.label}</div>
          {group.slugs.map((slug) => (
            <NavLink
              key={slug}
              to={`/temakor/${slug}`}
              onClick={onNavigate}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              {topicTitles[slug] ?? slug}
            </NavLink>
          ))}
        </div>
      ))}
    </nav>
  );
}
