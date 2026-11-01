import type { Tetel } from "../../lib/types";
import { abcd } from "../topics/_shared";

export const iszlamTetel: Tetel = {
  slug: "iszlam",
  title: "Iszlám vallás",
  minutes: 45,
  relatedTopics: ["islam-vallas"],
  outline: [
    {
      heading: "Mohamed és a kinyilatkoztatás",
      points: [
        "Mohamed próféta — Mekka, Medina",
        "Korán — Allah szava arab nyelven",
        "Hidzsra 622 — iszlám időszámítás kezdete",
      ],
    },
    {
      heading: "Hit alapjai",
      points: [
        "Monoteizmus — egy Allah",
        "Mohamed mint utolsó próféta (a zsidó és keresztény hagyomány után)",
        "Umma — hívők közössége",
      ],
    },
    {
      heading: "Az öt pillér",
      points: [
        "Shahada — tanúságtétel",
        "Salat — napi öt ima",
        "Zakat — adakozás",
        "Sawm — ramadán böjt",
        "Hajj — zarándoklat Mekkába",
      ],
    },
    {
      heading: "Terjeszkedés és civilizáció",
      points: [
        "Kalifátus — gyors terjeszkedés",
        "Tudomány, fordítások, kereskedelem (Bagdad, Cordoba)",
        "Kapcsolat a keresztény és zsidó világgal (Andalúzia, Közel-Kelet)",
      ],
    },
  ],
  quiz: [
    abcd("Mi a hidzsra?", ["Koran lezárása", "Medinába költözés 622", "Hadzs", "Öt ima"], 1, "622 — muszlim naptár kezdete."),
    abcd("Hány pillér van?", ["Három", "Öt", "Tíz", "Egy"], 1, "Öt pillér — alapgyakorlatok."),
    abcd("Hova zarándokolnak?", ["Róma", "Mekka", "Athén", "Jeruzsálem csak"], 1, "Kaba — Mekka."),
    {
      type: "order",
      prompt: "Sorrend: iszlám kialakulása",
      items: [
        { id: "a", label: "Mohamed kinyilatkoztatásai Mekkában" },
        { id: "b", label: "Hidzsra — Medinai közösség" },
        { id: "c", label: "Kalifák és terjeszkedés" },
      ],
      correctOrder: ["a", "b", "c"],
      explain: "Próféta → közösség → birodalom.",
    },
  ],
};
