import type { Topic } from "../../lib/types";
import { abcd, quiz, sec } from "./_shared";

export const zsidóMonoteizmus: Topic = {
  slug: "zsidó-monoteizmus",
  title: "Zsidó monoteizmus",
  intro: "Az Ószövetség Isten-képe, a szövetség, a Tórá és a zsidó vallás alapelvei.",
  blocks: [
    sec("Egy Isten és a szövetség", [
      "A zsidóság monoteista: egyetlen Isten teremtette a világot és választotta ki a népet.",
      "Ábrahámmal, Mózeszel kötött szövetség: hűség az Istenhez, Törvény (Tóra) betartása.",
      "A Tízparancsolat etikai és vallási alap; a szombat (sabat) pihenőnap.",
    ]),
    quiz("m1", "Kvíz — Alapok", [
      abcd("Mi a monoteizmus?", ["Sok isten imádata", "Egy Isten imádata", "Természetimádás", "Császárimádás"], 1, "Mono = egy, teosz = isten."),
      abcd("Ki vitte ki a zsidókat Egyiptomból a hagyomány szerint?", ["Dávid", "Mózes", "Salamon", "Herodes"], 1, "Mózes — kivonulás, Tóra."),
    ]),
    sec("Templom, szent hely, sz diaspora", [
      "Jeruzsálemi templom a vallás központja (pusztulás Kr. u. 70); imádság, áldozat.",
      "A diaszpóra: a zsidó közösségek szétszóródnak a Mediterráneumban és Ázsiában.",
      "A rabinikus hagyomány erősödik a templom elvesztése után — Tóra tanulmányozása, zsinagóga.",
    ], [{ src: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Westernwall1.jpg/640px-Westernwall1.jpg", alt: "Nyugati fal", caption: "Jeruzsálem — a templomhegy maradványai", credit: "Wikimedia", external: true }]),
    quiz("end", "Záró kvíz", [
      abcd("Mi a Tóra?", ["Görög eposz", "Isten törvénye és tanítása", "Római joggyűjtemény", "Koran"], 1, "A héber Biblia tanító részei — alap a zsidóságnak."),
      { type: "order", prompt: "Sorrend: szövetség története (egyszerűsítve)", items: [{ id: "a", label: "Ábrahám — szövetség kezdete" }, { id: "b", label: "Mózes — kivonulás, Törvény" }, { id: "c", label: "Dávid királysága, Jeruzsálem" }], correctOrder: ["a", "b", "c"], explain: "Bibliai sorrend: ősatyák → kivonulás → királyság." },
    ]),
  ],
  erettsegi: [
    abcd("Mi NEM jellemző a zsidó vallásra?", ["Szombat", "Több isten hivatalos imádata", "Körülmetélés (fiúknál)", "Kóser étkezés"], 1, "Monoteizmus — egy Isten."),
    { type: "open", prompt: "Mi a szövetség gondolata a zsidó vallásban?", hintPoints: ["Isten és nép kapcsola", "Törvény betartása", "Kiválasztottság, felelősség"] },
  ],
};
