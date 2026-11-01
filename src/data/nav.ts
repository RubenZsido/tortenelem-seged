import type { NavGroup } from "../lib/types";

/** Menü csoportok — slug ↔ topics/index.ts */
export const navGroups: NavGroup[] = [
  {
    label: "Antik Hellász",
    slugs: [
      "atheni-allamszervezet",
      "demokracia-vilaga",
      "gorog-epiteszet",
      "gorog-vallások",
    ],
  },
  {
    label: "Vallások",
    slugs: ["zsidó-monoteizmus", "keresztenyseg", "islam-vallas"],
  },
  {
    label: "Középkor",
    slugs: [
      "kozepkor",
      "kozepkori-uradalom",
      "parasztsag",
      "kozepkori-varos",
      "egyhaz-hierarchia",
      "roman-gotika",
      "reneszansz",
    ],
  },
  {
    label: "Magyar történelem",
    slugs: [
      "honfoglalas",
      "geza-es-szent-istvan",
      "iv-bela",
      "tatarjaras",
      "aranybulla",
      "karoly-robert",
      "luxemburgi-zsigmond",
      "hunyadi-diadala",
      "hunyadi-matyas",
    ],
  },
];

export const allSlugs = navGroups.flatMap((g) => g.slugs);
