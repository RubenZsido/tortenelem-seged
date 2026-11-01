import type { Topic } from "../../lib/types";
import { abcd, quiz, sec } from "./_shared";

export const gezaEsSzentIstvan: Topic = {
  slug: "geza-es-szent-istvan",
  title: "Géza és Szent István",
  intro: "A keresztény állam megalapítása, István királysága, törvények és egyházszervezet.",
  blocks: [
    sec("Géza nagyfejedelem", [
      "Géza megtérése, misszió — keresztény egyház meghívása; István folytatja.",
      "Katonai hatalom centralizálása a törzsfők ellen; nyugati kapcsolatok.",
    ], [{ src: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Szt_Istvan_Thaler_99775939.jpg/330px-Szt_Istvan_Thaler_99775939.jpg", alt: "Szent István", caption: "Szent István — az államalapító király", credit: "Wikimedia Commons", external: true }]),
    quiz("m1", "Kvíz", [
      abcd("Ki alapította meg a magyar királyságot?", ["Árpád", "Géza", "Szent István", "Koppány"], 2, "István 1000 körül koronázták királlyá."),
      abcd("Kivel harcolt István a hatalomért?", ["Koppány", "Periklész", "Mohamed", "IV. Béla"], 0, "Koppány lázadása — pogány vs keresztény állam."),
    ]),
    sec("István állama", [
      "Törvények (Decretum, Admonitió): erkölcs, egyház, királyi hatalom.",
      "Tartományi rendszer, vármegyék, ispánok; püspökségek (Esztergom főpüspök).",
      "Szent korona, apostoli király cím — Európa elfogadja a magyar királyságot.",
    ]),
    quiz("end", "Záró kvíz", [
      { type: "order", prompt: "Sorrend", items: [{ id: "a", label: "Géza keresztényítése" }, { id: "b", label: "István királyi koronázása" }, { id: "c", label: "Törvények, egyházszervezet" }], correctOrder: ["a", "b", "c"], explain: "Géza → István korona → intézmények." },
      abcd("Mi az Esztergom szerepe?", ["Tengeri kikötő", "Főpapság székhelye", "Tatár főváros", "Universitas"], 1, "Esztergom — érsekség, István idejétől."),
    ]),
  ],
  erettsegi: [
    { type: "open", prompt: "Mivel erősítette Szent István a királyi hatalmat?", hintPoints: ["Keresztény egyház", "Vármegyék, ispánok", "Törvények", "Nyugati kapcsolat"] },
    abcd("Az apostoli király cím jelentése:", ["Római császár", "Egyház által elismert királyi hatalom", "Törzsfő", "Kalifa"], 1, "Apostoli király — pápai elismerés."),
  ],
};
