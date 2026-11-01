import type { Topic } from "../../lib/types";
import { abcd, quiz, sec } from "./_shared";

export const hunyadiDiadala: Topic = {
  slug: "hunyadi-diadala",
  title: "Hunyadi diadala",
  intro: "János hunyadi török elleni harcai — Nándorfehérvár 1456, a késő középkori magyar védvonal.",
  blocks: [
    sec("Hunyadi János", [
      "Nemesi család; katonai tehetség — török háborúk vezetője, nádor, kormányzó.",
      "1456: Nándorfehérvár ostromának feltartóztatása — Szent István napján győzelem.",
      "A harangszó emléke (délután 1 óra) — hagyomány.",
    ], [{ src: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/John_Hunyadi%2C_Hungary%2C_15th_century%2C_chromolithograph_by_Andreas_Schetsky%2C_Leipzig%2C_1880.jpg/440px-John_Hunyadi%2C_Hungary%2C_15th_century%2C_chromolithograph_by_Andreas_Schetsky%2C_Leipzig%2C_1880.jpg", alt: "Hunyadi János", caption: "Hunyadi János", credit: "Wikimedia", external: true }]),
    quiz("m1", "Kvíz", [
      abcd("1456-ban hol aratott diadal?", ["Mohi", "Nándorfehérvár", "Mohács", "Buda"], 1, "Nándorfehérvár — török ostrom visszaverve."),
      abcd("Hunyadi titulusa gyakran:", ["Pápa", "Nádor / katonai vezető", "Kalifa", "Eforosz"], 1, "Nádor — ország másodja, hadvezér."),
    ]),
    sec("Jelentőség", [
      "A török előrenyomás lassítása — évtizedekig védett keresztény Európa.",
      "Hunyadi fia: Mátyás király; család megalapozza a reneszánsz udvar.",
      "A diadal nem végleges — Mohács 1526 még előttünk áll a tananyagban később.",
    ]),
    quiz("end", "Záró kvíz", [
      { type: "order", prompt: "Hunyadi életút (vázlat)", items: [{ id: "a", label: "Török háborúkban kitűnés" }, { id: "b", label: "Nándorfehérvár 1456" }, { id: "c", label: "Mátyás trónöröklése előkészítése" }], correctOrder: ["a", "b", "c"], explain: "Hadvezér → diadal → utódok." },
    ]),
  ],
  erettsegi: [
    abcd("A nándorfehérvári diadal éve:", ["1241", "1456", "1526", "1849"], 1, "1456 — emlékezetes."),
    { type: "open", prompt: "Miért fontos Hunyadi János a magyar történelemben?", hintPoints: ["Török elleni küzdelem", "Nándorfehérvár", "Nádor", "Mátyás apja"] },
  ],
};
