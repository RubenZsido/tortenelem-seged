import { useState } from "react";
import { Outlet } from "react-router-dom";
import { SideNav } from "./SideNav";

export function AppLayout() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <div className="app-shell">
      <button
        type="button"
        className="menu-toggle btn"
        onClick={() => setNavOpen((v) => !v)}
        aria-expanded={navOpen}
      >
        Menü
      </button>
      <SideNav open={navOpen} onNavigate={() => setNavOpen(false)} />
      <main className="main">
        <Outlet />
      </main>
    </div>
  );
}
