import type { Topic } from "../../lib/types";
import { abcd, quiz, sec } from "./_shared";

export const romanGotika: Topic = {
  slug: "roman-gotika",
  title: "Román és gótika",
  intro: "Középkori építészet stílusai: vastag falak, boltívek, majd csúcsíves boltozat és tornyok.",
  blocks: [
    sec("Román stílus (10–12. század)", [
      "Vastag falak, kis ablakok, kerek boltívek; bazilika elrendezés.",
      "Példák: magyarországi román templomok (Ják, Pécs — Ószent Péter).",
      "Cél: masszív, biztonságos épület — vallási és védelmi funkció.",
    ]),
    quiz("m1", "Kvíz — Román", [
      abcd("Román stílus jellemzője:", ["Csúcsíves boltozat", "Kerek boltív, vastag fal", "Acél váz", "Kupola csak római"], 1, "Román = kerek ív, nehéz falak."),
      abcd("Melyik korai?", ["Gótika", "Román", "Renászansz", "Barokk"], 1, "Román előbb, gótika 12. sz. után."),
    ]),
    sec("Gótika (12–15. század)", [
      "Csúcsíves boltozat, rippás fal, magas tornyok, óriás ablakok (üvegmatricák).",
      "Notre-Dame Párizs, kölni dóm — felfelé törő forma, fény a templomban.",
      "Magyarországon: Mátyás-templom (gót elemek), csoportos faluk templomai.",
    ], [{ src: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Notre-Dame_de_Paris%2C_4_October_2017.jpg/440px-Notre-Dame_de_Paris%2C_4_October_2017.jpg", alt: "Notre-Dame", caption: "Notre-Dame — gótikus katedrális", credit: "Wikimedia", external: true }]),
    quiz("end", "Záró kvíz", [
      abcd("Gótika jellemző boltozata:", ["Kerek", "Csúcsíves", "Lapos", "Nincs boltozat"], 1, "Csúcsív — súlyelosztás, magasabb fal."),
      { type: "order", prompt: "Stílusok időrendje", items: [{ id: "1", label: "Román" }, { id: "2", label: "Gótika" }, { id: "3", label: "Renászansz" }], correctOrder: ["1", "2", "3"], explain: "Román → gótika → renászansz." },
    ]),
  ],
  erettsegi: [
    { type: "open", prompt: "Hasonlítsd össze a román és gót templomot!", hintPoints: ["Román: vastag fal, kerek ív", "Gót: csúcsív, magas, üvegablak", "Funkció: ima, közösség"] },
    abcd("Üvegmatricák főleg hol jelennek meg?", ["Román kis ablakok", "Gót nagy ablakok", "Római pantheon", "Görög stoá"], 1, "Gót ablakok — bibliai jelenetek."),
  ],
};
