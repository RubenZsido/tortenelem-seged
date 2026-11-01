/** Wikimedia thumb URL -> Special:FilePath (a hash a thumb utvonban gyakran elavult / hibas). */
export function resolveFigureSrc(src: string): string {
  if (!src.includes("upload.wikimedia.org") || !src.includes("/commons/thumb/")) {
    return src;
  }
  const m = src.match(/\/commons\/thumb\/(?:[^/]+\/){2}([^/]+)\/(\d+)px-/);
  if (!m) return src;
  const file = decodeURIComponent(m[1]);
  const width = m[2];
  return `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(file)}?width=${width}`;
}