import type { Topic } from "../../lib/types";
import { abcd, quiz, sec } from "./_shared";

export const egyhazHierarchia: Topic = {
  slug: "egyhaz-hierarchia",
  title: "Egyház és egyházi hierarchia",
  intro: "Pápa, püspök, pap — a katolikus egyház szervezete és szerepe középkorban.",
  blocks: [
    sec("Hierarchia", [
      "Pápa — Róma, a katolikus egyház feje; zsinatok, bullák.",
      "Bíborosok tanácsa; érsek, püspök — egyházmegye vezető; plébános a falusi közösségben.",
      "Kolostorok: szerzetesi rendek (benedekin, ferences stb.) — imádság, tanítás, kultúra.",
    ], [{ src: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Organisation_of_the_Catholic_Church_%28Diocese%29.svg/440px-Organisation_of_the_Catholic_Church_%28Diocese%29.svg.png", alt: "Egyházi szervezet", caption: "Egyházmegyei szervezet (vázlat)", credit: "Wikimedia", external: true }]),
    quiz("m1", "Kvíz", [
      abcd("Ki áll az katolikus egyház élén?", ["Bizánci császár", "Pápa", "Angol király", "Kalifa"], 1, "Pápa — Róma."),
      abcd("Ki vezeti a plébániát a faluban?", ["Püspök", "Plébános pap", "Pápa", "Városi polgármester"], 1, "Plébános — helyi lelkész."),
    ]),
    sec("Egyház és hatalom", [
      "Investitúra vita: ki nevezi ki a püspököket — pápa vs uralkodó.",
      "Kanonokjog, egyházi bíróság; tithe (tized) — jövedelem az egyháznak.",
      "A reformáció (16. század) megreníti az egységet — de középkorban a pápaság csúcspontja (Innocent III.).",
    ]),
    quiz("end", "Záró kvíz", [
      { type: "order", prompt: "Rendfokozatok (felülről le)", items: [{ id: "p", label: "Pápa" }, { id: "b", label: "Püspök" }, { id: "pl", label: "Plébános" }], correctOrder: ["p", "b", "pl"], explain: "Pápa → püspök → plébános." },
    ]),
  ],
  erettsegi: [
    abcd("Mi az investitúra vita tárgya?", ["Adósság", "Kinek joga püspököt kinevezni", "Keresztes hadjárat", "Városi céh"], 1, "Szellemi és világi hatalom harca."),
    { type: "open", prompt: "Milyen szerepe volt az egyháznak középkorban?", hintPoints: ["Hit, szertartás", "Oktatás, írás", "Birtok, gazdaság", "Politikai befolyás"] },
  ],
};
