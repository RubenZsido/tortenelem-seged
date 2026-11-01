import fs from "fs";

const p = new URL("../src/styles/global.css", import.meta.url);
let c = fs.readFileSync(p, "utf8");

const re = /\.order-list button \{[\s\S]*?\}/;
if (!re.test(c)) throw new Error("order-list button block not found");

const neu = `.order-list-hint {
  margin: 0 0 0.5rem;
  font-size: 0.88rem;
  color: var(--muted);
}

.order-drag-handle {
  flex-shrink: 0;
  padding: 0.15rem 0.45rem;
  margin: 0;
  border: 1px solid #ddd;
  border-radius: 4px;
  background: var(--quiz-bg);
  cursor: grab;
  touch-action: none;
  font-size: 0.85rem;
  line-height: 1;
  color: var(--muted);
}

.order-drag-handle:active {
  cursor: grabbing;
}

.order-list li.is-dragging {
  opacity: 0.85;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.12);
}`;

c = c.replace(re, neu);
fs.writeFileSync(p, c);
console.log("patched global.css");
