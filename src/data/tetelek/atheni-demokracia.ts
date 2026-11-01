import type { Tetel } from "../../lib/types";
import { abcd, match, multi, truefalse } from "../topics/_shared";

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
  quizzes: [
    {
      title: "Tétel — önellenőrző kvíz",
      questions: [
        abcd(
          "Melyik intézményben szavaztak közvetlenül a polgárok?",
          ["Bulé", "Ekklésia", "Spartai eforoszok tanácsa", "Római szenátus"],
          1,
          "Ekklésia = népgyűlés.",
        ),
        abcd("Mi volt az ostrakizmus?", ["Adó", "Száműzetés szavazással", "Hadi jutalom", "Templomi szertartás"], 1, "10 évre száműzhettek politikust."),
        abcd("Kihez kötik a fénykort?", ["Kimón", "Periklész", "Alexandrosz", "Caesar"], 1, "Periklész korszaka."),
        abcd("Ki vezette be a demók rendszerét?", ["Periklész", "Kleiszthenész", "Kimón", "Caesar"], 1, "508 körül — reformok."),
        abcd("Mit jelent a demokrácia?", ["Egy ember uralma", "A nép uralma", "A gazdagok uralma", "Az istenek uralma"], 1, "Démosz + kratosz."),
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
    },
    {
      title: "Gyakorló kvíz — Athéni demokrácia",
      questions: [
      abcd("Mi volt a díazma?", ["Adó", "Juttatás a szavazáshoz", "Büntetés", "Ostrakon"], 1, "Periklész — széles részvétel."),
      abcd("Spartával szemben Athén:", ["Oligarchia dominált", "Népgyűlés és demokrácia", "Persa satrapa", "Római császárság"], 1, "Demokrácia vs spartai állam."),
      abcd("Ki NEM volt polgár?", ["Szabad athén férfi", "Metoikosz", "Minden lakó", "Rabszolga"], 2, "Polgár csak a szabad férfi."),
      { type: "order", prompt: "Reformok", items: [{ id: "1", label: "Szolón" }, { id: "2", label: "Kleiszthenész" }, { id: "3", label: "Periklész" }], correctOrder: ["1", "2", "3"], explain: "Fokozatos demokratizálódás." },
      ],
    },
    {
      title: "Vegyes feladatok",
      questions: [
      truefalse("Az ostrakizmus 10 évre száműzhetett politikust.", true, "Egyeduralom elleni eszköz."),
      truefalse("Minden athéni lakó szavazhatott az ekklésiában.", false, "Csak polgár."),
      match("Párosítsd!", [{ id: "l1", label: "Bulé" }, { id: "l2", label: "Stratégus" }], [{ id: "r1", label: "500 fős tanács" }, { id: "r2", label: "Választott hadvezér" }], { l1: "r1", l2: "r2" }, "Intézmények."),
      multi("Athéni demokrácia jellemzői:", ["Demók", "Minden lakó polgár", "Ostrakizmus", "Sparta azonos"], [0, 2], "Demók és ostrakizmus."),
      ],
    },
    {
      title: "Kihívás",
      questions: [
      abcd("Melyik NEM Kleiszthenész reformja?", ["Demók", "Ostrakizmus", "Aranyforint", "Lakhely szerinti tagozás"], 2, "Aranyforint — későbbi magyar pénz."),
      abcd("Periklész korszakában mi erősödött?", ["Haditengerészet és kultúra", "Spartai eforoszok", "Persa birodalom", "Tatár invázió"], 0, "Fénykor."),
      { type: "order", prompt: "Döntéshozatal", items: [{ id: "a", label: "Bulé előkészít" }, { id: "b", label: "Ekklésia szavaz" }], correctOrder: ["a", "b"], explain: "Előkészítés → népgyűlés." },
      match("Kapcsolók", [{ id: "x1", label: "Démosz" }, { id: "x2", label: "Kratosz" }], [{ id: "y1", label: "Nép" }, { id: "y2", label: "Hatalom" }], { x1: "y1", x2: "y2" }, "Demokrácia szó."),
      ],
    },
  ],
};
