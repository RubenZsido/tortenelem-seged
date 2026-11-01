import type { Topic } from "../../lib/types";

export const atheniAllamszervezet: Topic = {
  slug: "atheni-allamszervezet",
  title: "Athéni államszervezet",
  intro:
    "Megismered Athén polis felépítését, a fontosabb intézményeket (agora, népgyűlés, tanács) és azt, hogyan kapcsolódtak össze a polgárság, a demokrácia és a hatalom.",
  blocks: [
    {
      kind: "section",
      heading: "A polis és az agora",
      paragraphs: [
        "Athén a klasszikus kor egyik legfontosabb görög polisa (városállama). A polis nem csak város: önálló közösség, saját törvényekkel, isteneivel és polgári közösséggel.",
        "Az agora a város központi tere, piac és közéleti tér egyszerre: itt zajlott a kereskedelem, a politikai vita és a mindennapi találkozások.",
        "A polgár (polités) részt vehetett a közügyekben; a demokrácia kibontakozásával egyre többen szereztek szót a döntésekben.",
      ],
      figures: [
        {
          src: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Agora_of_Athens_view.jpg/640px-Agora_of_Athens_view.jpg",
          alt: "Az athéni agora romjai",
          caption: "Az athéni agora — a polis közéleti központja",
          credit: "Wikimedia Commons",
          external: true,
        },
      ],
    },
    {
      kind: "quiz",
      id: "mid-1",
      title: "Ellenőrző kérdések — A polis",
      questions: [
        {
          type: "abcd",
          prompt: "Mit jelent a görög polis?",
          choices: [
            "Csak a városfalakon belüli lakótelep",
            "Önálló városállam, politikai és vallási közösség",
            "A római birodalom tartománya",
            "Kizárólag a királyi udvar",
          ],
          correct: 1,
          explain:
            "A polis önálló városállam: törvény, polgárság, vallás és katonai közösség együtt.",
        },
        {
          type: "abcd",
          prompt: "Milyen szerepe volt az agorának?",
          choices: [
            "Csak templomi áldozatok helye",
            "Katonai gyakorlótér",
            "Kereskedelem, politika és közélet tere",
            "A király magánkertje",
          ],
          correct: 2,
          explain: "Az agora a város központi tere: piac, vita, politikai élet.",
        },
      ],
    },
    {
      kind: "section",
      heading: "Intézmények: népgyűlés, tanács, tisztségviselők",
      paragraphs: [
        "Az ekklésia (népgyűlés) a teljes polgári gyűlés: itt szavaztak törvényekről, háborúról és békeről. A vitát gyakran szónokok (pl. Periklész) befolyásolták.",
        "A bulé (tanács) napi ügyeket készített elő — tagjait sorsolással választották demokrácia idején (500 fő).",
        "Az archontok és más tisztségviselők évnyi mandátummal szolgáltak; a sorsolás és a választás keveréke csökkentette a hatalom örökösödését.",
        "A stratégusokat választották, mert katonai szakértelem kellett — ők vezették a sereget (pl. Themiszoklész, Kimón).",
      ],
      figures: [
        {
          src: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Pericles_Pio-Clementino_Inv269_n2.jpg/440px-Pericles_Pio-Clementino_Inv269_n2.jpg",
          alt: "Periklész büsztje",
          caption: "Periklész — az athéni demokrácia fénykorának szónoka",
          credit: "Wikimedia Commons",
          external: true,
        },
      ],
    },
    {
      kind: "quiz",
      id: "mid-2",
      title: "Ellenőrző kérdések — Intézmények",
      questions: [
        {
          type: "abcd",
          prompt: "Mi volt az ekklésia?",
          choices: ["A 500 fős előkészítő tanács", "A teljes polgári népgyűlés", "A római szenátus", "A spartai eforoszok tanácsa"],
          correct: 1,
          explain: "Az ekklésia az athéni polgárok népgyűlése, ahol szavaztak a fontos ügyekről.",
        },
        {
          type: "abcd",
          prompt: "Hogyan kerültek be a bulé tagjai a klasszikus demokrácia idején?",
          choices: ["Örökléssel", "Sorsolással (a demosz szélesebb rétegéből)", "A király nevezte ki őket", "Vásárlással"],
          correct: 1,
          explain: "A 500 fős tanács tagjait sorsolták, hogy sok polgár részt vehessen a kormányzásban.",
        },
      ],
    },
    {
      kind: "quiz",
      id: "end",
      title: "Záró kvíz — Athéni államszervezet",
      questions: [
        {
          type: "order",
          prompt: "Állítsd sorrendbe a döntéshozatali lépéseket (elölről hátra)!",
          items: [
            { id: "a", label: "A bulé előkészíti az ügyek napirendjét" },
            { id: "b", label: "Az ekklésia megvitatja és szavaz" },
            { id: "c", label: "A tisztségviselők végrehajtják a döntést" },
          ],
          correctOrder: ["a", "b", "c"],
          explain: "Előkészítés (bulé) → népgyűlési döntés (ekklésia) → végrehajtás.",
        },
        {
          type: "abcd",
          prompt: "Kit választottak (nem sorsoltak) katonai okokból?",
          choices: ["A bulé elnökét", "A stratégusokat", "Minden archontot", "A népgyűlés háznagyát"],
          correct: 1,
          explain: "A stratégusokat választották, mert hadügyi tapasztalat kellett.",
        },
      ],
    },
  ],
  erettsegi: [
    {
      type: "abcd",
      prompt:
        "Mely állítás jellemző leginkább az athéni demokratikus államszervezetre a Kr. e. 5. században?",
      choices: [
        "A teljes lakosság egyenrangú polgár volt.",
        "A politikai részvétel kiterjedt a szabad polgárok széles rétegére, de nem mindenki számított polgárnak.",
        "Egyetlen uralkodó hozta a döntéseket.",
        "A törvényeket kizárólag a birodalom központja hozta.",
      ],
      correct: 1,
      explain:
        "Polgár a szabad athén férfi lehetett; nők, metoikoszok és rabszolgák kimaradtak — mégis széles volt a részvétel.",
    },
    {
      type: "open",
      prompt: "Fogalmazd meg röviden: milyen intézményei voltak az athéni polisnak, és milyen szerepet láttak el!",
      hintPoints: [
        "Polis, agora",
        "Ekklésia — népgyűlés, szavazás",
        "Bulé — 500 fős tanács, előkészítés",
        "Tisztségviselők: archontok, stratégusok",
        "Sorsolás vs választás szerepe",
      ],
    },
  ],
};
