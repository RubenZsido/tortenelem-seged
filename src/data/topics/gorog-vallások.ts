import type { Topic } from "../../lib/types";
import { abcd, quiz, sec } from "./_shared";

export const gorogVallások: Topic = {
  slug: "gorog-vallások",
  title: "A görög civilizáció vallásai",
  intro: "Olümposzi istenek, mítoszok, szertartások és a vallás szerepe a polis életében.",
  blocks: [
    sec("Olümposzi panteon és mítoszok", [
      "A görögök sok istent imádtak: Zeusz a menny ura, Héra, Poszeidón, Athéné, Apollón stb.",
      "A mítoszok magyarázzák a világ keletkezését, hőstetteket (pl. Trója háborúja) és az emberi sorsot.",
      "Homérosz eposzai (Iliász, Odüsszeia) fontos vallási-kulturális források.",
    ]),
    quiz("m1", "Kvíz — Istenség", [
      abcd("Ki az olümposzi istenek királya?", ["Poszeidón", "Hadész", "Zeusz", "Hermész"], 2, "Zeusz a menny és a rend ura."),
      abcd("Hol zajlottak gyakran az isteni jóslások?", ["Delphoi", "Jeruzsálem", "Mekka", "Róma"], 0, "Delphoi Apollón szentélye — híres jóshely."),
    ]),
    sec("Szertartások és ünnepek", [
      "Áldozatok (állat, libáció), processziók, játékok az istenek tiszteletére — pl. olympiai játékok Zeusz tiszteletére.",
      "A vallás és a polis összefonódott: templomok, ünnepek közösséget erősítettek.",
      "Orákulumok (Delphoi) politikai döntéseket is befolyásoltak.",
    ]),
    quiz("m2", "Kvíz — Szertartás", [
      abcd("Mit ünnepeltek az olympiai játékok?", ["Hadúr", "Zeusz", "Dionüszosz", "Krónosz"], 1, "Az olimpia Zeusz tiszteletére szólt."),
      abcd("Mi jellemző a görög vallásra?", ["Egy Isten — szent könyv", "Sok isten, mítoszok, szertartások", "Csak császárkultusz", "Tilos minden kép"], 1, "Politeizmus, mítosz, rituális élet."),
    ]),
    quiz("end", "Záró kvíz", [
      { type: "order", prompt: "Események sorrendje (mítosz)", items: [{ id: "1", label: "Páris elragadja Helénát" }, { id: "2", label: "Trója ostromása" }, { id: "3", label: "Trójai fa — a város elesik" }], correctOrder: ["1", "2", "3"], explain: "A trójai háború mítosza — ok, ostrom, vége." },
    ]),
  ],
  erettsegi: [
    abcd("A görög vallásban mi köti össze az isteneket és az embereket?", ["Csak a király", "Mítoszok és szertartások", "Kizárólag írásos törvény", "Adófizetés"], 1, "Mítosz + rituális élet."),
    { type: "open", prompt: "Fogalmazd meg: hogyan fonódott össze a vallás és a polis Athénban!", hintPoints: ["Templomok, ünnepek", "Közösségi identitás", "Jóslás, politikai hatás"] },
  ],
};
