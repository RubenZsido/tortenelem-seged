import type { Topic } from "../../lib/types";
import { atheniAllamszervezet } from "./atheni-allamszervezet";
import { aranybulla } from "./aranybulla";
import { demokraciaVilaga } from "./demokracia-vilaga";
import { egyhazHierarchia } from "./egyhaz-hierarchia";
import { gezaEsSzentIstvan } from "./geza-es-szent-istvan";
import { gorogEpiteszet } from "./gorog-epiteszet";
import { gorogVallások } from "./gorog-vallások";
import { honfoglalas } from "./honfoglalas";
import { hunyadiDiadala } from "./hunyadi-diadala";
import { hunyadiMatyas } from "./hunyadi-matyas";
import { islamVallas } from "./islam-vallas";
import { ivBela } from "./iv-bela";
import { karolyRobert } from "./karoly-robert";
import { keresztenyseg } from "./keresztenyseg";
import { kozepkoriUradalom } from "./kozepkori-uradalom";
import { kozepkoriVaros } from "./kozepkori-varos";
import { kozepkor } from "./kozepkor";
import { luxemburgiZsigmond } from "./luxemburgi-zsigmond";
import { parasztsag } from "./parasztsag";
import { reneszansz } from "./reneszansz";
import { romanGotika } from "./roman-gotika";
import { tatarjaras } from "./tatarjaras";
import { zsidóMonoteizmus } from "./zsidó-monoteizmus";
import { end234Blocks } from "./end234";
import { endExtraBlock } from "./endExtra";

/** end2–end4 és end-extra már a fájlban van */
const END_INLINE = new Set(["geza-es-szent-istvan", "honfoglalas"]);

function topicWithEndExtras(t: Topic): Topic {
  if (END_INLINE.has(t.slug)) return t;
  const extraAbc = endExtraBlock(t.slug);
  const extra234 = end234Blocks(t.slug);
  if (!extraAbc && extra234.length === 0) return t;
  return {
    ...t,
    blocks: [
      ...t.blocks,
      ...(extraAbc ? [extraAbc] : []),
      ...extra234,
    ],
  };
}

/** Összes témakör — slug alapján keresés */
const topics: Topic[] = [
  atheniAllamszervezet,
  demokraciaVilaga,
  gorogEpiteszet,
  gorogVallások,
  zsidóMonoteizmus,
  keresztenyseg,
  islamVallas,
  kozepkor,
  kozepkoriUradalom,
  parasztsag,
  kozepkoriVaros,
  egyhazHierarchia,
  romanGotika,
  reneszansz,
  honfoglalas,
  gezaEsSzentIstvan,
  ivBela,
  tatarjaras,
  aranybulla,
  karolyRobert,
  luxemburgiZsigmond,
  hunyadiDiadala,
  hunyadiMatyas,
];

export function getTopicBySlug(slug: string): Topic | undefined {
  const t = topics.find((x) => x.slug === slug);
  return t ? topicWithEndExtras(t) : undefined;
}

/** Nyers adat (kvíz bővítés nélkül) — pl. admin */
export { topics };
