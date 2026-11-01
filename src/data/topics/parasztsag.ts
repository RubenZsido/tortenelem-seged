import type { Topic } from "../../lib/types";
import { abcd, quiz, sec } from "./_shared";

export const parasztsag: Topic = {
  slug: "parasztsag",
  title: "Parasztság világa",
  intro: "Jobbágyok mindennapjai, adók, termények és a falusi közösség.",
  blocks: [
    sec("Mindennapok", [
      "A parasztok (jobbágyok) napját munka tölti: szántás, vetés, aratás, állattartás.",
      "Fizetésük: saját telkükön termelhetnek, de adó és robot terheli őket.",
      "Lakás: faház, agyag, nád; étrend: kenyér, zab, hüvelyesek, kevés hús.",
    ]),
    quiz("m1", "Kvíz", [
      abcd("Mi terhelte leginkább a jobbágyot?", ["Választójog", "Robot és adó", "Katonai rang", "Kereskedelmi monopólium"], 1, "Robot + adó — gazdasági kényszer."),
      abcd("Hol élt a lakosság többsége középkorban?", ["Városban", "Falun, uradalmakon", "Kolostorban", "Tengeren"], 1, "Agrár társadalom — falusi élet."),
    ]),
    sec("Közösség és lázadások", [
      "A falu közösségi szokásai: közös legelő, malom, templom.",
      "Adóemelés, rossz termés → parasztlázadások (pl. Anglia 1381, Németország 1524–25).",
      "A jobbágyok jogi helyzete országonként eltér, de általában alárendeltek.",
    ]),
    quiz("end", "Záró kvíz", [
      { type: "order", prompt: "Évszakonkénti munka sorrend (tipikus)", items: [{ id: "a", label: "Tavaszi szántás, vetés" }, { id: "b", label: "Nyári gondozás, kaszálás" }, { id: "c", label: "Őszi aratás, betakarítás" }], correctOrder: ["a", "b", "c"], explain: "Mezőgazdasági év ciklusa." },
    ]),
  ],
  erettsegi: [
    abcd("A parasztság jellemző adóformája:", ["Tőzsdei jutalék", "Természetben fizetett adó", "Vám", "Levelezési illeték"], 1, "Gabona, bor, stb. — természetben."),
    { type: "open", prompt: "Hogyan nézett ki egy jobbágy napja?", hintPoints: ["Robot az ur földjén", "Saját telken munka", "Adó, templom", "Kevés szabadidő"] },
  ],
};
