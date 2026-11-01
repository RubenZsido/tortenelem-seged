import type { Topic } from "../../lib/types";
import { abcd, quiz, sec } from "./_shared";

export const aranybulla: Topic = {
  slug: "aranybulla",
  title: "Aranybulla",
  intro: "1222 — II. András adománya a nemességnek; jogok, ellensúly a királyi hatalommal.",
  blocks: [
    sec("Tartalom és ok", [
      "A nemesek lázadásai miatt II. András kiadja az Aranybullát 1222-ben.",
      "Nemesi privilégiumok: adómentesség, hadjárati kötelezettség, bírósági jogok.",
      "Évente egyszer a nemesség gyűlése (congregatio) — sérelmek elmondása.",
      "Ius resistendi: ha a király megszegi a bullát, a nemesség ellenállhat.",
    ]),
    quiz("m1", "Kvíz", [
      abcd("Ki adta ki az Aranybullát?", ["Szent István", "II. András", "Mátyás", "Horthy"], 1, "1222 — II. András."),
      abcd("Kinek adott jogokat?", ["Jobbágyoknak", "Nemességnek", "Tatároknak", "Polgároknak"], 1, "Nemesi rend — privilégiumok."),
    ]),
    sec("Jelentőség", [
      "Alapkövet a nemesség és király viszonyához; későbbi királyok megerősítik.",
      "A magyar alkotmányos fejlődés egyik emblematikus dokumentuma.",
      "Limitálja a királyi hatalmat — rendi állam jellege erősödik.",
    ]),
    quiz("end", "Záró kvíz", [
      abcd("Mi az ius resistendi?", ["Adófizetés", "Ellenállás joga bullasértés esetén", "Katonai szolgálat", "Zarándoklat"], 1, "Ha a király megszegi a bullát — ellenállás."),
    ]),
  ],
  erettsegi: [
    { type: "open", prompt: "Sorolj fel 3 Aranybulla-jogot a nemességnek!", hintPoints: ["Adómentesség", "Congregatio", "Ius resistendi", "Bírósági kiváltság"] },
    abcd("Az Aranybulla éve:", ["1000", "1222", "1526", "1867"], 1, "1222 — emlékezetes dátum."),
  ],
};
