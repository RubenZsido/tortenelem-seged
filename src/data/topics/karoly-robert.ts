import type { Topic } from "../../lib/types";
import { abcd, quiz, sec } from "./_shared";

export const karolyRobert: Topic = {
  slug: "karoly-robert",
  title: "Anjou Károly Róbert",
  intro: "1310 után trónra jut, gazdasági stabilizálás, aranyforint, nemesi lázadások leverése.",
  blocks: [
    sec("Hatalom megszerzése", [
      "Anjou-házból; hosszú trónviszály után 1310 körül stabilizálódik a hatalma.",
      "A csőcselék király elleni mozgalmait leveri; erős királyi központ.",
      "Kül- és belpolitika: nápolyi kapcsolat, nemesi békítés.",
    ], [{ src: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/King_Charles_Robert_of_Hungary_%28Charles_I_of_Hungary%29_%28from_Hungarian_Kings%29.jpg/440px-King_Charles_Robert_of_Hungary_%28Charles_I_of_Hungary%29_%28from_Hungarian_Kings%29.jpg", alt: "Károly Róbert", caption: "Károly Róbert", credit: "Wikimedia", external: true }]),
    quiz("m1", "Kvíz", [
      abcd("Melyik dinasztia tagja?", ["Árpád", "Anjou", "Habsburg", "Jagielló"], 1, "Anjou — Capet side branch."),
      abcd("Mit vezetett be a pénzügyben?", ["Euro", "Aranyforint", "Bitcoin", "Római sestertius"], 1, "Stabil aranypénz — kereskedelem."),
    ]),
    sec("Gazdaság", [
      "Bányák (arany, réz) — Károly bányakirályi joga; kincstár bevétele nő.",
      "Mezőgazdaság fellendülése; külkereskedelem a városokkal.",
      "A rendi ellensúly megmarad, de a király pénzügyileg erős.",
    ]),
    quiz("end", "Záró kvíz", [
      { type: "order", prompt: "Károly Róbert kora", items: [{ id: "1", label: "Trónviszály" }, { id: "2", label: "Hatalom stabilizálása" }, { id: "3", label: "Aranyforint, bányák" }], correctOrder: ["1", "2", "3"], explain: "Viszály → stabil király → gazdaság." },
    ]),
  ],
  erettsegi: [
    abcd("Károly Róbert gazdasági lépése:", ["Robot eltörlése", "Arany bányák és forint", "Tatár szövetség", "Török vazalluság"], 1, "Bányák + stabil pénz."),
    { type: "open", prompt: "Miért nevezik sikeres királynak?", hintPoints: ["Trón stabilizálás", "Pénzügy", "Rendi béke", "Bányák"] },
  ],
};
