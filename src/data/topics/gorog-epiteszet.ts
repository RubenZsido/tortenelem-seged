import type { Topic } from "../../lib/types";
import { abcd, quiz, sec } from "./_shared";

export const gorogEpiteszet: Topic = {
  slug: "gorog-epiteszet",
  title: "Görög és római építészet",
  intro: "Oszzop, ion és korinthoszi rend, templomok, a római ív és az aqueduct — építészeti alapfogalmak.",
  blocks: [
    sec("Görög templom és rendek", [
      "A görög templom tengelyesen szimmetrikus, oszlopos épület: pronaosz, naosz (szentély), opisztodomosz.",
      "Három oszloprend: dór (egyszerű fej), ion (voluta), korinthoszi (levél dísz).",
      "Példák: Parthenón (Athén, dór), Erechtheion; a arányok és a könnyűség a klasszikus esztétika célja.",
    ], [{ src: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/The_Parthenon_in_Athens.jpg/640px-The_Parthenon_in_Athens.jpg", alt: "Parthenón", caption: "Parthenón — dór templom az Akropoliszon", credit: "Wikimedia", external: true }]),
    quiz("m1", "Kvíz — Görög", [
      abcd("Melyik NEM görög oszloprend?", ["Dór", "Ion", "Korinthoszi", "Gót"], 3, "A gótika középkori, nem antik görög rend."),
      abcd("Hol áll a naosz?", ["A templom szentélyében", "A római Forum Romanum közepén", "Az aqueduct tetején", "A középkori várudvarban"], 0, "A naosz a templom belseje, az istenség szobra helye."),
    ]),
    sec("Római építészet", [
      "A rómaiak átvették a görög formszabályt, de új anyagokat és szerkezeteket: beton, ív, boltív, kupola.",
      "Aqueduct, colosseum, pantheon — nagy lépték, gyakorlati cél (út, víz, szórakozás).",
      "A római város: forum, bazilika, termálfürdő, amfiteátrum.",
    ], [{ src: "/images/maps/roman-empire.svg", alt: "Római birodalom", caption: "A Római Birodalom kiterjedése (vázlat)", credit: "Saját vázlat" }]),
    quiz("m2", "Kvíz — Római", [
      abcd("Mi jellemző a római építészetre?", ["Csak fa épületek", "Ív, boltív, beton", "Csak oszloprendek, ív nélkül", "Kizárólag gót boltozat"], 1, "Az ív és a beton lehetővé tette a nagy belső tereket."),
      abcd("Mire szolgált az aqueduct?", ["Templomi áldozat", "Vínszállítás", "Víz vezetése a városba", "Gladiátorverseny"], 2, "A vízvezeték a város ellátását szolgálta."),
    ]),
    quiz("end", "Záró kvíz", [
      { type: "order", prompt: "Állítsd sorrendbe: görög → római hatás", items: [{ id: "a", label: "Görög oszloprendek és templom arányok" }, { id: "b", label: "Római ív és beton szerkezet" }, { id: "c", label: "Nagy római középületek (Pantheon, Colosseum)" }], correctOrder: ["a", "b", "c"], explain: "Először a görög forma, majd római technika és méret." },
    ]),
  ],
  erettsegi: [
    abcd("A Parthenón mely város Akropoliszán áll?", ["Sparta", "Róma", "Athén", "Korinthosz"], 2, "Athén jelképe a dór Parthenón."),
    { type: "open", prompt: "Nevezz meg egy-egy görög és római építészeti jelleget!", hintPoints: ["Görög: oszloprendek, templom, arány", "Római: ív, kupola, aqueduct, amfiteátrum"] },
  ],
};
