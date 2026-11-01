import type { ContentBlock } from "../../lib/types";
import { abcd, match, multi, quiz, truefalse } from "./_shared";

/** end2–end4 záró gyakorló blokkok témakörönként (a meglévő Záró kvíz után) */
const bySlug: Record<string, ContentBlock[]> = {
  "demokracia-vilaga": [
    quiz("end2", "Gyakorló kvíz — Demokrácia", [
      abcd("Ki vezette be a demók rendszerét?", ["Periklész", "Kleiszthenész", "Kimón", "Xerxész"], 1, "Kleiszthenész — lakhely szerinti kerületek."),
      abcd("Mi volt a díazma?", ["Adó", "Juttatás a szavazáshoz", "Büntetés", "Ostrakon"], 1, "Periklész — széles részvétel."),
      abcd("Spartával szemben Athén:", ["Oligarchia dominált", "Népgyűlés és demokrácia", "Persa satrapa", "Római köztársaság"], 1, "Athén demokrácia vs spartai állam."),
      { type: "order", prompt: "Reformok", items: [{ id: "1", label: "Szolón" }, { id: "2", label: "Kleiszthenész" }, { id: "3", label: "Periklész" }], correctOrder: ["1", "2", "3"], explain: "Fokozatos demokratizálódás." },
    ]),
    quiz("end3", "Vegyes feladatok", [
      truefalse("Az ostrakizmus 10 évre száműzhetett politikust.", true, "Egyeduralom elleni eszköz."),
      truefalse("Minden athéni lakó szavazhatott az ekklésiában.", false, "Csak polgár — nem nő, metoikosz, rabszolga."),
      match("Párosítsd!", [{ id: "l1", label: "Demokrácia" }, { id: "l2", label: "Ostrakizmus" }], [{ id: "r1", label: "Nép uralma" }, { id: "r2", label: "Száműzetés szavazással" }], { l1: "r1", l2: "r2" }, "Alapfogalmak."),
      multi("Melyek igazak az athéni demokráciára?", ["Demók", "Minden lakó polgár", "Ostrakizmus", "Sparta azonos rendszer"], [0, 2], "Demók és ostrakizmus — nem teljes egyenlőség."),
    ]),
    quiz("end4", "Kihívás", [
      abcd("Melyik NEM Kleiszthenész reformja?", ["Demók", "Ostrakizmus", "Aranyforint", "Lakhely szerinti tagozás"], 2, "Aranyforint — Károly Róbert kora."),
      abcd("Periklész korszakában mi erősödött?", ["Haditengerészet és kultúra", "Spartai eforoszok", "Persa birodalom", "Római császárság"], 0, "Fénykor — Parthenón, flotta."),
      { type: "order", prompt: "Athén vs Sparta", items: [{ id: "a", label: "Athén: népgyűlés" }, { id: "b", label: "Sparta: két király" }], correctOrder: ["a", "b"], explain: "Összehasonlító sorrend." },
      match("Kapcsolók", [{ id: "x1", label: "Démosz" }, { id: "x2", label: "Kratosz" }], [{ id: "y1", label: "Nép" }, { id: "y2", label: "Hatalom" }], { x1: "y1", x2: "y2" }, "Demokrácia szóelemek."),
    ]),
  ],
  "aranybulla": [
    quiz("end2", "Gyakorló kvíz — Aranybulla", [
      abcd("Az Aranybulla éve:", ["1000", "1222", "1526", "1848"], 1, "1222 — II. András."),
      abcd("Ki adta ki?", ["István", "II. András", "Mátyás", "Béla"], 1, "András — nemesi lázadások után."),
      abcd("Mi a congregatio?", ["Templomi ünnep", "Éves nemesi gyűlés", "Tatár adó", "Városi piac"], 1, "Sérelmek elmondása."),
      { type: "order", prompt: "Folyamat", items: [{ id: "1", label: "Nemesi lázadás" }, { id: "2", label: "Aranybulla" }, { id: "3", label: "Rendi ellensúly" }], correctOrder: ["1", "2", "3"], explain: "Ok → dokumentum → következmény." },
    ]),
    quiz("end3", "Vegyes feladatok", [
      truefalse("Az Aranybulla a nemességnek adott jogokat rögzítette.", true, "Nemesi privilégiumok."),
      truefalse("A jobbágyok kapták a legtöbb új jogot.", false, "Nemesség — nem jobbágy."),
      match("Párosítsd!", [{ id: "l1", label: "Ius resistendi" }, { id: "l2", label: "Adómentesség" }], [{ id: "r1", label: "Ellenállás joga" }, { id: "r2", label: "Nemesi kiváltság" }], { l1: "r1", l2: "r2" }, "Bullajogok."),
      multi("Aranybulla-jellegű elemek:", ["Congregatio", "Ius resistendi", "Robot törlése mindenkinek", "Bírósági jogok"], [0, 1, 3], "Rendi jogok — robot maradt."),
    ]),
    quiz("end4", "Kihívás", [
      abcd("Melyik NEM igaz?", ["Limitálja a királyt", "1222-ben", "Jobbágy szabad ember lett", "Nemesi adómentesség"], 2, "Jobbágyok nem a bulla fő célcsoportja."),
      abcd("Mi erősödött hosszú távon?", ["Rendi állam jellege", "Tatár birodalom", "Spartai eforoszok", "Görög polis"], 0, "Király vs nemesség viszony alapja."),
      { type: "order", prompt: "Dokumentumok", items: [{ id: "a", label: "Szent István törvényei" }, { id: "b", label: "Aranybulla" }], correctOrder: ["a", "b"], explain: "Korábbi királyi hatalom → rendi szerződés jelleg." },
      match("Kapcsolók", [{ id: "x1", label: "II. András" }, { id: "x2", label: "1222" }], [{ id: "y1", label: "Király" }, { id: "y2", label: "Év" }], { x1: "y1", x2: "y2" }, "Alapadatok."),
    ]),
  ],
  "atheni-allamszervezet": [
    quiz("end2", "Gyakorló kvíz — Athéni állam", [
      abcd("Mit jelent a görög polis?", ["Csak lakótelep a falakon belül", "Önálló városállam és közösség", "Római tartomány", "Királyi udvar"], 1, "A polis: törvény, polgárság, vallás együtt."),
      abcd("Mi volt az agora szerepe?", ["Katonai gyakorlótér", "Közéleti tér és piac", "Csak templomudvar", "Tatár tábor"], 1, "Politika, kereskedelem, vita — központi tér."),
      abcd("Ki a polités?", ["Minden lakó", "Athéni polgár", "Persa satrapa", "Római légionárius"], 1, "Polgár — részvétel a közügyekben (jog szerint)."),
      { type: "order", prompt: "Intézmények", items: [{ id: "1", label: "Agora — vita, piac" }, { id: "2", label: "Ekklésia — népgyűlés" }, { id: "3", label: "Boulé — tanács előkészítés" }], correctOrder: ["1", "2", "3"], explain: "Közélet → döntés → előkészítő szerv." },
    ]),
    quiz("end3", "Vegyes feladatok", [
      truefalse("Az agora csak vallási szertartások helye volt.", false, "Gazdasági és politikai funkció is — piac, vita."),
      truefalse("A polis önálló városállam volt saját törvényekkel.", true, "Nem egyszerű település — politikai egység."),
      match("Párosítsd!", [{ id: "l1", label: "Ekklésia" }, { id: "l2", label: "Agora" }, { id: "l3", label: "Polités" }], [{ id: "r1", label: "Népgyűlés" }, { id: "r2", label: "Központi tér" }, { id: "r3", label: "Polgár" }], { l1: "r1", l2: "r2", l3: "r3" }, "Athéni intézmények."),
      multi("Melyek jellemzőek az athéni polisra?", ["Agora", "Polgárság", "Persa satrapa", "Saját törvények"], [0, 1, 3], "Polis = önállóság + polgárok + közéleti tér."),
    ]),
    quiz("end4", "Kihívás", [
      abcd("Melyik NEM athéni államszervezeti elem?", ["Népgyűlés", "Tanács (boulé)", "Spartai eforoszok", "Agora"], 2, "Az eforosz — spartai intézmény."),
      abcd("Hol zajlott a politikai vita és a piac?", ["Akropolisz szentélyben", "Agorán", "Delphoi jóshelyen", "Római Forumon"], 1, "Az agora a polis szíve."),
      { type: "order", prompt: "Döntéshozatal (egyszerűsítve)", items: [{ id: "a", label: "Boulé előterjeszt" }, { id: "b", label: "Ekklésia szavaz" }], correctOrder: ["a", "b"], explain: "Előkészítés → népgyűlési döntés." },
      match("Kapcsolók", [{ id: "x1", label: "Polis" }, { id: "x2", label: "Demokrácia kibontakozása" }], [{ id: "y1", label: "Városállam" }, { id: "y2", label: "Több polgár szerepel a döntésben" }], { x1: "y1", x2: "y2" }, "Athén klasszikus kora."),
    ]),
  ],
  "gorog-epiteszet": [
    quiz("end2", "Gyakorló kvíz — Építészet", [
      abcd("Melyik görög oszloprend a legegyszerűbb fejű?", ["Ion", "Dór", "Korinthoszi", "Gót"], 1, "Dór — masszív, kevés dísz."),
      abcd("Hol van a templom szentélye (naosz)?", ["A pronaosz előcsarnokában", "A naosz belsejében", "Az aqueduct alatt", "A colosseumban"], 1, "A naosz — istenség szobra, szent hely."),
      abcd("Mi jellemző a római építészetre?", ["Csak fa épület", "Ív, boltív, beton", "Tilos a kupola", "Nincs aqueduct"], 1, "Technikai újítások — nagy belső terek."),
      { type: "order", prompt: "Hatás", items: [{ id: "1", label: "Görög oszloprendek és templom" }, { id: "2", label: "Római ív és beton" }, { id: "3", label: "Nagy középületek (Pantheon)" }], correctOrder: ["1", "2", "3"], explain: "Forma → technika → méret." },
    ]),
    quiz("end3", "Vegyes feladatok", [
      truefalse("A Parthenón dór oszloprendű templom Athénban.", true, "Az Akropolisz jelképe."),
      truefalse("Az aqueduct városi vízellátást szolgált.", true, "Vízvezeték — gyakorlati római építmény."),
      match("Párosítsd!", [{ id: "l1", label: "Ion" }, { id: "l2", label: "Korinthoszi" }], [{ id: "r1", label: "Voluta fej" }, { id: "r2", label: "Leveles dísz" }], { l1: "r1", l2: "r2" }, "Oszloprendek."),
      multi("Római építészeti elemek:", ["Amfiteátrum", "Aqueduct", "Csak dór oszlop, ív nélkül", "Forum"], [0, 1, 3], "Szórakozás, víz, közélet — római város."),
    ]),
    quiz("end4", "Kihívás", [
      abcd("A Parthenón mely városban áll?", ["Sparta", "Róma", "Athén", "Korinthosz"], 2, "Athén — Akropolisz."),
      abcd("Melyik NEM görög oszloprend?", ["Dór", "Ion", "Korinthoszi", "Csúcsíves gót"], 3, "Gótika középkori stílus."),
      { type: "order", prompt: "Templomrészek", items: [{ id: "a", label: "Pronaosz — előcsarnok" }, { id: "b", label: "Naosz — szentély" }], correctOrder: ["a", "b"], explain: "Belépés → szent tér." },
      match("Kapcsolók", [{ id: "x1", label: "Colosseum" }, { id: "x2", label: "Pantheon" }], [{ id: "y1", label: "Gladiátorjáték" }, { id: "y2", label: "Kupola, templom jelleg" }], { x1: "y1", x2: "y2" }, "Római épületek."),
    ]),
  ],
  "gorog-vallások": [
    quiz("end2", "Gyakorló kvíz — Görög vallás", [
      abcd("Ki az olümposzi istenek királya?", ["Poszeidón", "Hadész", "Zeusz", "Hermész"], 2, "Zeusz — menny és rend."),
      abcd("Hol volt híres Apollón-jóshely?", ["Delphoi", "Jeruzsálem", "Mekka", "Róma"], 0, "Delphoi orákulum — politikai hatás."),
      abcd("Mit ünnepeltek az olympiai játékok?", ["Hadúr", "Zeuszt", "Dionüszoszt", "Krónuszt"], 1, "Zeusz tiszteletére — négyévente."),
      { type: "order", prompt: "Trójai mítosz (vázlat)", items: [{ id: "1", label: "Heléna elragadása" }, { id: "2", label: "Trója ostrom" }, { id: "3", label: "Trójai fa — elesik a város" }], correctOrder: ["1", "2", "3"], explain: "Ok → háború → vége." },
    ]),
    quiz("end3", "Vegyes feladatok", [
      truefalse("A görög vallás politeista — sok isten.", true, "Olümposzi panteon, mítoszok."),
      truefalse("Homérosz Iliásza csak gazdasági útmutató.", false, "Eposz — hősök, istenek, mítosz."),
      match("Párosítsd!", [{ id: "l1", label: "Poszeidón" }, { id: "l2", label: "Athéné" }, { id: "l3", label: "Apollón" }], [{ id: "r1", label: "Tenger" }, { id: "r2", label: "Bölcsesség, város" }, { id: "r3", label: "Jóslás, művészet" }], { l1: "r1", l2: "r2", l3: "r3" }, "Istenek és szférák."),
      multi("Görög vallás jellemzői:", ["Mítoszok", "Szertartások, áldozat", "Egy Isten, Korán", "Ünnepek, játékok"], [0, 1, 3], "Politeizmus + rituális élet — nem monoteizmus."),
    ]),
    quiz("end4", "Kihívás", [
      abcd("Mi köti össze isteneket és embereket?", ["Csak adó", "Mítoszok és szertartások", "Tilos minden kép", "Csak király imádkozik"], 1, "Közös mítikus és rituális világ."),
      abcd("Melyik NEM görög isten?", ["Zeusz", "Allah", "Héra", "Poszeidón"], 1, "Allah — iszlám Isten neve."),
      { type: "order", prompt: "Szertartás", items: [{ id: "a", label: "Áldozat, libáció" }, { id: "b", label: "Processzió, ünnep" }], correctOrder: ["a", "b"], explain: "Rituális cselek → közösségi ünnep." },
      match("Kapcsolók", [{ id: "x1", label: "Iliász" }, { id: "x2", label: "Odüsszeia" }], [{ id: "y1", label: "Trója háború" }, { id: "y2", label: "Hazaúti kaland" }], { x1: "y1", x2: "y2" }, "Homérosz eposzai."),
    ]),
  ],
  "islam-vallas": [
    quiz("end2", "Gyakorló kvíz — Iszlám", [
      abcd("Mit jelent az iszlám szó?", ["Háború", "Alávetés Allah akaratának", "Kereskedelem", "Zarándoklat"], 1, "Muszlim = aki aláveti magát Istennek."),
      abcd("Mi a hidzsra?", ["Mohamed születése", "622: Medinába költözés", "Koran lezárása", "Keresztes hadjárat"], 1, "Iszlám időszámítás kezdete."),
      abcd("Hányszor imádkoznak naponta?", ["Egyszer", "Háromszor", "Ötször", "Tízször"], 2, "Az ima az öt pillér egyike."),
      { type: "order", prompt: "Kialakulás", items: [{ id: "1", label: "Kinyilatkoztatások Mekkában" }, { id: "2", label: "Hidzsra Medinába" }, { id: "3", label: "Kalifátus, terjeszkedés" }], correctOrder: ["1", "2", "3"], explain: "Próféta → umma → birodalom." },
    ]),
    quiz("end3", "Vegyes feladatok", [
      truefalse("A Korán az iszlám szent könyve.", true, "Allah kinyilatkoztatásai arab nyelven."),
      truefalse("A Hadzs zarándoklat Jeruzsálembe szól.", false, "Mekka — a Kaba."),
      match("Párosítsd!", [{ id: "l1", label: "Zakát" }, { id: "l2", label: "Ramadán" }, { id: "l3", label: "Sahada" }], [{ id: "r1", label: "Adó a szegényeknek" }, { id: "r2", label: "Böjti hónap" }, { id: "r3", label: "Hitvallás" }], { l1: "r1", l2: "r2", l3: "r3" }, "Pillérek részei."),
      multi("Az iszlám öt pillére:", ["Imádság", "Hadzs", "Ostrakizmus", "Böjt ramadán alatt"], [0, 1, 3], "Ostrakizmus — athéni, nem iszlám."),
    ]),
    quiz("end4", "Kihívás", [
      abcd("Ki az iszlám prófétája?", ["Jézus", "Mohamed", "Mózes", "Buddha"], 1, "570–632 — kinyilatkoztatások."),
      abcd("Melyik NEM pillér?", ["Zakát", "Hadzs", "Körülmetélés mint hivatalos pillér", "Imádság"], 2, "Szokás lehet, de nem az öt pillér."),
      { type: "order", prompt: "Terjeszkedés", items: [{ id: "a", label: "Közel-Kelet" }, { id: "b", label: "Ész-Afrika, Spanyolország részei" }], correctOrder: ["a", "b"], explain: "Kalifák — gyors expanzió." },
      match("Kapcsolók", [{ id: "x1", label: "Allah" }, { id: "x2", label: "Umma" }], [{ id: "y1", label: "Isten" }, { id: "y2", label: "Iszlám közösség" }], { x1: "y1", x2: "y2" }, "Alapfogalmak."),
    ]),
  ],
  "zsidó-monoteizmus": [
    quiz("end2", "Gyakorló kvíz — Zsidó vallás", [
      abcd("Mi a monoteizmus?", ["Sok isten", "Egy Isten imádata", "Természetimádás", "Császárimádás"], 1, "Mono = egy, teosz = isten."),
      abcd("Ki vitte ki a népet Egyiptomból a hagyomány szerint?", ["Dávid", "Mózes", "Salamon", "Herodes"], 1, "Kivonulás — Törvény, szövetség."),
      abcd("Mi a Tóra?", ["Görög eposz", "Isten törvénye és tanítása", "Római jog", "Koran"], 1, "Héber Biblia tanító részei — alap."),
      { type: "order", prompt: "Bibliai vázlat", items: [{ id: "1", label: "Ábrahám — szövetség" }, { id: "2", label: "Mózes — kivonulás" }, { id: "3", label: "Dávid — Jeruzsálem" }], correctOrder: ["1", "2", "3"], explain: "Ősatyák → Törvény → királyság." },
    ]),
    quiz("end3", "Vegyes feladatok", [
      truefalse("A zsidó vallás egy Istenbe vetett hite monoteista.", true, "Egyetlen teremtő Isten."),
      truefalse("A szombat (sabat) munkanap a vallásban.", false, "Pihenőnap — szent idő."),
      match("Párosítsd!", [{ id: "l1", label: "Szövetség" }, { id: "l2", label: "Tízparancsolat" }], [{ id: "r1", label: "Isten és nép kapcsola" }, { id: "r2", label: "Etikai alapok" }], { l1: "r1", l2: "r2" }, "Alapelvek."),
      multi("Zsidó vallás jellemzői:", ["Szombat", "Tóra", "Több hivatalos isten", "Jeruzsálem jelentősége"], [0, 1, 3], "Monoteizmus — nem politeizmus."),
    ]),
    quiz("end4", "Kihívás", [
      abcd("Mi történt Kr. u. 70 körül a jeruzsálemi templommal?", ["Felépült a Parthenón", "Pusztulás — diaspora erősödik", "Olimpia Zeusz tiszteletére", "Aranybulla"], 1, "Templom elvesztése — zsinagóga, rabinikus hagyomány."),
      abcd("Mi NEM jellemző?", ["Kóser étkezés", "Több isten hivatalos imádata", "Körülmetélés fiúknál", "Imádság"], 1, "Monoteizmus."),
      { type: "order", prompt: "Szövetség", items: [{ id: "a", label: "Isten választja a népet" }, { id: "b", label: "A nép megtartja a Törvényt" }], correctOrder: ["a", "b"], explain: "Kiválasztottság → felelősség." },
      match("Kapcsolók", [{ id: "x1", label: "Diaszpóra" }, { id: "x2", label: "Zsinagóga" }], [{ id: "y1", label: "Szétszóródott közösségek" }, { id: "y2", label: "Imaház, tanulás" }], { x1: "y1", x2: "y2" }, "Templom után."),
    ]),
  ],
  "keresztenyseg": [
    quiz("end2", "Gyakorló kvíz — Kereszténység", [
      abcd("Hol tanított leginkább Jézus?", ["Görögország", "Palesztina / Júdea", "Róma", "Egyiptom"], 1, "Római uralom alatti Júdea."),
      abcd("Mi a keresztények központi hite Jézussal kapcsolatban?", ["Csak erkölcsi tanító", "Messiás, feltámadás", "Filozófus", "Hadvezér"], 1, "Krisztus — üdvösség."),
      abcd("Ki terjesztette széles körben a hitet?", ["Periklész", "Pál apostol", "Batu kán", "Kleiszthenész"], 1, "Misszió — nem csak zsidóknak."),
      { type: "order", prompt: "Birodalomban", items: [{ id: "1", label: "Üldöztetések" }, { id: "2", label: "Konstantin — türelmediktum" }, { id: "3", label: "Theodosziusz — államvallás" }], correctOrder: ["1", "2", "3"], explain: "Üldözés → legalizálás → államvallás." },
    ]),
    quiz("end3", "Vegyes feladatok", [
      truefalse("Konstantin támogatta a kereszténység szabadságát.", true, "4. század — Milvai híd, edicta."),
      truefalse("A keresztény szó eredetileg Krisztushoz tartozót jelent.", true, "Christos = Messiás/Krisztus."),
      match("Párosítsd!", [{ id: "l1", label: "Evangélium" }, { id: "l2", label: "Nikai zsinat" }], [{ id: "r1", label: "Jézus tanításának összefoglalói" }, { id: "r2", label: "Hitbeli viták rendezése" }], { l1: "r1", l2: "r2" }, "Korai egyház."),
      multi("Kereszténység elterjedése:", ["Apostoli misszió", "Üldözés ellenére kitartás", "Konstantin támogatása", "Spartai eforoszok"], [0, 1, 2], "Misszió és birodalmi támogatás — nem spartai."),
    ]),
    quiz("end4", "Kihívás", [
      abcd("Ki tette államvallássá?", ["Néró", "Theodosziusz", "Augustus", "Diocletianus"], 1, "Kr. u. 392 körül."),
      abcd("Hány evangélium a kanonikus négyes?", ["Kettő", "Négy", "Tíz", "Egy"], 1, "Máté, Márk, Lukács, János."),
      { type: "order", prompt: "Misszió", items: [{ id: "a", label: "Jézus tanítása" }, { id: "b", label: "Apostolok, Pál" }], correctOrder: ["a", "b"], explain: "Tanítás → terjesztés." },
      match("Kapcsolók", [{ id: "x1", label: "Konstantin" }, { id: "x2", label: "Theodosziusz" }], [{ id: "y1", label: "Türelmediktum" }, { id: "y2", label: "Államvallás" }], { x1: "y1", x2: "y2" }, "Római birodalom."),
    ]),
  ],
  kozepkor: [
    quiz("end2", "Gyakorló kvíz — Középkor", [
      abcd("Mi jellemző a feudális rendre?", ["Erős császár mindenütt", "Hűbéri kapcsolat ur és vazallus között", "Athéni demokrácia", "Ipari forradalom"], 1, "Földért hűség és katonai szolgálat."),
      abcd("Ki hívta fel a keresztes hadjáratokat 1095-ben?", ["II. Urban pápa", "Mohamed", "Periklész", "Attila"], 0, "Jeruzsálem felszabadítása — keresztes mozgalom."),
      abcd("Melyik időszak a középkor tipikus határa?", ["Kr. e. 5. század", "Kr. u. 5–15. század", "19. század", "Kr. e. 8. század"], 1, "Római nyugati felbomlás után — reneszánszig."),
      { type: "order", prompt: "Keresztes mozgalom", items: [{ id: "1", label: "II. Urban felhívása (1095)" }, { id: "2", label: "Első hadjárat — Jeruzsálem 1099" }, { id: "3", label: "Későbbi hadjáratok" }], correctOrder: ["1", "2", "3"], explain: "Felhívás → első siker → folytatás." },
    ]),
    quiz("end3", "Vegyes feladatok", [
      truefalse("A középkorban az egyháznak nagy kulturális szerepe volt.", true, "Kolostorok — írás, oktatás, hit."),
      truefalse("A feudalizmusban mindenki egyenrangú polgár volt.", false, "Rendek — ur, nemes, jobbágy."),
      match("Párosítsd!", [{ id: "l1", label: "Hűbér" }, { id: "l2", label: "Benefícium" }, { id: "l3", label: "Vazallus" }], [{ id: "r1", label: "Hűség eskü" }, { id: "r2", label: "Birtokadomány" }, { id: "r3", label: "Alárendelt úr" }], { l1: "r1", l2: "r2", l3: "r3" }, "Feudális fogalmak."),
      multi("Középkori jellemzők:", ["Jobbágyföldesítés", "Várak, lovagi kultúra", "Demokratikus népgyűlés mindenütt", "Fekete halál (1347–)"], [0, 1, 3], "Agrár társadalom, járvány — nem demokrácia."),
    ]),
    quiz("end4", "Kihívás", [
      abcd("Mi NEM jellemző a korai középkorra?", ["Feudalizmus", "Erős római császár Nyugaton", "Egyházi befolyás", "Jobbágyok"], 1, "Nyugaton széttagolt hatalom."),
      abcd("Hol erősödött a kereskedelem középkorban?", ["Csak falvakon", "Városokban", "Csak tenger alatt", "Sehol"], 1, "Városok — céhek, piac."),
      { type: "order", prompt: "Rendek (lefelé)", items: [{ id: "a", label: "Uralkodó, főpap" }, { id: "b", label: "Nemesek" }, { id: "c", label: "Jobbágyok" }], correctOrder: ["a", "b", "c"], explain: "Hierarchikus társadalom." },
      match("Kapcsolók", [{ id: "x1", label: "Keresztes hadjárat" }, { id: "x2", label: "Fekete halál" }], [{ id: "y1", label: "Szentföld" }, { id: "y2", label: "Népességcsökkenés" }], { x1: "y1", x2: "y2" }, "Középkori események."),
    ]),
  ],
  "kozepkori-uradalom": [
    quiz("end2", "Gyakorló kvíz — Uradalom", [
      abcd("Ki dolgozott robotban az uradalmon?", ["Csak a nemes", "Jobbágyok", "Pápa személyesen", "Athéni demók"], 1, "Robot = kötelező munka az úrnak."),
      abcd("Mi az uradalom gazdasági célja?", ["Tőzsde", "Önellátás és uradalom jövedelme", "Turizmus", "Gyári sorozat"], 1, "Mezőgazdaság — kevés piaci áru."),
      abcd("Hol volt az uradalom központja?", ["Agorán", "Vár, uradalomház", "Colosseumban", "Zsinagógában"], 1, "Vár — raktár, kézművesek."),
      { type: "order", prompt: "Termelés", items: [{ id: "1", label: "Jobbágy robot az úr földjén" }, { id: "2", label: "Saját telken termelés" }, { id: "3", label: "Adó, természetben fizetés" }], correctOrder: ["1", "2", "3"], explain: "Kötelezettség → megélhetés → adó." },
    ]),
    quiz("end3", "Vegyes feladatok", [
      truefalse("A nemes bírósági jogot gyakorolhatott jobbágyain.", true, "Helyi hatalom — uradalom."),
      truefalse("Az uradalom ipari nagygyár volt.", false, "Agrár, kézműves — önellátó."),
      match("Párosítsd!", [{ id: "l1", label: "Robot" }, { id: "l2", label: "Ur" }], [{ id: "r1", label: "Kötelező munka" }, { id: "r2", label: "Birtokos nemes" }], { l1: "r1", l2: "r2" }, "Uradalmi viszony."),
      multi("Uradalom elemei:", ["Föld", "Jobbágyok", "Választójog minden jobbágynak", "Malom, kovács"], [0, 1, 3], "Gazdasági egység — nem demokrácia."),
    ]),
    quiz("end4", "Kihívás", [
      abcd("Ki NEM tipikus uradalom lakó?", ["Jobbágy", "Nemes úr", "Ipari munkás bérben (késői jelleg)", "Papi birtok"], 2, "Ipari bérmunka később erősödik."),
      abcd("A templom szerepe uradalomon:", ["Nincs birtoka", "Nagy birtokos is lehet", "Csak athéni polis", "Tatár adószedő"], 1, "Kolostor uradalmak."),
      { type: "order", prompt: "Hatalom", items: [{ id: "a", label: "Király — legerősebb úr elméletben" }, { id: "b", label: "Nemes, egyházi birtokok" }], correctOrder: ["a", "b"], explain: "Központ vs helyi birtokok." },
      match("Kapcsolók", [{ id: "x1", label: "Adó" }, { id: "x2", label: "Robot" }], [{ id: "y1", label: "Termés, pénz az úrnak" }, { id: "y2", label: "Munkaszolgáltatás" }], { x1: "y1", x2: "y2" }, "Jobbágy teher."),
    ]),
  ],
  parasztsag: [
    quiz("end2", "Gyakorló kvíz — Parasztság", [
      abcd("Mi terhelte leginkább a jobbágyot?", ["Választójog", "Robot és adó", "Katonai rang", "Ostrakizmus"], 1, "Gazdasági kényszer — munka és adó."),
      abcd("Hol élt a lakosság többsége középkorban?", ["Városban", "Falun, uradalmakon", "Kolostorban csak", "Tengeren"], 1, "Agrár társadalom."),
      abcd("Tipikus paraszti étrend:", ["Csak hús", "Kenyér, gabona, hüvelyes", "Csak olajbogyó Athénban", "Aranyforint"], 1, "Egyszerű, kevés hús."),
      { type: "order", prompt: "Mezőgazdasági év", items: [{ id: "1", label: "Tavaszi szántás, vetés" }, { id: "2", label: "Nyári gondozás" }, { id: "3", label: "Őszi aratás" }], correctOrder: ["1", "2", "3"], explain: "Évszakonkénti munka ciklus." },
    ]),
    quiz("end3", "Vegyes feladatok", [
      truefalse("A jobbágy adót gyakran természetben fizette.", true, "Gabona, bor, stb."),
      truefalse("A parasztok jogilag mindenütt szabad polgárok voltak.", false, "Alárendeltség — országonként eltérő."),
      match("Párosítsd!", [{ id: "l1", label: "Közös legelő" }, { id: "l2", label: "Parasztlázadás" }], [{ id: "r1", label: "Falu közösségi erőforrás" }, { id: "r2", label: "Adó, rossz termés → felkelés" }], { l1: "r1", l2: "r2" }, "Falusi élet."),
      multi("Jobbágy mindennapjai:", ["Robot az úr földjén", "Saját telken munka", "Templom, közösség", "Spartai eforosz választás"], [0, 1, 2], "Munka és közösség — nem spartai politika."),
    ]),
    quiz("end4", "Kihívás", [
      abcd("Mi váltotta ki gyakran a parasztlázadásokat?", ["Túl sok szabadidő", "Adóemelés, rossz termés", "Olimpia", "Aranybulla"], 1, "Gazdasági nyomás."),
      abcd("Tipikus lakás anyaga falun:", ["Márvány", "Fa, agyag, nád", "Acél váz", "Pantenon oszlop"], 1, "Egyszerű építés."),
      { type: "order", prompt: "Nap", items: [{ id: "a", label: "Hajnali munka" }, { id: "b", label: "Esti pihenő kevés szabadidővel" }], correctOrder: ["a", "b"], explain: "Hosszú munkanap." },
      match("Kapcsolók", [{ id: "x1", label: "Jobbágy" }, { id: "x2", label: "Paraszt" }], [{ id: "y1", label: "Jogi alárendelt" }, { id: "y2", label: "Falusi termelő" }], { x1: "y1", x2: "y2" }, "Gyakran átfedés."),
    ]),
  ],
  "kozepkori-varos": [
    quiz("end2", "Gyakorló kvíz — Város", [
      abcd("Ki alkotja a városi polgárságot?", ["Jobbágyok robotban", "Kereskedők, iparosok, szabad polgárok", "Csak nemesek", "Tatár kán"], 1, "Polgár = városi jog, szabadság."),
      abcd("Mi a céh?", ["Katonai rend", "Ipartársulás, minőség", "Egyházi püspökség", "Spartai szenátus"], 1, "Mester és legények — szakma."),
      abcd("Mit adott a városi privilégium?", ["Robot kötelezettség", "Piac, bizonyos szabadságjogok", "Jobbágyság mindenkinek", "Tilos kereskedelem"], 1, "Vonzza a telepeseket."),
      { type: "order", prompt: "Fejlődés", items: [{ id: "1", label: "Kereskedelmi útvonal, vár alatt település" }, { id: "2", label: "Városi jog, fallal védett központ" }, { id: "3", label: "Céhek, erős polgárság" }], correctOrder: ["1", "2", "3"], explain: "Település → jog → gazdaság." },
    ]),
    quiz("end3", "Vegyes feladatok", [
      truefalse("A város gyakran pénzzel vásárolta a katonai szolgálat alóli mentességet.", true, "Pénzgazdaság — polgári érdek."),
      truefalse("A polgárság fő tevékenysége a robot volt.", false, "Kereskedelem, ipar."),
      match("Párosítsd!", [{ id: "l1", label: "Piactér" }, { id: "l2", label: "Céh" }, { id: "l3", label: "Vámfelmentés" }], [{ id: "r1", label: "Kereskedelem központja" }, { id: "r2", label: "Iparos szervezet" }, { id: "r3", label: "Városi privilégium része" }], { l1: "r1", l2: "r2", l3: "r3" }, "Városi élet."),
      multi("Miért nőttek a városok?", ["Kereskedelem", "Kézműipar, céh", "Minden jobbágy városba költözött azonnal", "Pénzgazdaság"], [0, 1, 3], "Gazdasági vonzerő — lassú folyamat."),
    ]),
    quiz("end4", "Kihívás", [
      abcd("12–13. századtól mi erősödik?", ["Csak uradalom robot", "Városok szerepe", "Spartai hadsereg", "Tatár birodalom Magyarországon"], 1, "Városiasodás kezdete."),
      abcd("A város tipikus épületei:", ["Templom, céhház, piac", "Csak naosz", "Aqueduct kötelező minden faluban", "Ostrakon tároló"], 0, "Középkori városkép."),
      { type: "order", prompt: "Polgár útja", items: [{ id: "a", label: "Legény a céhben" }, { id: "b", label: "Mester, önálló műhely" }], correctOrder: ["a", "b"], explain: "Céhes képződés." },
      match("Kapcsolók", [{ id: "x1", label: "Polgár" }, { id: "x2", label: "Jobbágy" }], [{ id: "y1", label: "Városi szabad ember" }, { id: "y2", label: "Falusi robotkötelezett" }], { x1: "y1", x2: "y2" }, "Rendek különbsége."),
    ]),
  ],
  "egyhaz-hierarchia": [
    quiz("end2", "Gyakorló kvíz — Egyház", [
      abcd("Ki áll a katolikus egyház élén?", ["Bizánc császár", "Pápa", "Városi polgármester", "Batu kán"], 1, "Pápa — Róma."),
      abcd("Ki vezeti a falusi közösséget lelkészként?", ["Püspök", "Plébános", "Pápa minden faluban", "Eforosz"], 1, "Plébános — helyi pap."),
      abcd("Mi az investitúra vita tárgya?", ["Adósság", "Ki nevez ki püspököt", "Olimpia", "Aranyforint"], 1, "Szellemi vs világi hatalom."),
      { type: "order", prompt: "Hierarchia", items: [{ id: "1", label: "Pápa" }, { id: "2", label: "Püspök" }, { id: "3", label: "Plébános" }], correctOrder: ["1", "2", "3"], explain: "Felülről lefelé." },
    ]),
    quiz("end3", "Vegyes feladatok", [
      truefalse("A kolostorok oktatással, írástudással is foglalkoztak.", true, "Benedekin, ferences rendek — kultúra."),
      truefalse("A tized (tithe) jövedelem volt az egyháznak.", true, "Termés egy része — gazdasági erő."),
      match("Párosítsd!", [{ id: "l1", label: "Kanonokjog" }, { id: "l2", label: "Zsinat" }, { id: "l3", label: "Bíboros" }], [{ id: "r1", label: "Egyházi törvény" }, { id: "r2", label: "Egyházi gyűlés, döntés" }, { id: "r3", label: "Pápa tanácsa" }], { l1: "r1", l2: "r2", l3: "r3" }, "Szervezet."),
      multi("Egyház szerepe középkorban:", ["Hit, szertartás", "Oktatás", "Politikai befolyás", "Csak görög politeizmus"], [0, 1, 2], "Kultúra és hatalom — katolikus egyház."),
    ]),
    quiz("end4", "Kihívás", [
      abcd("Kihez kötődik a pápaság csúcspontja középkorban?", ["Innocent III.", "Periklész", "Mohamed", "Kleiszthenész"], 0, "Erős pápai hatalom."),
      abcd("Mi NEM egyházi rend?", ["Benedekin", "Ferences", "Céh", "Dominikánus"], 2, "Céh — ipari, nem szerzetesi."),
      { type: "order", prompt: "Bevétel", items: [{ id: "a", label: "Birtok, jobbágyok" }, { id: "b", label: "Tized" }], correctOrder: ["a", "b"], explain: "Gazdasági alapok." },
      match("Kapcsolók", [{ id: "x1", label: "Érsek" }, { id: "x2", label: "Püspök" }], [{ id: "y1", label: "Több egyházmegye felett" }, { id: "y2", label: "Egyházmegye vezető" }], { x1: "y1", x2: "y2" }, "Egyházmegyei rend."),
    ]),
  ],
  "roman-gotika": [
    quiz("end2", "Gyakorló kvíz — Román és gót", [
      abcd("Román stílus jellemzője:", ["Csúcsíves boltozat", "Kerek boltív, vastag fal", "Acél váz", "Görög dór oszlop kötelező"], 1, "Román — nehéz fal, kerek ív."),
      abcd("Gótika jellemző boltozata:", ["Kerek", "Csúcsíves", "Lapos", "Nincs"], 1, "Csúcsív — magasabb fal, rippás szerkezet."),
      abcd("Hol jelennek meg nagy üvegmatricák?", ["Román kis ablak", "Gót nagy ablakok", "Római pantheon nyílása nélkül", "Görög stoá"], 1, "Bibliai jelenetek — fény a templomban."),
      { type: "order", prompt: "Stílusok", items: [{ id: "1", label: "Román (10–12. sz.)" }, { id: "2", label: "Gótika (12–15. sz.)" }, { id: "3", label: "Renászansz" }], correctOrder: ["1", "2", "3"], explain: "Időbeli sorrend." },
    ]),
    quiz("end3", "Vegyes feladatok", [
      truefalse("A román templomok gyakran vastag falúak, kis ablakkal.", true, "Masszív, biztonságos forma."),
      truefalse("A Notre-Dame Párizs gótikus katedrális.", true, "Csúcsíves, magas — jellegzetes."),
      match("Párosítsd!", [{ id: "l1", label: "Ják" }, { id: "l2", label: "Kölni dóm" }], [{ id: "r1", label: "Magyar román példa" }, { id: "r2", label: "Gótikus óriás templom" }], { l1: "r1", l2: "r2" }, "Példák."),
      multi("Gót jellemzők:", ["Magas torony", "Rippás fal", "Csak kerek boltív", "Üvegablak"], [0, 1, 3], "Felfelé törő forma — nem román kerek ív dominancia."),
    ]),
    quiz("end4", "Kihívás", [
      abcd("Melyik korai stílus?", ["Gótika", "Román", "Barokk", "Renászansz"], 1, "Román előbb jön."),
      abcd("Mi a bazilika elrendezés?", ["Hosszanti, hajók", "Csak kör alak", "Aqueduct", "Ostrakon tér"], 0, "Középkori templom alap."),
      { type: "order", prompt: "Gót építés", items: [{ id: "a", label: "Csúcsíves boltív terve" }, { id: "b", label: "Magas fal, üvegmatricák" }], correctOrder: ["a", "b"], explain: "Szerkezet → díszítés/fény." },
      match("Kapcsolók", [{ id: "x1", label: "Román" }, { id: "x2", label: "Gót" }], [{ id: "y1", label: "Kerek ív" }, { id: "y2", label: "Csúcsív" }], { x1: "y1", x2: "y2" }, "Boltozat különbség."),
    ]),
  ],
  reneszansz: [
    quiz("end2", "Gyakorló kvíz — Renászansz", [
      abcd("Hol indult a renászansz?", ["Skandinávia", "Itália (Firenze)", "Japán", "Tatár birodalom"], 1, "14–16. század — olasz városok."),
      abcd("Mi a humanizmus lényege?", ["Tilos az antik", "Antik klasszikusok, emberközpontúság", "Csak egyházi latin", "Robot törvény"], 1, "Újjászületés — ember és művészet."),
      abcd("Mi segítette a tudás terjedését?", ["Csak kézírás", "Nyomdászat (Gutenberg ~1450)", "Tilos könyv", "Ostrakizmus"], 1, "Könyvek tömeges másolása."),
      { type: "order", prompt: "Renászansz", items: [{ id: "1", label: "Antik ihlet, humanizmus" }, { id: "2", label: "Művészet (Leonardo, Michelangelo)" }, { id: "3", label: "Nyomdászat, tudás terjedése" }], correctOrder: ["1", "2", "3"], explain: "Gondolat → művészet → technika." },
    ]),
    quiz("end3", "Vegyes feladatok", [
      truefalse("A perspektíva a festészetben reneszánsz újítás.", true, "Realista térábrázolás."),
      truefalse("Magyarországon Mátyás kora udvara humanista.", true, "Corvina, Itália kapcsolat."),
      match("Párosítsd!", [{ id: "l1", label: "Leonardo da Vinci" }, { id: "l2", label: "Raffaello" }, { id: "l3", label: "Brunelleschi" }], [{ id: "r1", label: "Művész, polihisztor" }, { id: "r2", label: "Athéni iskola freskó" }, { id: "r3", label: "Firenzei dóm kupola" }], { l1: "r1", l2: "r2", l3: "r3" }, "Renészansz nevek."),
      multi("Renászansz jellemzői:", ["Kr. u. 14–16. század", "Humanizmus", "Spartai eforosz", "Antik művek tanulmányozása"], [0, 1, 3], "Kultúra újjászületése — nem spartai."),
    ]),
    quiz("end4", "Kihívás", [
      abcd("Mi NEM reneszánsz művész?", ["Michelangelo", "Homérosz (eposz)", "Raffaello", "Leonardo"], 1, "Homérosz — antik, nem reneszánsz festő."),
      abcd("A reformáció és tudomány előfutára:", ["Kétkelés, megfigyelés", "Tilos gondolkodás", "Csak tatár hadjárat", "Aranybulla előzménye nélkül minden"], 0, "Humanista gondolkodás hatása."),
      { type: "order", prompt: "Magyar kapcsolat", items: [{ id: "a", label: "Itáliai humanizmus" }, { id: "b", label: "Mátyás udvara, Corvina" }], correctOrder: ["a", "b"], explain: "Európai áramlat → magyar udvar." },
      match("Kapcsolók", [{ id: "x1", label: "Humanizmus" }, { id: "x2", label: "Renászansz" }], [{ id: "y1", label: "Antik, ember értéke" }, { id: "y2", label: "Kultúra újjászületése" }], { x1: "y1", x2: "y2" }, "Fogalmak."),
    ]),
  ],
  "iv-bela": [
    quiz("end2", "Gyakorló kvíz — IV. Béla", [
      abcd("IV. Béla mire készült?", ["Római invázió", "Tatár fenyegetés", "Mohács", "I. világháború"], 1, "Batu kán — 1241–42."),
      abcd("Melyik királyi központ kapcsolódik hozzá?", ["Sparta", "Visegrád", "Róma", "Mekka"], 1, "Visegrád — fejlődő udvar."),
      abcd("Mit telepített határőrzésre?", ["Vikingek", "Kunokat", "Spartaiakat", "Athéni demókat"], 1, "Kun betelepítés — később lázadás is."),
      { type: "order", prompt: "Tatárjárás", items: [{ id: "1", label: "Erődítés, felkészülés" }, { id: "2", label: "Mohi vereség, menekülés" }, { id: "3", label: "Újjáépítés" }], correctOrder: ["1", "2", "3"], explain: "Előkészület → válság → helyreállítás." },
    ]),
    quiz("end3", "Vegyes feladatok", [
      truefalse("IV. Béla 1235-től uralkodott.", true, "Árpád-házi király."),
      truefalse("A mohi győzelem után a király azonnal visszaverte a tatárokat.", false, "Vereség — menekülés, pusztítás."),
      match("Párosítsd!", [{ id: "l1", label: "Mohi" }, { id: "l2", label: "Várépítés" }], [{ id: "r1", label: "1241 — magyar vereség" }, { id: "r2", label: "Tatár elleni felkészülés" }], { l1: "r1", l2: "r2" }, "IV. Béla kora."),
      multi("Tatárjárás után tipikus:", ["Népességcsökkenés", "Erődített települések", "Azonnali teljes gyógyulás egy év alatt", "Convictus, település pótlás"], [0, 1, 3], "Hosszú helyreállítás — nem azonnali."),
    ]),
    quiz("end4", "Kihívás", [
      abcd("A mohi csata éve:", ["895", "1241", "1526", "1848"], 1, "1241 — tatár győzelem."),
      abcd("Mi NEM IV. Béla intézkedése?", ["Várépítés", "Kun betelepítés", "Aranyforint bevezetése", "Újjáépítés"], 2, "Aranyforint — Károly Róbert kora."),
      { type: "order", prompt: "Uralkodás", items: [{ id: "a", label: "1235: trón" }, { id: "b", label: "1241–42: tatárjárás" }], correctOrder: ["a", "b"], explain: "Előtte felkészülés is." },
      match("Kapcsolók", [{ id: "x1", label: "IV. Béla" }, { id: "x2", label: "Batu kán" }], [{ id: "y1", label: "Magyar király" }, { id: "y2", label: "Tatár hadvezér" }], { x1: "y1", x2: "y2" }, "1241–42."),
    ]),
  ],
  tatarjaras: [
    quiz("end2", "Gyakorló kvíz — Tatárjárás", [
      abcd("Ki vezette a nyugati tatár hadjáratot?", ["Attila", "Batu kán", "Napóleon", "Periklész"], 1, "Mongol birodalom — nyugati offenzíva."),
      abcd("Hol veszített a magyar sereg?", ["Marathon", "Mohinál", "Waterloon", "Nándorfehérvár"], 1, "1241 — áprilisi csata."),
      abcd("Melyik év a behatolás csúcsa?", ["1000", "1241–1242", "1456", "1526"], 1, "Pusztítás, majd visszavonulás."),
      { type: "order", prompt: "Események", items: [{ id: "1", label: "Behatolás" }, { id: "2", label: "Mohi" }, { id: "3", label: "1242 visszavonulás" }], correctOrder: ["1", "2", "3"], explain: "Invázió → vereség → távozás." },
    ]),
    quiz("end3", "Vegyes feladatok", [
      truefalse("A tatárok városokat és falvakat pusztítottak.", true, "Lemészárlás, elhurcolás."),
      truefalse("1242-ben a tatárok azért vonultak vissza, mert Nagy Batu halála miatt új kánt választottak.", true, "Belső mongol politika — nem magyar totális győzelem."),
      match("Párosítsd!", [{ id: "l1", label: "Arany Horde" }, { id: "l2", label: "Dzsingisz" }], [{ id: "r1", label: "Kelet-Európában maradó tatár körzet" }, { id: "r2", label: "Mongol birodalom alapítója" }], { l1: "r1", l2: "r2" }, "Mongol világ."),
      multi("Következmények Magyarországon:", ["Népességcsökkenés", "Várak fontossága nő", "Azonnali reneszánsz udvar", "Gazdasági összeomlás"], [0, 1, 3], "Újjáépítés kellett — nem reneszánsz azonnal."),
    ]),
    quiz("end4", "Kihívás", [
      abcd("Ki volt magyar király a tatárjárás idején?", ["Szent István", "IV. Béla", "Mátyás", "Károly Róbert"], 1, "Menekülés, szervezés, újjáépítés."),
      abcd("Mi NEM igaz?", ["1241 mohi", "Teljes ország azonnali felszabadulás 1241-ben", "1242 visszavonulás", "Pusztítás"], 1, "A tatárok 1242-ig tartózkodtak — katasztrófa."),
      { type: "order", prompt: "IV. Béla", items: [{ id: "a", label: "Felkészülés, várak" }, { id: "b", label: "Újjáépítés tatár után" }], correctOrder: ["a", "b"], explain: "Előtte és utána is tevékeny." },
      match("Kapcsolók", [{ id: "x1", label: "1241" }, { id: "x2", label: "1242" }], [{ id: "y1", label: "Mohi, pusztítás" }, { id: "y2", label: "Tatár visszavonulás" }], { x1: "y1", x2: "y2" }, "Időpontok."),
    ]),
  ],
  "karoly-robert": [
    quiz("end2", "Gyakorló kvíz — Károly Róbert", [
      abcd("Melyik dinasztia tagja?", ["Árpád", "Anjou", "Habsburg", "Luxemburgi"], 1, "Anjou-ház — Capet ág."),
      abcd("Mit vezetett be a pénzügyben?", ["Euro", "Aranyforint", "Ostrakon", "Sestertius"], 1, "Stabil aranypénz — kereskedelem."),
      abcd("Mikor stabilizálódott hatalma?", ["895", "1310 körül", "1526", "1848"], 1, "Hosszú trónviszály után."),
      { type: "order", prompt: "Károly kora", items: [{ id: "1", label: "Trónviszály" }, { id: "2", label: "Hatalom megszilárdítása" }, { id: "3", label: "Aranyforint, bányák" }], correctOrder: ["1", "2", "3"], explain: "Viszály → erős király → gazdaság." },
    ]),
    quiz("end3", "Vegyes feladatok", [
      truefalse("Károly Róbert bányakirályi joga bevételt hozott.", true, "Arany, réz — kincstár."),
      truefalse("Leverte a csőcselék király ellen mozgalmát.", true, "Erős királyi központ."),
      match("Párosítsd!", [{ id: "l1", label: "Aranyforint" }, { id: "l2", label: "Anjou" }], [{ id: "r1", label: "Stabil pénz" }, { id: "r2", label: "Dinasztia" }], { l1: "r1", l2: "r2" }, "Alapadatok."),
      multi("Sikeres uralkodás elemei:", ["Pénzügyi stabilizálás", "Nemesi lázadások leverése", "Spartai reform", "Mezőgazdaság fellendülése"], [0, 1, 3], "Gazdaság és hatalom — nem görög/spartai."),
    ]),
    quiz("end4", "Kihívás", [
      abcd("Károly gazdasági lépése:", ["Robot törlése mindenkinek", "Bányák és forint", "Tatár szövetség", "Mohács"], 1, "Bányák + pénz."),
      abcd("Mi maradt meg?", ["Rendi ellensúly", "Teljes abszolutizmus", "Tatár kán hatalma", "Athéni demokrácia"], 0, "Erős király, de rendi állam."),
      { type: "order", prompt: "Politika", items: [{ id: "a", label: "Nápolyi kapcsolat" }, { id: "b", label: "Nemesi békítés" }], correctOrder: ["a", "b"], explain: "Külpolitika és belső rend." },
      match("Kapcsolók", [{ id: "x1", label: "Károly Róbert" }, { id: "x2", label: "II. András" }], [{ id: "y1", label: "Anjou király, forint" }, { id: "y2", label: "Aranybulla" }], { x1: "y1", x2: "y2" }, "Külön korszakok."),
    ]),
  ],
  "luxemburgi-zsigmond": [
    quiz("end2", "Gyakorló kvíz — Zsigmond", [
      abcd("Zsigmond milyen császár is volt?", ["Német-római", "Bizánci", "Oszmán", "Perzsa"], 0, "Magyar király + birodalmi felelősség."),
      abcd("Melyik zsinat kapcsolódik hozzá?", ["Nicea", "Konstanci (1414–18)", "Vatikán II", "Athéni ekklésia"], 1, "Több pápa vitája — egyházi egység."),
      abcd("Uralkodásának kezdete Magyarországon:", ["1387", "1000", "1526", "1848"], 0, "Luxemburgi ház."),
      { type: "order", prompt: "Zsigmond", items: [{ id: "1", label: "Magyar király" }, { id: "2", label: "Német-római császár" }, { id: "3", label: "Konstanci zsinat" }], correctOrder: ["1", "2", "3"], explain: "Helyi → európai szint." },
    ]),
    quiz("end3", "Vegyes feladatok", [
      truefalse("Zsigmond kora erős rendi politika és országgyűlések.", true, "Rendi hatalom nő."),
      truefalse("A husita mozgalom Csehországban nem érintette Zsigmondot.", false, "Háborúk, konfliktus."),
      match("Párosítsd!", [{ id: "l1", label: "Konstanci zsinat" }, { id: "l2", label: "Török előrenyomás" }], [{ id: "r1", label: "Egyházi egység" }, { id: "r2", label: "Balkán, határ" }], { l1: "r1", l2: "r2" }, "Kihívások."),
      multi("Zsigmond jellemzői:", ["Európai és magyar politika összekapcsolódása", "Oktatás támogatása (egyetemek)", "Tatárjárás 1241", "Oligarchák (Garai)"], [0, 1, 3], "Késő középkor — nem tatár korszak."),
    ]),
    quiz("end4", "Kihívás", [
      abcd("A Konstanci zsinat célja:", ["Athéni demokrácia", "Egyházi egység helyreállítása", "Aranybulla kiadása", "Mohamed próféta"], 1, "Skizma — több pápa."),
      abcd("Mi NEM jellemző?", ["Császári rang", "Konstanci zsinat", "Honfoglalás vezetése", "Török veszély"], 2, "Honfoglalás — sokkal korábban."),
      { type: "order", prompt: "Veszélyek", items: [{ id: "a", label: "Török a Balkánon" }, { id: "b", label: "Husiták Csehországban" }], correctOrder: ["a", "b"], explain: "Külső és szomszédos konfliktusok." },
      match("Kapcsolók", [{ id: "x1", label: "Luxemburgi Zsigmond" }, { id: "x2", label: "Országgyűlés" }], [{ id: "y1", label: "Király, császár" }, { id: "y2", label: "Rendi döntés fóruma" }], { x1: "y1", x2: "y2" }, "Rendi állam."),
    ]),
  ],
  "hunyadi-diadala": [
    quiz("end2", "Gyakorló kvíz — Hunyadi diadala", [
      abcd("1456-ban hol aratott diadal?", ["Mohi", "Nándorfehérvár", "Mohács", "Marathon"], 1, "Török ostrom visszaverve."),
      abcd("Hunyadi gyakori titulusa:", ["Pápa", "Nádor, hadvezér", "Kalifa", "Eforosz"], 1, "Ország másodja, katonai vezető."),
      abcd("Melyik nap emlékezetes a győzelemhez?", ["Szent István nap", "Karácsony", "Olimpia", "Ostrakizmus nap"], 0, "Harangszó hagyomány — délután 1 óra."),
      { type: "order", prompt: "Hunyadi életút", items: [{ id: "1", label: "Török háborúkban kitűnés" }, { id: "2", label: "Nándorfehérvár 1456" }, { id: "3", label: "Mátyás trón előkészítése" }], correctOrder: ["1", "2", "3"], explain: "Hadvezér → diadal → utód." },
    ]),
    quiz("end3", "Vegyes feladatok", [
      truefalse("A diadal lassította a török előrenyomást.", true, "Évtizedekig védvonal."),
      truefalse("Hunyadi János Mátyás király apja.", true, "Család — reneszánsz udvar alapja."),
      match("Párosítsd!", [{ id: "l1", label: "Nándorfehérvár" }, { id: "l2", label: "1456" }], [{ id: "r1", label: "Vár, ostrom" }, { id: "r2", label: "Győzelem éve" }], { l1: "r1", l2: "r2" }, "Diadal."),
      multi("Jelentőség:", ["Török elleni küzdelem", "Keresztény Európa védelme", "Végleges török vereség örökre", "Nádor szerepe"], [0, 1, 3], "Fontos diadal — de a török fenyegetés maradt."),
    ]),
    quiz("end4", "Kihívás", [
      abcd("A nándorfehérvári diadal éve:", ["1241", "1456", "1526", "1849"], 1, "1456 — emlékezetes."),
      abcd("Mi NEM igaz?", ["Hunyadi hadvezér", "1456 győzelem", "Mohács ugyanabban az évben", "Nádor"], 2, "Mohács 1526 — későbbi."),
      { type: "order", prompt: "Ostrom", items: [{ id: "a", label: "Török ostrom" }, { id: "b", label: "Védők győzelme" }], correctOrder: ["a", "b"], explain: "Támadás → visszaverés." },
      match("Kapcsolók", [{ id: "x1", label: "Hunyadi János" }, { id: "x2", label: "Mátyás király" }], [{ id: "y1", label: "Apa, hadvezér" }, { id: "y2", label: "Fiú, király" }], { x1: "y1", x2: "y2" }, "Család."),
    ]),
  ],
  "hunyadi-matyas": [
    quiz("end2", "Gyakorló kvíz — Mátyás király", [
      abcd("Mi a fekete sereg?", ["Jobbágy hadsereg", "Zsoldoshadsereg", "Tatár szövetségesek", "Spartai hopliták"], 1, "Professzionális zsoldosok."),
      abcd("Mátyás trónra lépése:", ["1387", "1458", "1526", "1867"], 1, "1458 — fiatal király."),
      abcd("Milyen udvarról híres?", ["Spartai", "Humanista reneszánsz", "Oszmán", "Athéni demokrácia"], 1, "Corvina, művészek, Itália."),
      { type: "order", prompt: "Mátyás kora", items: [{ id: "1", label: "Trón megszerzése" }, { id: "2", label: "Fekete sereg, terjeszkedés" }, { id: "3", label: "Corvina, udvar" }], correctOrder: ["1", "2", "3"], explain: "Hatalom → hadviselés → kultúra." },
    ]),
    quiz("end3", "Vegyes feladatok", [
      truefalse("A Corvina könyvtár humanista gyűjtemény.", true, "Latin, görög művek."),
      truefalse("Mátyás halála után (1490) birodalma tovább bővült.", false, "Gyenge utódok — összeomlás."),
      match("Párosítsd!", [{ id: "l1", label: "Corpus Juris" }, { id: "l2", label: "Corvina" }, { id: "l3", label: "Fekete sereg" }], [{ id: "r1", label: "Jogegységesítés" }, { id: "r2", label: "Könyvtár" }, { id: "r3", label: "Zsoldoshadsereg" }], { l1: "r1", l2: "r2", l3: "r3" }, "Mátyás kora."),
      multi("Mátyás tevékenysége:", ["Bécs felé terjeszkedés", "Nyomdászat kezdetei", "Spartai eforosz reform", "Adók, bányák a hadviseléshez"], [0, 1, 3], "Erős királyi hatalom — nem spartai."),
    ]),
    quiz("end4", "Kihívás", [
      abcd("A fekete sereg jellege:", ["Ingyenes jobbágy sereg", "Fizetett zsoldosok", "Pápai zászlóalj", "Tatár segítség"], 1, "Modern hadsereg — tüzérség."),
      abcd("Mi NEM Mátyás érdeme?", ["Humanista udvar", "Corvina", "Mohács győzelem 1526", "Jogegységesítés"], 2, "Mohács — későbbi katasztrófa."),
      { type: "order", prompt: "Udvar", items: [{ id: "a", label: "Itáliai kapcsolat" }, { id: "b", label: "Művészek, könyvtár" }], correctOrder: ["a", "b"], explain: "Külföldi hatás → helyi udvar." },
      match("Kapcsolók", [{ id: "x1", label: "1458" }, { id: "x2", label: "1490" }], [{ id: "y1", label: "Uralkodás kezdete" }, { id: "y2", label: "Halála" }], { x1: "y1", x2: "y2" }, "Időpontok."),
    ]),
  ],
};

/** Témakör-specifikus end2–end4; hiányzó slug esetén üres */
export function end234Blocks(slug: string): ContentBlock[] {
  return bySlug[slug] ?? [];
}
