import type { Topic } from "../../lib/types";
import { abcd, quiz, sec } from "./_shared";

export const keresztenyseg: Topic = {
  slug: "keresztenyseg",
  title: "Kereszténység",
  intro: "Jézus tanítása, a korai egyház, a keresztény hit alapjai és elterjedése a Római Birodalomban.",
  blocks: [
    sec("Jézus és az evangélium", [
      "Jézus a palesztinai Júdeában tanít Kr. u. 1. század elején: Isten országa, szeretet, megbocsátás.",
      "Keresztre feszítése és feltámadása hite a keresztények számára — üdvösség.",
      "Az evangéliumok (Máté, Márk, Lukács, János) tanításának forrásai.",
    ]),
    quiz("m1", "Kvíz — Kezdetek", [
      abcd("Hol tanított leginkább Jézus?", ["Görögország", "Palesztina / Júdea", "Róma", "Egyiptom"], 1, "A római uralom alatti Júdea."),
      abcd("Mi a kereszténység központi hite Jézussal kapcsolatban?", ["Csak erkölcsi tanító", "Messiás, feltámadás", "Filozófus", "Katonai vezér"], 1, "Krisztus = Messiás, feltámadás — üdvösség."),
    ]),
    sec("Korai egyház és elterjedés", [
      "Pál apostol missziói: a kereszténység nem csak zsidóknak szól — hellén és római világ.",
      "Üldöztetések, majd Konstantin támogatása (4. század): Milvai bridzs, edicta — szabadság.",
      "Theodosziusz: államvallás Kr. u. 392 körül; egyházszervezet: püspökök, zsinatok (pl. Nikai).",
    ], [{ src: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Spread_of_Christianity_to_AD_600.svg/640px-Spread_of_Christianity_to_AD_600.svg.png", alt: "Kereszténység terjedése", caption: "A kereszténység elterjedése Kr. u. 600-ig", credit: "Wikimedia", external: true }]),
    quiz("end", "Záró kvíz", [
      { type: "order", prompt: "Sorrend: kereszténység a birodalomban", items: [{ id: "1", label: "Üldöztetések" }, { id: "2", label: "Konstantin — türelmediktum" }, { id: "3", label: "Államvallás Theodosziusszal" }], correctOrder: ["1", "2", "3"], explain: "Üldözés → legalizálás → államvallás." },
      abcd("Ki tette államvallássá a kereszténységet?", ["Néró", "Theodosziusz", "Augustus", "Diocletianus"], 1, "Theodosziusz — a 4. század végén."),
    ]),
  ],
  erettsegi: [
    abcd("Mit jelent a 'keresztény' szó eredetileg?", ["Római polgár", "Krisztushoz tartozó", "Görög filozófus", "Zsidó pap"], 1, "Christos = Messiás/Krisztus."),
    { type: "open", prompt: "Hogyan terjedt el a kereszténység a Római Birodalomban?", hintPoints: ["Apostoli misszió", "Üldözés és kitartás", "Konstantin, egyház támogatása", "Államvallás"] },
  ],
};
