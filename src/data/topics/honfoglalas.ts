import type { Topic } from "../../lib/types";
import { abcd, match, multi, quiz, sec, truefalse } from "./_shared";

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
      abcd("Ki vezette a törzsszövetséget a bejövetelkor?", ["Levedi", "Árpád", "Géza", "Attila"], 1, "Árpád — nagyfejedelem."),
      abcd("Melyik forrás említi a honfoglalást?", ["Gesta Hungarorum", "Biblia", "Kódex", "Parthenón"], 0, "Anonymus Gesta Hungarorum."),
      abcd("Mi jellemezte a magyar hadviselést?", ["Lovas íjászok", "Csak gyalogság", "Haditengerészet", "Elefántok"], 0, "Steppe taktika — gyors lovas csapatok."),
    ]),
    quiz("end2", "Gyakorló kvíz — Honfoglalás", [
      abcd("Hol volt az őshaza?", ["Steppe / Etelköz", "Itália", "Skandinávia", "Egyiptom"], 0, "Steppe, korábban Etelköz."),
      abcd("Mi a gyepű?", ["Határőrző sáv", "Templom", "Adó", "Koronázás"], 0, "Védelmi zóna a határon."),
      abcd("Mi készítette elő az államalapítást?", ["Keresztény misszió, nyugati kapcsolat", "Római birodalom", "Tatár adó", "Universitas"], 0, "Géza–István előtt is nyílt Nyugat felé."),
      { type: "order", prompt: "Vezetők", items: [{ id: "a", label: "Levedi" }, { id: "b", label: "Árpád" }, { id: "c", label: "Géza" }], correctOrder: ["a", "b", "c"], explain: "Levedi → Árpád (honfoglalás) → Géza (keresztényítés előkészítése)." },
    ]),
    quiz("end3", "Vegyes feladatok", [
      truefalse("A honfoglalás kb. 895 körül történt.", true, "Emlékezetes dátum."),
      truefalse("A magyarok teljesen letelepedtek azonnal, nomád élet nélkül.", false, "Nomád és települő elem keveredett."),
      match(
        "Párosítsd!",
        [{ id: "l1", label: "Árpád" }, { id: "l2", label: "Gyepű" }, { id: "l3", label: "Steppe" }],
        [{ id: "r1", label: "Törzsfő" }, { id: "r2", label: "Határőrzés" }, { id: "r3", label: "Őshaza" }],
        { l1: "r1", l2: "r2", l3: "r3" },
        "Árpád vezető; gyepű határ; steppe őshaza.",
      ),
      multi(
        "Mi segítette a honfoglalás sikerét?",
        ["Lovas hadviselés", "Gyenge Bizánc/közép-európai helyzet", "Törzsszövetség", "Parthenón építése", "Gyors mozgás"],
        [0, 1, 2, 4],
        "Hadviselés, helyzet, szövetség, mozgás — nem görög templom.",
      ),
    ]),
    quiz("end4", "Kihívás", [
      abcd("Melyik NEM jellemző a honfoglaló társadalomra?", ["Törzsszövetség", "Nagyfejedelem", "Teljes városi önkormányzat", "Adó a hódítottaktól"], 2, "Városi önkormányzat későbbi fejlemény."),
      abcd("Mi következett a steppe élet után a Kárpát-medencében?", ["Honfoglalás, majd államalapítás előkészítése", "Azonnali EU-csatlakozás", "Spartai reform", "Reneszánsz"], 0, "895 körül → később keresztény királyság."),
      { type: "order", prompt: "Források fontossága", items: [{ id: "1", label: "Bizánci leírások" }, { id: "2", label: "Gesta Hungarorum" }, { id: "3", label: "Nyugati krónikák" }], correctOrder: ["1", "2", "3"], explain: "Több forrásos megközelítés — mindegyik értékes." },
      match(
        "Kapcsolók",
        [{ id: "x1", label: "Nomád elem" }, { id: "x2", label: "Vár" }],
        [{ id: "y1", label: "Pásztorkodás, mozgás" }, { id: "y2", label: "Védelem, hatalmi központ" }],
        { x1: "y1", x2: "y2" },
        "Nomád élet + várak a meghódított területen.",
      ),
    ]),
  ],
  erettsegi: [
    abcd("A honfoglalás kb. időpontja:", ["295", "895", "1526", "1848"], 1, "895 körül — emlékezetes dátum."),
    { type: "open", prompt: "Miért volt sikeres a magyar honfoglalás?", hintPoints: ["Lovas hadviselés", "Gyenge bizánci/közép-európai helyzet", "Törzsszövetség", "Gyors mozgás"] },
  ],
};
