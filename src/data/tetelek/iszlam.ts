import type { Tetel } from "../../lib/types";
import { abcd, match, multi, truefalse } from "../topics/_shared";

export const iszlamTetel: Tetel = {
  slug: "iszlam",
  title: "Iszlám vallás",
  minutes: 45,
  relatedTopics: ["islam-vallas"],
  outline: [
    {
      heading: "Mohamed és a kinyilatkoztatás",
      points: [
        "Mohamed próféta — Mekka, Medina",
        "Korán — Allah szava arab nyelven",
        "Hidzsra 622 — iszlám időszámítás kezdete",
      ],
    },
    {
      heading: "Hit alapjai",
      points: [
        "Monoteizmus — egy Allah",
        "Mohamed mint utolsó próféta (a zsidó és keresztény hagyomány után)",
        "Umma — hívők közössége",
      ],
    },
    {
      heading: "Az öt pillér",
      points: [
        "Shahada — tanúságtétel",
        "Salat — napi öt ima",
        "Zakat — adakozás",
        "Sawm — ramadán böjt",
        "Hajj — zarándoklat Mekkába",
      ],
    },
    {
      heading: "Terjeszkedés és civilizáció",
      points: [
        "Kalifátus — gyors terjeszkedés",
        "Tudomány, fordítások, kereskedelem (Bagdad, Cordoba)",
        "Kapcsolat a keresztény és zsidó világgal (Andalúzia, Közel-Kelet)",
      ],
    },
  ],
  quizzes: [
    {
      title: "Tétel — önellenőrző kvíz",
      questions: [
        abcd("Mi a hidzsra?", ["Koran lezárása", "Medinába költözés 622", "Hadzs", "Öt ima"], 1, "622 — muszlim naptár kezdete."),
        abcd("Hány pillér van?", ["Három", "Öt", "Tíz", "Egy"], 1, "Öt pillér — alapgyakorlatok."),
        abcd("Hova zarándokolnak?", ["Róma", "Mekka", "Athén", "Jeruzsálem csak"], 1, "Kaba — Mekka."),
        abcd("Az iszlám szó jelentése:", ["Háború", "Alávetés Allah akaratának", "Kereskedelem", "Böjt"], 1, "Muszlim = alávető."),
        abcd("A Korán nyelve:", ["Latin", "Arab", "Görög", "Héber"], 1, "Szent szöveg arabul."),
        {
          type: "order",
          prompt: "Sorrend: iszlám kialakulása",
          items: [
            { id: "a", label: "Mohamed kinyilatkoztatásai Mekkában" },
            { id: "b", label: "Hidzsra — Medinai közösség" },
            { id: "c", label: "Kalifák és terjeszkedés" },
          ],
          correctOrder: ["a", "b", "c"],
          explain: "Próféta → közösség → birodalom.",
        },
      ],
    },
    {
      title: "Gyakorló kvíz — Iszlám",
      questions: [
        abcd("Mi az umma?", ["Hadsereg", "Hívők közössége", "Adó", "Ostrakizmus"], 1, "Közösség — Medina után."),
        abcd("Zakát jelentése:", ["Imádság", "Adakozás", "Zarándoklat", "Tanúságtétel"], 1, "Harmadik pillér."),
        abcd("Mi NEM pillér?", ["Hadzs", "Zakát", "Körülmetélés mint pillér", "Salat"], 2, "Szokás, de nem az öt pillér."),
        { type: "order", prompt: "Pillérek (logikai sor)", items: [{ id: "1", label: "Shahada" }, { id: "2", label: "Salat" }, { id: "3", label: "Zakat" }], correctOrder: ["1", "2", "3"], explain: "Tanúság → ima → adakozás (az öt első három)." },
      ],
    },
    {
      title: "Vegyes feladatok",
      questions: [
        truefalse("A hidzsra 622-ben történt.", true, "Iszlám naptár kezdete."),
        truefalse("A Korán latin nyelven íródott.", false, "Arab — szent nyelv."),
        match("Párosítsd!", [{ id: "l1", label: "Allah" }, { id: "l2", label: "Mohamed" }], [{ id: "r1", label: "Isten" }, { id: "r2", label: "Próféta" }], { l1: "r1", l2: "r2" }, "Alapfogalmak."),
        multi("Iszlám jellemzők:", ["Monoteizmus", "Öt pillér", "Politeizmus hivatalos", "Kalifátus terjeszkedés"], [0, 1, 3], "Egy Isten, gyakorlat, birodalom."),
      ],
    },
    {
      title: "Kihívás",
      questions: [
        abcd("Cordoba és Bagdad:", ["Tudomány, kereskedelem", "Spartai edzőtér", "Tatár főváros", "Ostrakon tároló"], 0, "Aranykor — fordítások."),
        abcd("Melyik NEM igaz?", ["Mohamed próféta", "622 hidzsra", "Hadzs Rómába", "Ramadán böjt"], 2, "Hadzs — Mekka."),
        { type: "order", prompt: "Terjeszkedés", items: [{ id: "a", label: "Arab félsziget" }, { id: "b", label: "Közel-Kelet, Ész-Afrika" }], correctOrder: ["a", "b"], explain: "Kiindulás → birodalom." },
        match("Kapcsolók", [{ id: "x1", label: "Shahada" }, { id: "x2", label: "Hajj" }], [{ id: "y1", label: "Tanúságtétel" }, { id: "y2", label: "Zarándoklat" }], { x1: "y1", x2: "y2" }, "Pillérek."),
      ],
    },
  ],
};
