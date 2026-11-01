import type { Topic } from "../../lib/types";
import { abcd, quiz, sec } from "./_shared";

export const hunyadiMatyas: Topic = {
  slug: "hunyadi-matyas",
  title: "Hunyadi Mátyás",
  intro: "Reneszánsz király, fekete sereg, Corvina, hatalmas birodalomkísérlet és udvari kultúra.",
  blocks: [
    sec("Mátyás trónja és hadserege", [
      "1458-tól király; rendi támogatás és politikai játszmák után megszilárdul.",
      "Fekete sereg — zsoldoshadsereg, modern tüzérség; terjeszkedés Bécs felé, Morva, Ausztria.",
      "Hadi sikerek és pénzügyi terhek — adók, bányák.",
    ], [{ src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Matthias_Corvinus_%28cropped%29.jpg/330px-Matthias_Corvinus_%28cropped%29.jpg", alt: "Mátyás király", caption: "Mátyás király — reneszánsz udvar", credit: "Wikimedia Commons", external: true }]),
    quiz("m1", "Kvíz", [
      abcd("Mi a fekete sereg?", ["Jobbágy hadsereg", "Zsoldoshadsereg", "Tatár szövetségesek", "Vikingek"], 1, "Professzionális zsoldosok — fekete páncél."),
      abcd("Mátyás milyen udvarról híres?", ["Spartai", "Humanista reneszánsz", "Oszmán", "Szovjet"], 1, "Corvina, könyvtár, művészek."),
    ]),
    sec("Kultúra és állam", [
      "Corvina könyvtár — latin és görög művek; nyomdászat kezdetei.",
      "Jogegységesítés (Corpus Juris), országgyűlés, rendi egyensúly.",
      "Halála után (1490) a birodalom összeomlik — gyenge utódok.",
    ]),
    quiz("end", "Záró kvíz", [
      { type: "order", prompt: "Mátyás kora", items: [{ id: "1", label: "Trón megszerzése" }, { id: "2", label: "Fekete sereg, terjeszkedés" }, { id: "3", label: "Corvina, reneszánsz udvar" }], correctOrder: ["1", "2", "3"], explain: "Hatalom → hadviselés → kultúra." },
      abcd("Mátyás uralkodásának kezdete:", ["1387", "1458", "1526", "1867"], 1, "1458 — fiatal király."),
    ]),
  ],
  erettsegi: [
    { type: "open", prompt: "Mutasd be Mátyás király udvarát!", hintPoints: ["Humanizmus", "Corvina", "Művészek", "Itália kapcsolat"] },
    abcd("A fekete sereg jellege:", ["Ingyenes jobbágy sereg", "Fizetett zsoldosok", "Tatár segítség", "Pápai zászlóalj"], 1, "Zsoldoshadsereg — modern hadsereg."),
  ],
};
