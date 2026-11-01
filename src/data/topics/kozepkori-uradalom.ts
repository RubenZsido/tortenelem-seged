import type { Topic } from "../../lib/types";
import { abcd, quiz, sec } from "./_shared";

export const kozepkoriUradalom: Topic = {
  slug: "kozepkori-uradalom",
  title: "Középkori uradalom",
  intro: "Uralkodó, nemes, jobbágy — az uradalom gazdasági és hatalmi szerkezete.",
  blocks: [
    sec("Uradalom felépítése", [
      "Az uradalom: ura (nemes/királyi birtok) földje, jobbágyai, szolgái; önellátó gazdaság.",
      "A jobbágy kötelező robotban dolgozik ura földjén, adót fizet; cserébe földhasználat, védelem (elméletben).",
      "A vár uradalom központja: uradalomháza, raktárak, kovács, malom.",
    ]),
    quiz("m1", "Kvíz", [
      abcd("Ki dolgozott robotban az uradalomon?", ["Csak a nemes", "Jobbágyok", "Pápa", "Kereskedők"], 1, "Robot = kötelező munka az úrnak."),
      abcd("Mi az uradalom gazdasági célja?", ["Tőzsdei spekuláció", "Önellátás + uradalom jövedelme", "Gyártermelés", "Turizmus"], 1, "Főleg mezőgazdaság, kevés piaci áru."),
    ]),
    sec("Hatalmi viszonyok", [
      "A nemes bírósági és adószedési jogokat gyakorolhat jobbágyain; a szabad jobbágyság lassan erodálódik.",
      "A templom is nagy birtokos — kolostor uradalmak.",
      "A király a legerősebb úr, de nemesek és egyház birtokai kivonják a hatalom egy részét.",
    ]),
    quiz("end", "Záró kvíz", [
      abcd("Ki NEM tipikus uradalom lakó?", ["Jobbágy", "Nemes úr", "Ipari munkás bérben", "Papi birtok"], 2, "Ipari munkás későbbi, városias korszak jellemzője."),
    ]),
  ],
  erettsegi: [
    { type: "open", prompt: "Mutasd be az uradalom gazdaságát!", hintPoints: ["Földművelés", "Robot, adó", "Kézművesek a birtokon", "Természetben fizetett adó"] },
    abcd("A robot jelentése:", ["Adó pénzben", "Kötelező munka az úrnak", "Katonai rang", "Vallási szertartás"], 1, "Robot = munkaszolgáltatás."),
  ],
};
