import type { Topic } from "../../lib/types";
import { abcd, quiz, sec } from "./_shared";

export const luxemburgiZsigmond: Topic = {
  slug: "luxemburgi-zsigmond",
  title: "Luxemburgi Zsigmond",
  intro: "Magyar király és német-római császár; késő középkor, egyetem, zsinatok, török előrenyomás.",
  blocks: [
    sec("Uralkodás", [
      "1387-től magyar király; később német-római császár — nagy birodalmi felelősség.",
      "Országgyűlések gyakoriabbak; rendi politika erősödik.",
      "Bécsi egyetem alapítása (1365 elődei mellett) — Zsigmond is támogatja az oktatást.",
    ]),
    quiz("m1", "Kvíz", [
      abcd("Zsigmond milyen császár is volt?", ["Római birodalmi (német-római)", "Bizánci", "Oszmán", "Perzsa"], 0, "Német-római császár."),
      abcd("Melyik zsinat kapcsolódik hozzá?", ["Nicea", "Konstanci (1414–18)", "Tridenti", "Vatikán II"], 1, "Konstanci — egyházi szakadás kezelése."),
    ]),
    sec("Kihívások", [
      "Török előrenyomás a Balkánon; vazallusok, határőrzés.",
      "Husiták Csehországban — Zsigmond háborúi.",
      "Magyarországon: rendi zűrzavar, oligarchák (pl. Garai, Lackfi) — de királyi hatalom szimbolikusan erős.",
    ]),
    quiz("end", "Záró kvíz", [
      abcd("Zsigmond uralkodásának jellemzője:", ["Csak helyi ügyek", "Európai és magyar politika összekapcsolódása", "Tatárjárás", "Honfoglalás"], 1, "Király + császár — nagy skála."),
    ]),
  ],
  erettsegi: [
    { type: "open", prompt: "Miért fontos Zsigmond európai szinten?", hintPoints: ["Császár", "Konstanci zsinat", "Egyetem", "Török veszély"] },
    abcd("A Konstanci zsinat célja:", ["Athéni demokrácia", "Egyházi egység helyreállítása (több pápa)", "Iszlám terjeszkedés", "Aranybulla"], 1, "Több pápa vitája — zsinat."),
  ],
};
