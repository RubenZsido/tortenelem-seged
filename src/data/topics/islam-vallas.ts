import type { Topic } from "../../lib/types";
import { abcd, quiz, sec } from "./_shared";

export const islamVallas: Topic = {
  slug: "islam-vallas",
  title: "Iszlám vallás",
  intro: "Mohamed tanítása, az iszlám alapelvei, a Korán és az iszlám civilizáció kibontakozása.",
  blocks: [
    sec("Mohamed és a Korán", [
      "Mohamed (570–632): Próféta Mekkában és Medinában; Isten (Allah) kinyilatkoztatásait hirdeti.",
      "A Korán szent könyv — arab nyelven; hit, imádság, erkölcs, jog.",
      "Hidzsra (622): Medinába költözés — iszlám közösség (umma) alapja, iszlám időszámítás kezdete.",
    ], [{ src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Map_of_expansion_of_Caliphate.svg/640px-Map_of_expansion_of_Caliphate.svg.png", alt: "Kalifátus terjeszkedése", caption: "Az iszlám korai terjeszkedése", credit: "Wikimedia", external: true }]),
    quiz("m1", "Kvíz — Alapok", [
      abcd("Mit jelent az 'iszlám'?", ["Háború", "Alávetés (Allah akaratának)", "Kereskedelem", "Böjöt"], 1, "Muszlim = aki aláveti magát Istennek."),
      abcd("Mi a hidzsra?", ["Mohamed mekkai születése", "Medinába vándorlás", "Keresztes hadjárat", "Koran lezárása"], 1, "622 — iszlám naptár kezdete."),
    ]),
    sec("Öt pillér és terjeszkedés", [
      "1) Tanúságtétel 2) Imádság naponta ötször 3) Zakát (adó a szegényeknek) 4) Ramadán böjt 5) Zarándoklat (Hadzs) Mekkába.",
      "Kalifák vezetésével gyors terjeszkedés: Közel-Kelet, Ész-Afrika, Spanyolország részei.",
      "Bagdad, Cordoba — tudomány, fordítások, kereskedelem (aranykor).",
    ]),
    quiz("m2", "Kvíz — Pillérek", [
      abcd("Hányszor imádkoznak naponta a muszlimok?", ["Egyszer", "Háromszor", "Ötször", "Tízször"], 2, "Az öt napi ima az iszlám egyik pillére."),
      abcd("Hova zarándokolnak a muszlimok?", ["Róma", "Jeruzsálem", "Mekka", "Delhi"], 2, "A Kaba — Mekka."),
    ]),
    quiz("end", "Záró kvíz", [
      { type: "order", prompt: "Sorrend: iszlám kialakulása", items: [{ id: "a", label: "Mohamed kinyilatkoztatásai Mekkában" }, { id: "b", label: "Hidzsra Medinába" }, { id: "c", label: "Kalifátus és terjeszkedés" }], correctOrder: ["a", "b", "c"], explain: "Próféta → közösség Medinában → kalifák birodalma." },
    ]),
  ],
  erettsegi: [
    abcd("Mi NEM az iszlám öt pillére?", ["Zakát", "Hadzs", "Körülmetélés minden muszlimnál kötelező pillér", "Böjt ramadán alatt"], 2, "A körülmetélés szokás, de nem az öt pillér egyike."),
    { type: "open", prompt: "Sorold fel az iszlám öt pillérét röviden!", hintPoints: ["Tanúságtétel", "Imádság", "Zakát", "Böjt", "Hadzs"] },
  ],
};
