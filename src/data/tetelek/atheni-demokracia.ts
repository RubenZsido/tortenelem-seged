import type { Tetel } from "../../lib/types";
import { abcd } from "../topics/_shared";

export const atheniDemokraciaTetel: Tetel = {
  slug: "atheni-demokracia",
  title: "Athéni demokrácia és annak fénykora",
  minutes: 45,
  relatedTopics: ["atheni-allamszervezet", "demokracia-vilaga"],
  outline: [
    {
      heading: "Bevezetés — polis és demokrácia",
      points: [
        "Athén polis: agora, polgárság, önálló városállam",
        "Demokrácia = nép uralma; részvétel korlátai (nem minden lakó polgár)",
      ],
    },
    {
      heading: "Intézmények",
      points: [
        "Ekklésia — népgyűlés, szavazás",
        "Bulé — 500 fős tanács, sorsolás",
        "Stratégusok — választott hadvezérek",
        "Archontok, tisztségviselők — évnyi mandátum",
      ],
    },
    {
      heading: "Kleiszthenész és Periklész",
      points: [
        "Kleiszthenész reformjai: demók, ostrakizmus",
        "Periklész korszaka: haditengerészet, Parthenón, díazma",
        "Ostrakizmus — egyeduralom megakadályozása",
      ],
    },
    {
      heading: "Összegzés — fénykor és határok",
      points: [
        "Kr. e. 5. század — kulturális és politikai csúcs",
        "Demokrácia nem teljes egyenlőség: nők, metoikoszok, rabszolgák",
        "Spartával szemben: demokrácia vs oligarchia",
      ],
    },
  ],
  quiz: [
    abcd(
      "Melyik intézményben szavaztak közvetlenül a polgárok?",
      ["Bulé", "Ekklésia", "Spartai eforoszok tanácsa", "Római szenátus"],
      1,
      "Ekklésia = népgyűlés.",
    ),
    abcd("Mi volt az ostrakizmus?", ["Adó", "Száműzetés szavazással", "Hadi jutalom", "Templomi szertartás"], 1, "10 évre száműzhettek politikust."),
    abcd("Kihez kötik a fénykort?", ["Kimón", "Periklész", "Alexandrosz", "Caesar"], 1, "Periklész korszaka."),
    {
      type: "order",
      prompt: "Állítsd sorrendbe a fejlődést!",
      items: [
        { id: "1", label: "Kleiszthenész reformjai" },
        { id: "2", label: "Periklész korszaka" },
        { id: "3", label: "Peloponnészoszi háború (demokrácia válsága)" },
      ],
      correctOrder: ["1", "2", "3"],
      explain: "Reformok → fénykor → háború és crízis.",
    },
  ],
};
