import type { Topic } from "../../lib/types";
import { abcd, quiz, sec } from "./_shared";

export const demokraciaVilaga: Topic = {
  slug: "demokracia-vilaga",
  title: "A demokrácia világa",
  intro: "Athén demokraciájának fejlődése, a reformszereplők és a demokrácia határai a görög világban.",
  blocks: [
    sec("Kleiszthenés reformok", [
      "Kr. e. 508/507 körül Kleiszthenész demokratikus reformokat hajtott végre: megszüntette az arisztokratikus klánok politikai hatalmát.",
      "A polgárokat tíz demóra (kerületre) osztotta — nem vagyoni, hanem lakhely szerint; így nehezebb volt a nemesi befolyást érvényesíteni.",
      "Bevezette az ostrakizmust: évente szavazhattak egy politikus száműzetéséről (10 év), hogy megakadályozzák az egyeduralmat.",
    ]),
    quiz("m1", "Kvíz — Kleiszthenész", [
      abcd("Ki vezette be az athéni demokrácia alapjait Kr. e. 508 körül?", ["Periklész", "Kleiszthenész", "Szolón", "Alexandrosz"], 1, "Kleiszthenész reformjai: demók, népgyűlés, ostrakizmus."),
      abcd("Mi volt az ostrakizmus célja?", ["Adóemelés", "Egyeduralom megakadályozása", "Háború üzenete", "Templomépítés"], 1, "Száműzetéssel védte a polist a túlhatalmas politikustól."),
    ]),
    sec("Periklész és a fénykor", [
      "Kr. e. 5. század közepe: Periklész korszaka — erős haditengerészet, Parthenón, demokratikus részvétel kiszélesítése (díazma a szavazáshoz).",
      "A demokrácia nem vette fel mindenkit: nők, metoikoszok (telepesek), rabszolgák nem voltak polgárok.",
      "Sparta oligarchiával szemben Athén a népgyűlés és a sorsolás révén széles részvételt biztosított.",
    ], [{ src: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Map_athenian_empire_431bc-en.svg/640px-Map_athenian_empire_431bc-en.svg.png", alt: "Athén birodalma", caption: "Athén és szövetségesei (Kr. e. 431)", credit: "Wikimedia", external: true }]),
    quiz("m2", "Kvíz — Fénykor", [
      abcd("Kihez kötik az athéni demokrácia fénykorát?", ["Kimón", "Periklész", "Xenophon", "Agészilajosz"], 1, "Periklész: haditengerészet, kultúra, demokrácia."),
      abcd("Ki NEM volt athén polgár?", ["Szabad athén férfi", "Metoikosz (telepes)", "Mindkettő polgár", "Rabszolga"], 3, "Polgár csak a szabad athén férfi; metoikosz és rabszolga nem."),
    ]),
    quiz("end", "Záró kvíz", [
      { type: "order", prompt: "Sorrend: demokrácia fejlődése Athénban", items: [{ id: "1", label: "Szolón reformjai (adósságcsökkentés)" }, { id: "2", label: "Kleiszthenész demokratikus reformjai" }, { id: "3", label: "Periklész korszaka" }], correctOrder: ["1", "2", "3"], explain: "Szolón → Kleiszthenész → Periklész — fokozatos demokratizálódás." },
      abcd("Mit jelent a demokrácia görögül?", ["Egy ember uralma", "A nép uralma", "A gazdagok uralma", "Az istenek uralma"], 1, "Démosz (nép) + kratosz (hatalom)."),
    ]),
  ],
  erettsegi: [
    abcd("Melyik NEM jellemző az athéni demokráciára?", ["Népgyűlés", "Ostrakizmus", "Minden lakó egyenrangú polgár", "Sorsolás a tanácsba"], 2, "Nem minden lakó volt polgár — ez gyakori érettségi csapda."),
    { type: "open", prompt: "Hasonlítsd össze röviden az athéni demokráciát és a spartai államformát!", hintPoints: ["Athén: népgyűlés, demokrácia", "Sparta: két király, eforoszok, oligarchikus elemek", "Polgárság vs perioikoi, helóták"] },
  ],
};
