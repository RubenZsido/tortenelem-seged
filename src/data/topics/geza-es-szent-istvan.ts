import type { Topic } from "../../lib/types";
import { abcd, match, multi, quiz, sec, truefalse } from "./_shared";

export const gezaEsSzentIstvan: Topic = {
  slug: "geza-es-szent-istvan",
  title: "Géza és Szent István",
  intro: "A keresztény állam megalapítása, István királysága, törvények és egyházszervezet.",
  blocks: [
    sec("Géza nagyfejedelem", [
      "Géza megtérése, misszió — keresztény egyház meghívása; István folytatja.",
      "Katonai hatalom centralizálása a törzsfők ellen; nyugati kapcsolatok.",
    ], [{ src: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Istvan-ChroniconPictum.jpg", alt: "Szent István", caption: "Szent István — Képes krónika miniatúra", credit: "Wikimedia Commons", external: true }]),
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
      abcd("Mi volt a Decretum jelentése?", ["Haditerv", "István erkölcsi és egyházi törvényei", "Tatár adó", "Universitas alapítás"], 1, "Decretum — erkölcs, egyház, királyi hatalom."),
      abcd("Ki volt Géza utódának fő ellenfele a hatalomért?", ["Koppány", "Periklész", "Batu kán", "Luxemburgi Zsigmond"], 0, "Koppány lázadása — pogány vs keresztény állam."),
      abcd("Mit jelent az apostoli király cím?", ["Római császár", "Egyház által elismert királyi hatalom", "Törzsfő", "Kalifa"], 1, "Pápai elismerés — nyugati kapcsolat."),
    ]),
    quiz("end2", "Gyakorló kvíz — Géza és István", [
      abcd("Ki hívta meg először a keresztény missziót?", ["Szent István", "Géza", "Kálmán", "László"], 1, "Géza megtérése és misszió — István folytatja."),
      abcd("Mi erősítette a királyi hatalmat István idején?", ["Vármegyék és ispánok", "Csak a törzsfők", "Tatár adó", "Universitas"], 0, "Tartományi rendszer, ispánok."),
      abcd("Melyik NEM István korszakához kötődik?", ["Szent korona", "Püspökségek szervezése", "Aranybulla", "Admonitió"], 2, "Aranybulla — 1222, IV. András."),
      { type: "order", prompt: "Állítsd sorrendbe!", items: [{ id: "1", label: "Géza nagyfejedelem" }, { id: "2", label: "István király" }, { id: "3", label: "Koppány legyőzése" }, { id: "4", label: "Intézmények, törvények" }], correctOrder: ["1", "2", "3", "4"], explain: "Géza → István → Koppány → államszervezés." },
    ]),
    quiz("end3", "Vegyes feladatok", [
      truefalse("István királyként 1000 körül koronázták.", true, "A keresztény királyság szimbóluma."),
      truefalse("A vármegyék a tatárjárás után jöttek létre először.", false, "István idején is szerveztek tartományi rendszert."),
      match(
        "Párosítsd!",
        [
          { id: "l1", label: "Esztergom" },
          { id: "l2", label: "Decretum" },
          { id: "l3", label: "Apostoli király" },
        ],
        [
          { id: "r1", label: "Főpapság" },
          { id: "r2", label: "Törvények" },
          { id: "r3", label: "Pápai elismerés" },
        ],
        { l1: "r1", l2: "r2", l3: "r3" },
        "Esztergom — érsek; Decretum — törvény; apostoli király — egyházi elismerés.",
      ),
      multi(
        "Melyek erősítették Szent István királyságát? (több is jó)",
        ["Keresztény egyház", "Nyugati kapcsolatok", "Tatár hadjárat", "Vármegyék, ispánok", "Spartai eforoszok"],
        [0, 1, 3],
        "Egyház, Nyugat, vármegyék — nem tatár vagy spartai.",
      ),
    ]),
    quiz("end4", "Kihívás", [
      abcd("Melyik állítás NEM igaz Gézára?", ["Megtért", "Missziót hívott", "Királyi koronát kapott 1000-ben", "Centralizálta a hatalmat"], 2, "Koronázás Istváné — Géza nagyfejedelem."),
      abcd("Mi köti össze István törvényeit és egyházát?", ["Mindkettő a királyi hatalmat szolgálta", "Csak a vallás számított", "A törzsfők írták", "Bizánc adta"], 0, "Törvény + egyház = keresztény állam."),
      { type: "order", prompt: "Intézmények fontossága (általános)", items: [{ id: "a", label: "Püspökségek" }, { id: "b", label: "Vármegyék" }, { id: "c", label: "Szent korona" }], correctOrder: ["c", "a", "b"], explain: "Korona (legitimitás) → egyház → adminisztráció — tanulási sor." },
      match(
        "Kapcsolók!",
        [
          { id: "x1", label: "Admonitió" },
          { id: "x2", label: "Ispán" },
        ],
        [
          { id: "y1", label: "Intőző tanácsok" },
          { id: "y2", label: "Vármegye vezető" },
        ],
        { x1: "y1", x2: "y2" },
        "Admonitió — István tanácsa; ispán — megyei adminisztrátor.",
      ),
    ]),
  ],
  erettsegi: [
    { type: "open", prompt: "Mivel erősítette Szent István a királyi hatalmat?", hintPoints: ["Keresztény egyház", "Vármegyék, ispánok", "Törvények", "Nyugati kapcsolat"] },
    abcd("Az apostoli király cím jelentése:", ["Római császár", "Egyház által elismert királyi hatalom", "Törzsfő", "Kalifa"], 1, "Apostoli király — pápai elismerés."),
  ],
};
