/** Wikimedia thumb URL -> kozvetlen fajl (a regi /thumb/.../640px-... linkek 400-at adnak). */
export function resolveFigureSrc(src: string): string {
  if (!src.includes("upload.wikimedia.org") || !src.includes("/commons/thumb/")) {
    return src;
  }
  const m = src.match(/\/commons\/thumb\/((?:[^/]+\/){2}[^/]+)\/\d+px-/);
  if (!m) return src;
  const filePath = decodeURIComponent(m[1]);
  return `https://upload.wikimedia.org/wikipedia/commons/${filePath}`;
}