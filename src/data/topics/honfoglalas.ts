import type { Topic } from "../../lib/types";
import { abcd, quiz, sec } from "./_shared";

export const honfoglalas: Topic = {
  slug: "honfoglalas",
  title: "Honfoglalás",
  intro: "A magyar törzsök Kárpát-medencébe érkezése, szállásterület és államalapítás előzményei.",
  blocks: [
    sec("Út a Kárpát-medencéig", [
      "A magyarok őshazája a steppe; Levedi, Árpád vezetésével 895 körül a honfoglalás.",
      "Katonai taktika: lovas íjászok, gyors mozgás; a meghódított területen nomád és települő elem keveredik.",
      "A Gesta Hungarorum és bizánci, nyugati források fontos emlékei.",
    ], [{ src: "/images/maps/honfoglalas.svg", alt: "Honfoglalás térképe", caption: "A magyar honfoglalás útvonalai (vázlat)", credit: "Saját vázlat" }]),
    quiz("m1", "Kvíz", [
      abcd("Ki vezette a magyarokat a honfoglaláskor?", ["Szent István", "Árpád", "Károly Róbert", "Hunyadi"], 1, "Árpád — a törzsfő, 895 körül."),
      abcd("Honnan érkeztek a magyarok?", ["Alpok", "Steppe / Etelköz", "Skandinávia", "Afrika"], 1, "Steppe, korábban Etelköz."),
    ]),
    sec("Társadalom és állam", [
      "Törzsszövetség, nagyfejedelem; földművelés, vadászat, adó a hódított népektől.",
      "A keresztény misszió és a nyugati kapcsolatok előkészítik az államalapítást.",
      "Várak, gyepűelvek — határőrzés.",
    ]),
    quiz("end", "Záró kvíz", [
      { type: "order", prompt: "Sorrend", items: [{ id: "1", label: "Steppe élet" }, { id: "2", label: "Honfoglalás 895 körül" }, { id: "3", label: "Államalapítás előkészítése" }], correctOrder: ["1", "2", "3"], explain: "Őshazai → Kárpát-medence → keresztény állam." },
    ]),
  ],
  erettsegi: [
    abcd("A honfoglalás kb. időpontja:", ["295", "895", "1526", "1848"], 1, "895 körül — emlékezetes dátum."),
    { type: "open", prompt: "Miért volt sikeres a magyar honfoglalás?", hintPoints: ["Lovas hadviselés", "Gyenge bizánci/közép-európai helyzet", "Törzsszövetség", "Gyors mozgás"] },
  ],
};
