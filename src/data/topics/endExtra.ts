import type { ContentBlock } from "../../lib/types";
import { abcd, quiz } from "./_shared";

/** +3 ABCD a meglévő Záró kvíz után (end-extra blokk) */
const bySlug: Record<string, ContentBlock> = {
  "demokracia-vilaga": quiz("end-extra", "Záró kvíz — kiegészítő", [
    abcd("Ki vezette be az ostrakizmust?", ["Szolón", "Kleiszthenész", "Periklész", "Kimón"], 1, "Kleiszthenész reformjai."),
    abcd("Mi a demosz?", ["Templom", "Nép, polgárság", "Haditengerészet", "Adó"], 1, "Demokrácia szóeleme."),
    abcd("Sparta államformája inkább:", ["Demokrácia", "Oligarchikus elemek", "Persa satrapia", "Római császárság"], 1, "Két király, eforoszok."),
  ]),
  "aranybulla": quiz("end-extra", "Záró kvíz — kiegészítő", [
    abcd("Kinek szólt elsősorban az Aranybulla?", ["Jobbágyoknak", "Nemességnek", "Tatároknak", "Spartaiaknak"], 1, "Nemesi privilégiumok."),
    abcd("Mi történt évente a nemességgel?", ["Congregatio", "Ostrakizmus", "Hadzs", "Keresztes hadjárat"], 0, "Gyűlés — sérelmek."),
    abcd("1222-ben ki uralkodott?", ["István", "II. András", "Mátyás", "Béla IV."], 1, "András adta ki."),
  ]),
  "atheni-allamszervezet": quiz("end-extra", "Záró kvíz — kiegészítő", [
    abcd("Mi az agora?", ["Templom", "Közélet, piac tere", "Katonai tábor", "Tatár sánc"], 1, "Polis szíve."),
    abcd("Hány fő volt a bulé?", ["50", "500", "5000", "5"], 1, "Ötszázas tanács."),
    abcd("Az ekklésia tagjai:", ["Minden lakó", "Polgárok", "Csak stratégusok", "Rabszolgák"], 1, "Szabad polgárok népgyűlése."),
  ]),
  "gorog-epiteszet": quiz("end-extra", "Záró kvíz — kiegészítő", [
    abcd("A Parthenón városa:", ["Sparta", "Athén", "Róma", "Korinthosz"], 1, "Akropolisz — Athén."),
    abcd("Római szerkezet:", ["Csak fa", "Ív, beton", "Gót csúcsív", "Nincs boltozat"], 1, "Technikai újítás."),
    abcd("Aqueduct célja:", ["Gladiátor", "Víz a városba", "Imádság", "Ostrakon"], 1, "Vízellátás."),
  ]),
  "gorog-vallások": quiz("end-extra", "Záró kvíz — kiegészítő", [
    abcd("Hol éltek az istenek a mítoszban?", ["Olimposz", "Róma", "Mekka", "Visegrád"], 0, "Görög pantheon."),
    abcd("Mi köti össze isteneket és embereket?", ["Adó", "Mítosz és szertartás", "Aranyforint", "Robot"], 1, "Vallásos élet."),
    abcd("A Delphi jóslóhely istene:", ["Apollón", "Mohamed", "Jehova", "Mars"], 0, "Apollón — jóslás."),
  ]),
  "islam-vallas": quiz("end-extra", "Záró kvíz — kiegészítő", [
    abcd("Az iszlám szó jelentése:", ["Háború", "Alávetés Allah akaratának", "Kereskedelem", "Böjt"], 1, "Muszlim = alávető."),
    abcd("A Korán nyelve:", ["Latin", "Arab", "Görög", "Héber"], 1, "Szent szöveg arabul."),
    abcd("Zakát jelentése:", ["Imádság", "Adakozás a szegényeknek", "Zarándoklat", "Tanúságtétel"], 1, "Harmadik pillér."),
  ]),
  "zsidó-monoteizmus": quiz("end-extra", "Záró kvíz — kiegészítő", [
    abcd("A zsidó vallás istenfelfogása:", ["Politeizmus", "Monoteizmus", "Ateizmus", "Spartai kultusz"], 1, "Egy Isten."),
    abcd("A szombat jelentése:", ["Böjti nap", "Pihenő, szent nap", "Háború", "Adó"], 1, "Hetedik nap — szombat."),
    abcd("Jeruzsálem szerepe:", ["Tatár főváros", "Szent város, Templom", "Sparta", "Universitas"], 1, "Vallási központ."),
  ]),
  keresztenyseg: quiz("end-extra", "Záró kvíz — kiegészítő", [
    abcd("Ki legalizálta a kereszténységet?", ["Néró", "Konstantin", "Attila", "Periklész"], 1, "Milánói ediktum."),
    abcd("Ki tette államvallássá?", ["Augustus", "Theodosziusz", "Caesar", "Mohamed"], 1, "4. század vége."),
    abcd("A keresztény szó eredete:", ["Római polgár", "Krisztushoz tartozó", "Görög isten", "Kalifa"], 1, "Christos."),
  ]),
  kozepkor: quiz("end-extra", "Záró kvíz — kiegészítő", [
    abcd("Feudalizmus lényege:", ["Hűbér és birtok", "Demokrácia", "Ipari forradalom", "Ostrakizmus"], 0, "Ur — vazallus."),
    abcd("1095-ös esemény:", ["Honfoglalás", "II. Urban — keresztes hadjárat", "Mohács", "Aranybulla"], 1, "Keresztes mozgalom."),
    abcd("Nyugaton a középkorban:", ["Erős római császár mindenütt", "Széttagolt hatalom", "Athéni demokrácia", "Tatár királyság"], 1, "Feudális széttagoltság."),
  ]),
  "kozepkori-uradalom": quiz("end-extra", "Záró kvíz — kiegészítő", [
    abcd("Robot jelentése:", ["Adó pénzben", "Kötelező munka az úrnak", "Választás", "Zarándoklat"], 1, "Munkaszolgáltatás."),
    abcd("Az uradalom gazdasága:", ["Tőzsde", "Mezőgazdaság, önellátás", "Turizmus", "Haditengerészet"], 1, "Agrár egység."),
    abcd("A vár szerepe:", ["Csak templom", "Központ, raktár, védelem", "Spartai edzőtér", "Ostrakon tároló"], 1, "Uradalmi központ."),
  ]),
  parasztsag: quiz("end-extra", "Záró kvíz — kiegészítő", [
    abcd("A lakosság többsége:", ["Városban", "Falun", "Tengeren", "Kolostorban csak"], 1, "Agrár társadalom."),
    abcd("Jobbágy terhei:", ["Robot és adó", "Ostrakizmus", "Hadzs", "Szavazás"], 0, "Gazdasági kényszer."),
    abcd("Tipikus termés:", ["Gabona", "Csak arany", "Haditengerészet", "Ostrakon"], 0, "Kenyér alapanyag."),
  ]),
  "kozepkori-varos": quiz("end-extra", "Záró kvíz — kiegészítő", [
    abcd("Polgár tevékenysége:", ["Kereskedelem, ipar", "Robot kötelező mindig", "Spartai kiképzés", "Tatár adó"], 0, "Városi gazdaság."),
    abcd("Céh szerepe:", ["Katonai rend", "Ipartársulás", "Pápai választás", "Ostrakizmus"], 1, "Minőség, mesterség."),
    abcd("Városi privilégium:", ["Jogok, piac", "Jobbágyság", "Tilos kereskedelem", "Robot mindenkinek"], 0, "Vonzza a telepeseket."),
  ]),
  "egyhaz-hierarchia": quiz("end-extra", "Záró kvíz — kiegészítő", [
    abcd("A katolikus egyház feje:", ["Császár", "Pápa", "Polgármester", "Batu kán"], 1, "Róma — pápa."),
    abcd("Falusi lelkész:", ["Plébános", "Stratégus", "Eforosz", "Kalifa"], 0, "Plébános pap."),
    abcd("Investitúra vita:", ["Ki nevezi a püspököt", "Adósság", "Ostrakizmus", "Haditengerészet"], 0, "Szellemi vs világi hatalom."),
  ]),
  "roman-gotika": quiz("end-extra", "Záró kvíz — kiegészítő", [
    abcd("Gót boltozat:", ["Kerek ív", "Csúcsíves", "Lapos", "Nincs"], 1, "Magasabb, üvegablak."),
    abcd("Román templom jellemzője:", ["Vastag fal, kerek ív", "Acél váz", "Parthenón másolat", "Aqueduct"], 0, "Kora középkor."),
    abcd("Üvegmatricák:", ["Gót ablakok", "Román kis ablak", "Sparta", "Mekka"], 0, "Bibliai jelenetek."),
  ]),
  reneszansz: quiz("end-extra", "Záró kvíz — kiegészítő", [
    abcd("Humanizmus:", ["Antik kultúra, ember értéke", "Robot törlése", "Tatár invázió", "Spartai edzés"], 0, "Műveltség, oktatás."),
    abcd("Nyomdászat hatása:", ["Tudás gyors terjedése", "Tilos könyv", "Csak kézírás", "Ostrakizmus"], 0, "Gutenberg ~1450."),
    abcd("Renászansz kora:", ["Kr. e. 5. század", "Kr. u. 14–16. század", "19. század", "895"], 1, "Késő középkor — újkor."),
  ]),
  "iv-bela": quiz("end-extra", "Záró kvíz — kiegészítő", [
    abcd("IV. Béla felkészülése:", ["Várépítés", "Spartai szövetség", "Aranybulla", "Reneszánsz udvar"], 0, "Tatár fenyegetés."),
    abcd("Mohi éve:", ["895", "1241", "1526", "1456"], 1, "Tatár győzelem."),
    abcd("Kun betelepítés célja:", ["Határőrzés", "Universitas", "Ostrakizmus", "Parthenón"], 0, "Védelem — később lázadás."),
  ]),
  tatarjaras: quiz("end-extra", "Záró kvíz — kiegészítő", [
    abcd("Tatár vezető:", ["Attila", "Batu kán", "Napóleon", "Periklész"], 1, "Nyugati hadjárat."),
    abcd("1242-es visszavonulás oka:", ["Nagy Batu halála", "Magyar teljes győzelem", "Aranybulla", "Mohács"], 0, "Új kán választás."),
    abcd("Mohi:", ["Magyar vereség", "Spartai diadal", "Római győzelem", "Olimpia"], 0, "1241 — katasztrófa."),
  ]),
  "karoly-robert": quiz("end-extra", "Záró kvíz — kiegészítő", [
    abcd("Károly Róbert dinasztiája:", ["Anjou", "Árpád", "Tatár", "Spartai"], 0, "Anjou-ház."),
    abcd("Pénzügyi reform:", ["Aranyforint", "Euro", "Ostrakon", "Robot"], 0, "Stabil aranypénz."),
    abcd("Bányák:", ["Királyi bevétel", "Tilos bányászat", "Csak Sparta", "Mekka"], 0, "Bányakirályi jog."),
  ]),
  "luxemburgi-zsigmond": quiz("end-extra", "Záró kvíz — kiegészítő", [
    abcd("Zsigmond címei:", ["Magyar király és császár", "Csak falusi plébános", "Spartai eforosz", "Tatár kán"], 0, "Európai skála."),
    abcd("Konstanci zsinat:", ["Egyházi egység", "Athéni demokrácia", "Honfoglalás", "Mohács"], 0, "Több pápa vitája."),
    abcd("Alapított egyetem városa:", ["Buda", "Prága", "Sparta", "Mekka"], 1, "Központi Európa — oktatás."),
  ]),
  "hunyadi-diadala": quiz("end-extra", "Záró kvíz — kiegészítő", [
    abcd("Nándorfehérvár éve:", ["1241", "1456", "1526", "895"], 1, "Török elleni diadal."),
    abcd("Hunyadi szerepe:", ["Nádor, hadvezér", "Pápa", "Spartai király", "Kalifa"], 0, "Török elleni küzdelem."),
    abcd("1456 jelentése:", ["Ostrom visszaverése", "Mohács", "Honfoglalás", "Aranybulla"], 0, "Fontos védővár."),
  ]),
  "hunyadi-matyas": quiz("end-extra", "Záró kvíz — kiegészítő", [
    abcd("Fekete sereg:", ["Zsoldoshadsereg", "Jobbágy sereg ingyen", "Tatár", "Spartai"], 0, "Fizetett katonák."),
    abcd("Mátyás uralkodás kezdete:", ["1458", "1526", "1000", "895"], 0, "Fiatal király."),
    abcd("Corvina:", ["Könyvtár", "Adó", "Ostrakizmus", "Haditengerészet"], 0, "Humanista gyűjtemény."),
  ]),
  "geza-es-szent-istvan": quiz("end-extra", "Záró kvíz — kiegészítő", [
    abcd("Esztergom:", ["Főpapság", "Tatár főváros", "Sparta", "Mekka"], 0, "Érsekség."),
    abcd("Apostoli király:", ["Egyházi elismerés", "Spartai eforosz", "Kalifa", "Ostrakizmus"], 0, "Pápai elismerés."),
    abcd("Decretum:", ["István törvényei", "Tatár adó", "Universitas", "Parthenón"], 0, "Erkölcs, egyház."),
  ]),
  honfoglalas: quiz("end-extra", "Záró kvíz — kiegészítő", [
    abcd("Honfoglalás éve kb.:", ["895", "1222", "1526", "1456"], 0, "Kárpát-medence."),
    abcd("Vezető:", ["Árpád", "Periklész", "Mohamed", "Caesar"], 0, "Nagyfejedelem."),
    abcd("Hadviselés:", ["Lovas íjászok", "Csak gyalogság", "Haditengerészet", "Elefántok"], 0, "Steppe taktika."),
  ]),
};

export function endExtraBlock(slug: string): ContentBlock | undefined {
  return bySlug[slug];
}
