import type { FigureData } from "../lib/types";
import { resolveFigureSrc } from "../lib/figureSrc";

type Props = { figure: FigureData };

/** Kep megjelenites: /images/... vagy Wikimedia URL */
export function Figure({ figure }: Props) {
  const src = resolveFigureSrc(figure.src);
  return (
    <figure className="fig">
      <img src={src} alt={figure.alt} loading="lazy" referrerPolicy="no-referrer" />
      <figcaption>
        {figure.caption ?? figure.alt}
        {figure.credit ? ` — ${figure.credit}` : null}
      </figcaption>
    </figure>
  );
}