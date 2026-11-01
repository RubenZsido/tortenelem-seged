import type { FigureData } from "../lib/types";

type Props = { figure: FigureData };

/** Kép megjelenítés: /images/... vagy Wikimedia URL */
export function Figure({ figure }: Props) {
  const src = figure.external ? figure.src : figure.src;
  return (
    <figure className="fig">
      <img src={src} alt={figure.alt} loading="lazy" />
      <figcaption>
        {figure.caption ?? figure.alt}
        {figure.credit ? ` — ${figure.credit}` : null}
      </figcaption>
    </figure>
  );
}
