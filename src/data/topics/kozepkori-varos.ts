import type { Topic } from "../../lib/types";
import { abcd, quiz, sec } from "./_shared";

export const kozepkoriVaros: Topic = {
  slug: "kozepkori-varos",
  title: "Középkori város",
  intro: "Városalapítás, céhek, kereskedelem és a polgárság emelkedése.",
  blocks: [
    sec("Város keletkezése", [
      "Új városok: kereskedelmi útvonalak mentén, vár alatt, püspökségi központok.",
      "Városi jog (privilégium): piac, vámfelmentés, önkormányzat — vonzza a telepeseket.",
      "Fallal körülvett városközpont, piactér, templom, céhházak.",
    ]),
    quiz("m1", "Kvíz", [
      abcd("Ki alkotja a városi polgárságot?", ["Jobbágyok", "Kereskedők, iparosok, szabad polgárok", "Csak a nemesség", "Pápa"], 1, "Polgár = szabad, városi jogú."),
      abcd("Mi a céh?", ["Katonai rend", "Ipartársulás, minőségbiztosítás", "Egyházi rend", "Jobbágycsalád"], 1, "Céh — mester és legények szervezete."),
    ]),
    sec("Gazdaság és kultúra", [
      "Kézműipar specializálódik: szabó, csizmadia, kovács; piac összeköti vidéket és várost.",
      "A város adófizető, katonaságot ritkán ad — pénzzel vásárolja a szabadságot.",
      "12–13. századtól erősödő városok alapozzák meg a későbbi gazdasági változásokat.",
    ]),
    quiz("end", "Záró kvíz", [
      abcd("Mit adott a városi privilégium?", ["Robot kötelezettség", "Bizonyos szabadságjogok, piac", "Jobbágyság", "Tilos kereskedelem"], 1, "Jogok vonzzák a települőket."),
    ]),
  ],
  erettsegi: [
    { type: "open", prompt: "Miért fejlődtek a középkori városok?", hintPoints: ["Kereskedelem", "Céhek", "Városi jog", "Pénzgazdaság"] },
    abcd("A polgárság jellemző tevékenysége:", ["Robot", "Kereskedelem és ipar", "Uradi vadászat", "Zárókban élés"], 1, "Polgár — ipar, kereskedelem."),
  ],
};
