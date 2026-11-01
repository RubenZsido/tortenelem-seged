/**
 * Szoveges fajlok UTF-8-ra (BOM nelkul).
 * Futtatas: npm run ensure:utf8  (build elott prebuild is futtatja)
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");

/** Ezeket a mappakat nem jarjuk be. */
const SKIP_DIRS = new Set([
  "node_modules",
  "dist",
  "dist-ssr",
  ".git",
  "coverage",
  ".vite",
]);

/** Bináris / nem szöveg — kihagyjuk. */
const SKIP_EXT = new Set([
  ".png",
  ".jpg",
  ".jpeg",
  ".gif",
  ".webp",
  ".ico",
  ".woff",
  ".woff2",
  ".pdf",
  ".zip",
  ".mp3",
  ".mp4",
]);

/** UTF-16 BOM vagy tipikus null-byte minta. */
function detectEncoding(buf) {
  if (buf.length >= 3 && buf[0] === 0xef && buf[1] === 0xbb && buf[2] === 0xbf) {
    return { encoding: "utf8", bomSkip: 3, label: "utf8-bom" };
  }
  if (buf.length >= 2 && buf[0] === 0xff && buf[1] === 0xfe) {
    return { encoding: "utf16le", bomSkip: 2, label: "utf16le-bom" };
  }
  if (buf.length >= 2 && buf[0] === 0xfe && buf[1] === 0xff) {
    return { encoding: "utf16be", bomSkip: 2, label: "utf16be-bom" };
  }
  // BOM nelkuli UTF-16 LE (pl. Windows „Unicode” mentes)
  if (buf.length >= 4 && buf[1] === 0 && buf[3] === 0) {
    return { encoding: "utf16le", bomSkip: 0, label: "utf16le" };
  }
  return null;
}

function shouldSkipFile(name) {
  return SKIP_EXT.has(path.extname(name).toLowerCase());
}

function walk(dir, out) {
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, ent.name);
    if (ent.isDirectory()) {
      if (!SKIP_DIRS.has(ent.name)) walk(full, out);
      continue;
    }
    if (ent.isFile() && !shouldSkipFile(ent.name)) out.push(full);
  }
}

function rel(p) {
  return path.relative(ROOT, p).split(path.sep).join("/");
}

function convertFile(filePath) {
  const buf = fs.readFileSync(filePath);
  if (buf.length === 0) return null;

  const detected = detectEncoding(buf);
  if (!detected) return null;

  const slice = buf.subarray(detected.bomSkip);
  let text;
  if (detected.encoding === "utf8") {
    text = slice.toString("utf8");
  } else if (detected.encoding === "utf16le") {
    text = slice.toString("utf16le");
  } else {
    text = slice.toString("utf16be");
  }

  fs.writeFileSync(filePath, text, "utf8");
  return detected.label;
}

const files = [];
walk(ROOT, files);

const changed = [];
for (const f of files) {
  const label = convertFile(f);
  if (label) changed.push({ path: rel(f), label });
}

if (changed.length === 0) {
  console.log("ensure-utf8: minden vizsgalt fajl mar UTF-8 (vagy ures).");
} else {
  console.log(`ensure-utf8: ${changed.length} fajl atkonvertalva UTF-8-ra:`);
  for (const { path: p, label } of changed) {
    console.log(`  [${label}] ${p}`);
  }
}
