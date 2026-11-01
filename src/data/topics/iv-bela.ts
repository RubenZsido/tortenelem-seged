import type { Topic } from "../../lib/types";
import { abcd, quiz, sec } from "./_shared";

export const ivBela: Topic = {
  slug: "iv-bela",
  title: "IV. Béla",
  intro: "A tatárjárás előtti és alatti király, erődítések, Visegrád és a túlélés stratégiája.",
  blocks: [
    sec("IV. Béla reformjai", [
      "1235-től uralkodik; erődített városok, várépítés — felkészülés a keleti fenyegetésre.",
      "Kun betelepítés — határőrzés, de később lázadás (1260-as évek).",
      "Visegrád — királyi székhely, fejlődő udvar.",
    ]),
    quiz("m1", "Kvíz", [
      abcd("IV. Béla mire készült?", ["Római invázió", "Tatár fenyegetés", "Török háború", "Világháború"], 1, "Batu kán serege — 1241–42."),
      abcd("Melyik város erődítése kapcsolódik hozzá?", ["Sparta", "Visegrád", "Róma", "Mekka"], 1, "Visegrád — Árpád-kori királyi központ."),
    ]),
    sec("Tatárjárás idején", [
      "1241–42: pusztítás, Mohi csata emléke; a király menekül, ellenállás széttöredezik.",
      "Újjáépítés, települések népesség-pótlása — convictus, jobbágyok.",
      "A tatár veszély enyhül 1242 után, de a királyság gyengül.",
    ]),
    quiz("end", "Záró kvíz", [
      abcd("A mohi csata éve:", ["895", "1241", "1526", "1848"], 1, "1241 — tatár győzelem."),
    ]),
  ],
  erettsegi: [
    { type: "open", prompt: "Mit tett IV. Béla a tatárjárás ellen?", hintPoints: ["Várépítés", "Kun betelepítés", "Menekülés, szervezés", "Újjáépítés"] },
    abcd("A tatárjárás után tipikus probléma:", ["Népesség csökkenés", "Túlnépesedés", "Gyarmati birodalom", "Ipari forradalom"], 0, "Pusztítás — népesség és gazdaság sérül."),
  ],
};
