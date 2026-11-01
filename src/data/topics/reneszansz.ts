import type { Topic } from "../../lib/types";
import { abcd, quiz, sec } from "./_shared";

export const reneszansz: Topic = {
  slug: "reneszansz",
  title: "Renászansz",
  intro: "Antik ihlet, humanizmus, művészet és a tudás újjászületése Itáliában és Európában.",
  blocks: [
    sec("Humanizmus és antik", [
      "Renászansz = újjászületés — Kr. u. 14–16. század, kezdete Itália városaiban (Firenze, Velence).",
      "Humanisták: latin és görög klasszikusok tanulmányozása, emberközpontúság.",
      "Nyomdászat (Gutenberg) — könyvek terjedése, tudás demokratizálódása.",
    ]),
    quiz("m1", "Kvíz", [
      abcd("Hol indult a renászansz?", ["Skandinávia", "Itália", "Magyarország", "Japán"], 1, "Firenze, Itália városállamai."),
      abcd("Ki humanista/művész páros?", ["Homérosz", "Leonardo da Vinci", "Mohamed", "Attila"], 1, "Leonardo — reneszánsz zseni."),
    ]),
    sec("Művészet és gondolkodás", [
      "Perspektíva a festészetben; Michelangelo, Raffaello; szobrászat, építészet ( Brunelleschi kupola).",
      "Reformáció és tudományos forradalom előfutára: kétkelés, megfigyelés.",
      "Magyarországon: Mátyás kora udvara — humanista könyvtár, Itália kapcsolat.",
    ], [{ src: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/School_of_Athens_1511.jpg/640px-School_of_Athens_1511.jpg", alt: "Athéni iskola", caption: "Raffaello: Athéni iskola — antik és humanizmus", credit: "Wikimedia", external: true }]),
    quiz("end", "Záró kvíz", [
      abcd("Mi segítette a tudás gyors terjedését?", ["Csak kézírás", "Nyomdászat", "Tilos könyv", "Csak latin egyházi szöveg"], 1, "Gutenberg nyomdája ~1450."),
    ]),
  ],
  erettsegi: [
    { type: "open", prompt: "Mit jelent a humanizmus a renászanszban?", hintPoints: ["Antik kultúra", "Ember értéke", "Oktatás, retorika", "Művészet"] },
    abcd("A renászansz időbeli helye:", ["Kr. e. 5. század", "Kr. u. 14–16. század", "19. század", "Középkor eleje"], 1, "Késő középkor — korai újkor határ."),
  ],
};
