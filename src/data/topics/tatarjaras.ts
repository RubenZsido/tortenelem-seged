import type { Topic } from "../../lib/types";
import { abcd, quiz, sec } from "./_shared";

export const tatarjaras: Topic = {
  slug: "tatarjaras",
  title: "Tatárjárás",
  intro: "Batu kán inváziója 1241–1242, Mohi, pusztítás és következmények Magyarországon.",
  blocks: [
    sec("Invázió", [
      "A mongol-tatár birodalom nyugati hadjárata: Lengyelország, Magyarország, Horvátorság.",
      "1241 április: Mohi — magyar sereg veresége; fejedelmek, király menekül.",
      "Városok és falvak pusztítása, lakosság lemészárlása vagy elhurcolása.",
    ]),
    quiz("m1", "Kvíz", [
      abcd("Ki vezette a tatár sereget?", ["Attila", "Batu kán", "Dzsingisz", "Napóleon"], 1, "Batu kán — nyugati hadjárat."),
      abcd("Hol veszített a magyar sereg?", ["Marathon", "Mohinál", "Waterloon", "Gettýsburgön"], 1, "Mohi — 1241."),
    ]),
    sec("Következmények", [
      "1242: Nagy Batu halála miatt a tatárok visszavonulnak — Magyarország túlél.",
      "Népességcsökkenés, gazdasági összeomlás; erődített települések fontossága nő.",
      "IV. Béla újjáépítése; később a tatárok Kelet-Európában maradnak (Arany Horde).",
    ], [{ src: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Mongol_Empire_map.svg/640px-Mongol_Empire_map.svg.png", alt: "Mongol birodalom", caption: "A mongol birodalom kiterjedése", credit: "Wikimedia", external: true }]),
    quiz("end", "Záró kvíz", [
      { type: "order", prompt: "Események", items: [{ id: "1", label: "Tatár behatolás" }, { id: "2", label: "Mohi csata" }, { id: "3", label: "Visszavonulás 1242" }], correctOrder: ["1", "2", "3"], explain: "Behatolás → vereség → visszavonulás." },
    ]),
  ],
  erettsegi: [
    abcd("Miért vonultak vissza a tatárok 1242-ben?", ["Magyar győzelem", "Nagy Batu haláma — új kán választás", "Békeszerződés Istvánnel", "Török támadás"], 1, "A nagykán halála miatt vissza kellett térniük."),
    { type: "open", prompt: "Milyen következményei voltak a tatárjárásnak?", hintPoints: ["Népesség", "Várak", "Királyi hatalom", "Gazdaság"] },
  ],
};
