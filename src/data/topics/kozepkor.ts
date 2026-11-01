import type { Topic } from "../../lib/types";
import { abcd, quiz, sec } from "./_shared";

export const kozepkor: Topic = {
  slug: "kozepkor",
  title: "Középkor",
  intro: "A középkor kezdete, feudális rend, keresztes hadjáratok és a mindennapi élet keretei.",
  blocks: [
    sec("Korszak határai és jellemzők", [
      "Középkor: kb. Kr. u. 5–15. század — a római birodalom nyugati felbomlása után Európában.",
      "Feudális rend: urak, hűbér, jobbágyok; gyenge központi hatalom, helyi urak erősebbek.",
      "Egyház központi szerep: pápa, püspökök, kolostorok — kultúra, oktatás, hit.",
    ]),
    quiz("m1", "Kvíz — Keret", [
      abcd("Mi jellemző a feudális rendre?", ["Erős birodalmi központ mindenütt", "Hűbéri kapcsolat ur és vazallus között", "Demokratikus népgyűlések", "Ipari forradalom"], 1, "Földért hűség és katonai szolgálat."),
      abcd("Mi indította el a keresztes hadjáratokat (1095)?", ["Athéni demokrácia", "A pápa felhívása — Szentföld", "Mohamed", "Renászansz"], 1, "II. Urban pápa — Jeruzsálem felszabadítása."),
    ]),
    sec("Mindennapok és társadalom", [
      "Agrár gazdaság: jobbágyok dolgoznak uradalmakon; kereskedelem lassan erősödik a városokban.",
      "A klímaváltozás (középkori meleg időszak vége) és járványok (fekete halál 1347–) súlyosan érintik Európát.",
      "Lovagi kultúra, várak, címeres nemesség — de a parasztok adják a lakosság többségét.",
    ]),
    quiz("end", "Záró kvíz", [
      { type: "order", prompt: "Sorrend: keresztes mozgalom", items: [{ id: "1", label: "II. Urban felhívása (1095)" }, { id: "2", label: "Első keresztes hadjárat — Jeruzsálem 1099" }, { id: "3", label: "Későbbi hadjáratok és keresztes államok" }], correctOrder: ["1", "2", "3"], explain: "Felhívás → első siker → további hadjáratok." },
    ]),
  ],
  erettsegi: [
    abcd("Mi NEM jellemző a korai középkorra?", ["Feudalizmus", "Erős római császár minden nyugati tartományban", "Egyházi befolyás", "Jobbágyföldesítés"], 1, "Nyugaton nincs erős császár — feudális széttagoltság."),
    { type: "open", prompt: "Mi a feudalizmus lényege?", hintPoints: ["Föld (benefícium)", "Hűbér, vazallus", "Katonai szolgálat", "Jobbágyok munkája"] },
  ],
};
