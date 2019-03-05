import { BigDecimal } from 'bigdecimal'

/**
 * Inputs accepted by WageTax2013.
 */
export interface WageTax2013Inputs {

  /**
   * 1, wenn die Anwendung des Faktorverfahrens gewählt wurden (nur in Steuerklasse IV)
   */
  AF?: number

  /**
   * Auf die Vollendung des 64. Lebensjahres folgende
   * Kalenderjahr (erforderlich, wenn ALTER1=1)
   */
  AJAHR?: number

  /**
   * 1, wenn das 64. Lebensjahr zu Beginn des Kalenderjahres vollendet wurde, in dem
   * der Lohnzahlungszeitraum endet (§ 24 a EStG), sonst = 0
   */
  ALTER1?: number

  /**
   * in VKAPA und VMT enthaltene Entschädigungen nach §24 Nummer 1 EStG in Cent
   */
  ENTSCH?: BigDecimal

  /**
   * eingetragener Faktor mit drei Nachkommastellen
   */
  F?: number

  /**
   * Jahresfreibetrag nach Maßgabe der Eintragungen auf der
   * Lohnsteuerkarte in Cents (ggf. 0)
   */
  JFREIB?: BigDecimal

  /**
   * Jahreshinzurechnungsbetrag in Cents (ggf. 0)
   */
  JHINZU?: BigDecimal

  /**
   * Voraussichtlicher Jahresarbeitslohn ohne sonstige Bezüge und ohne Vergütung für mehrjährige Tätigkeit in Cent.
   * Anmerkung: Die Eingabe dieses Feldes (ggf. 0) ist erforderlich bei Eingabe „sonsti-ger Bezüge“ (Feld SONSTB)
   * oder bei Eingabe der „Vergütung für mehrjährige Tätigkeit“ (Feld VMT).
   * Sind in einem vorangegangenen Abrechnungszeitraum bereits sonstige Bezüge gezahlt worden, so sind sie dem
   * voraussichtlichen Jahresarbeitslohn hinzuzurechnen. Vergütungen für mehrere Jahres aus einem vorangegangenen
   * Abrechnungszeitraum sind in voller Höhe hinzuzurechnen.
   */
  JRE4?: BigDecimal

  /**
   * In JRE4 enthaltene Versorgungsbezuege in Cents (ggf. 0)
   */
  JVBEZ?: BigDecimal

  /**
   * Merker für die Vorsorgepauschale
   * 2 = der Arbeitnehmer ist NICCHT in der gesetzlichen Rentenversicherung versichert.
   * 1 = der Arbeitnehmer ist in der gesetzlichen Rentenversicherung versichert, es gilt die
   * Beitragsbemessungsgrenze OST.
   * 0 = der Arbeitnehmer ist in der gesetzlichen Rentenversicherung versichert, es gilt die
   * Beitragsbemessungsgrenze WEST.
   */
  KRV?: number

  /**
   * Lohnzahlungszeitraum:
   * 1 = Jahr
   * 2 = Monat
   * 3 = Woche
   * 4 = Tag
   */
  LZZ?: number

  /**
   * In der Lohnsteuerkarte des Arbeitnehmers eingetragener Freibetrag für
   * den Lohnzahlungszeitraum in Cent
   */
  LZZFREIB?: BigDecimal

  /**
   * In der Lohnsteuerkarte des Arbeitnehmers eingetragener Hinzurechnungsbetrag
   * für den Lohnzahlungszeitraum in Cent
   */
  LZZHINZU?: BigDecimal

  /**
   * Dem Arbeitgeber mitgeteilte Zahlungen des Arbeitnehmers zur privaten
   * Kranken- bzw. Pflegeversicherung im Sinne des §10 Abs. 1 Nr. 3 EStG 2010
   * als Monatsbetrag in Cent (der Wert ist inabhängig vom Lohnzahlungszeitraum immer
   * als Monatsbetrag anzugeben).
   */
  PKPV?: BigDecimal

  /**
   * Krankenversicherung:
   * 0 = gesetzlich krankenversicherte Arbeitnehmer
   * 1 = ausschließlich privat krankenversicherte Arbeitnehmer OHNE Arbeitgeberzuschuss
   * 2 = ausschließlich privat krankenversicherte Arbeitnehmer MIT Arbeitgeberzuschuss
   */
  PKV?: number

  /**
   * 1, wenn bei der sozialen Pflegeversicherung die Besonderheiten in Sachsen zu berücksichtigen sind bzw.
   * zu berücksichtigen wären, sonst 0.
   */
  PVS?: number

  /**
   * 1, wenn er der Arbeitnehmer den Zuschlag zur sozialen Pflegeversicherung
   * zu zahlen hat, sonst 0.
   */
  PVZ?: number

  /**
   * Religionsgemeinschaft des Arbeitnehmers lt. Lohnsteuerkarte (bei
   * keiner Religionszugehoerigkeit = 0)
   */
  R?: number

  /**
   * Steuerpflichtiger Arbeitslohn vor Beruecksichtigung der Freibetraege
   * fuer Versorgungsbezuege, des Altersentlastungsbetrags und des auf
   * der Lohnsteuerkarte fuer den Lohnzahlungszeitraum eingetragenen
   * Freibetrags in Cents.
   */
  RE4?: BigDecimal

  /**
   * Sonstige Bezuege (ohne Verguetung aus mehrjaehriger Taetigkeit) einschliesslich
   * Sterbegeld bei Versorgungsbezuegen sowie Kapitalauszahlungen/Abfindungen,
   * soweit es sich nicht um Bezuege fuer mehrere Jahre handelt in Cents (ggf. 0)
   */
  SONSTB?: BigDecimal

  /**
   * Sterbegeld bei Versorgungsbezuegen sowie Kapitalauszahlungen/Abfindungen,
   * soweit es sich nicht um Bezuege fuer mehrere Jahre handelt
   * (in SONSTB enthalten) in Cents
   */
  STERBE?: BigDecimal

  /**
   * Steuerklasse:
   * 1 = I
   * 2 = II
   * 3 = III
   * 4 = IV
   * 5 = V
   * 6 = VI
   */
  STKL?: number

  /**
   * In RE4 enthaltene Versorgungsbezuege in Cents (ggf. 0)
   */
  VBEZ?: BigDecimal

  /**
   * Vorsorgungsbezug im Januar 2005 bzw. fuer den ersten vollen Monat
   * in Cents
   */
  VBEZM?: BigDecimal

  /**
   * Voraussichtliche Sonderzahlungen im Kalenderjahr des Versorgungsbeginns
   * bei Versorgungsempfaengern ohne Sterbegeld, Kapitalauszahlungen/Abfindungen
   * bei Versorgungsbezuegen in Cents
   */
  VBEZS?: BigDecimal

  /**
   * In SONSTB enthaltene Versorgungsbezuege einschliesslich Sterbegeld
   * in Cents (ggf. 0)
   */
  VBS?: BigDecimal

  /**
   * Jahr, in dem der Versorgungsbezug erstmalig gewaehrt wurde; werden
   * mehrere Versorgungsbezuege gezahlt, so gilt der aelteste erstmalige Bezug
   */
  VJAHR?: number

  /**
   * Kapitalauszahlungen / Abfindungen / Nachzahlungen bei Versorgungsbezügen
   * für mehrere Jahre in Cent (ggf. 0)
   */
  VKAPA?: BigDecimal

  /**
   * Vergütung für mehrjährige Tätigkeit ohne Kapitalauszahlungen und ohne Abfindungen
   * bei Versorgungsbezügen in Cent (ggf. 0)
   */
  VMT?: BigDecimal

  /**
   * Zahl der Freibetraege fuer Kinder (eine Dezimalstelle, nur bei Steuerklassen
   * I, II, III und IV)
   */
  ZKF?: BigDecimal

  /**
   * Zahl der Monate, fuer die Versorgungsbezuege gezahlt werden (nur
   * erforderlich bei Jahresberechnung (LZZ = 1)
   */
  ZMVB?: number

  /**
   * In JRE4 enthaltene Entschädigungen nach § 24 Nummer 1 EStG in Cent
   */
  JRE4ENT?: BigDecimal

  /**
   * In SONSTB enthaltene Entschädigungen nach § 24 Nummer 1 EStG in Cent
   */
  SONSTENT?: BigDecimal
}

/**
 * Outputs returned by WageTax2013.
 */
export interface WageTax2013Outputs {

  /**
   * Bemessungsgrundlage fuer die Kirchenlohnsteuer in Cents
   */
  BK: BigDecimal

  /**
   * Bemessungsgrundlage der sonstigen Einkuenfte (ohne Verguetung
   * fuer mehrjaehrige Taetigkeit) fuer die Kirchenlohnsteuer in Cents
   */
  BKS: BigDecimal

  
  BKV: BigDecimal

  /**
   * Fuer den Lohnzahlungszeitraum einzubehaltende Lohnsteuer in Cents
   */
  LSTLZZ: BigDecimal

  /**
   * Fuer den Lohnzahlungszeitraum einzubehaltender Solidaritaetszuschlag
   * in Cents
   */
  SOLZLZZ: BigDecimal

  /**
   * Solidaritaetszuschlag fuer sonstige Bezuege (ohne Verguetung fuer mehrjaehrige
   * Taetigkeit) in Cents
   */
  SOLZS: BigDecimal

  /**
   * Solidaritaetszuschlag fuer die Verguetung fuer mehrjaehrige Taetigkeit in
   * Cents
   */
  SOLZV: BigDecimal

  /**
   * Lohnsteuer fuer sonstige Einkuenfte (ohne Verguetung fuer mehrjaehrige
   * Taetigkeit) in Cents
   */
  STS: BigDecimal

  /**
   * Lohnsteuer fuer Verguetung fuer mehrjaehrige Taetigkeit in Cents
   */
  STV: BigDecimal
}

/* CONSTANTS */

// Tabelle fuer die Vomhundertsaetze des Versorgungsfreibetrags
const TAB1: BigDecimal[] = [BigDecimal.ZERO(), new BigDecimal('0.4'), new BigDecimal('0.384'), new BigDecimal('0.368'), new BigDecimal('0.352'), new BigDecimal('0.336'), new BigDecimal('0.32'), new BigDecimal('0.304'), new BigDecimal('0.288'), new BigDecimal('0.272'), new BigDecimal('0.256'), new BigDecimal('0.24'), new BigDecimal('0.224'), new BigDecimal('0.208'), new BigDecimal('0.192'), new BigDecimal('0.176'), new BigDecimal('0.16'), new BigDecimal('0.152'), new BigDecimal('0.144'), new BigDecimal('0.136'), new BigDecimal('0.128'), new BigDecimal('0.12'), new BigDecimal('0.112'), new BigDecimal('0.104'), new BigDecimal('0.096'), new BigDecimal('0.088'), new BigDecimal('0.08'), new BigDecimal('0.072'), new BigDecimal('0.064'), new BigDecimal('0.056'), new BigDecimal('0.048'), new BigDecimal('0.04'), new BigDecimal('0.032'), new BigDecimal('0.024'), new BigDecimal('0.016'), new BigDecimal('0.008'), BigDecimal.ZERO()]
// Tabelle fuer die Hoechstbetrage des Versorgungsfreibetrags
const TAB2: BigDecimal[] = [BigDecimal.ZERO(), new BigDecimal('3000'), new BigDecimal('2880'), new BigDecimal('2760'), new BigDecimal('2640'), new BigDecimal('2520'), new BigDecimal('2400'), new BigDecimal('2280'), new BigDecimal('2160'), new BigDecimal('2040'), new BigDecimal('1920'), new BigDecimal('1800'), new BigDecimal('1680'), new BigDecimal('1560'), new BigDecimal('1440'), new BigDecimal('1320'), new BigDecimal('1200'), new BigDecimal('1140'), new BigDecimal('1080'), new BigDecimal('1020'), new BigDecimal('960'), new BigDecimal('900'), new BigDecimal('840'), new BigDecimal('780'), new BigDecimal('720'), new BigDecimal('660'), new BigDecimal('600'), new BigDecimal('540'), new BigDecimal('480'), new BigDecimal('420'), new BigDecimal('360'), new BigDecimal('300'), new BigDecimal('240'), new BigDecimal('180'), new BigDecimal('120'), new BigDecimal('60'), BigDecimal.ZERO()]
// Tabelle fuer die Zuschlaege zum Versorgungsfreibetrag
const TAB3: BigDecimal[] = [BigDecimal.ZERO(), new BigDecimal('900'), new BigDecimal('864'), new BigDecimal('828'), new BigDecimal('792'), new BigDecimal('756'), new BigDecimal('720'), new BigDecimal('684'), new BigDecimal('648'), new BigDecimal('612'), new BigDecimal('576'), new BigDecimal('540'), new BigDecimal('504'), new BigDecimal('468'), new BigDecimal('432'), new BigDecimal('396'), new BigDecimal('360'), new BigDecimal('342'), new BigDecimal('324'), new BigDecimal('306'), new BigDecimal('288'), new BigDecimal('270'), new BigDecimal('252'), new BigDecimal('234'), new BigDecimal('216'), new BigDecimal('198'), new BigDecimal('180'), new BigDecimal('162'), new BigDecimal('144'), new BigDecimal('126'), new BigDecimal('108'), new BigDecimal('90'), new BigDecimal('72'), new BigDecimal('54'), new BigDecimal('36'), new BigDecimal('18'), BigDecimal.ZERO()]
// Tabelle fuer die Vomhundertsaetze des Altersentlastungsbetrags
const TAB4: BigDecimal[] = [BigDecimal.ZERO(), new BigDecimal('0.4'), new BigDecimal('0.384'), new BigDecimal('0.368'), new BigDecimal('0.352'), new BigDecimal('0.336'), new BigDecimal('0.32'), new BigDecimal('0.304'), new BigDecimal('0.288'), new BigDecimal('0.272'), new BigDecimal('0.256'), new BigDecimal('0.24'), new BigDecimal('0.224'), new BigDecimal('0.208'), new BigDecimal('0.192'), new BigDecimal('0.176'), new BigDecimal('0.16'), new BigDecimal('0.152'), new BigDecimal('0.144'), new BigDecimal('0.136'), new BigDecimal('0.128'), new BigDecimal('0.12'), new BigDecimal('0.112'), new BigDecimal('0.104'), new BigDecimal('0.096'), new BigDecimal('0.088'), new BigDecimal('0.08'), new BigDecimal('0.072'), new BigDecimal('0.064'), new BigDecimal('0.056'), new BigDecimal('0.048'), new BigDecimal('0.04'), new BigDecimal('0.032'), new BigDecimal('0.024'), new BigDecimal('0.016'), new BigDecimal('0.008'), BigDecimal.ZERO()]
// Tabelle fuer die Hoechstbetraege des Altersentlastungsbetrags
const TAB5: BigDecimal[] = [BigDecimal.ZERO(), new BigDecimal('1900'), new BigDecimal('1824'), new BigDecimal('1748'), new BigDecimal('1672'), new BigDecimal('1596'), new BigDecimal('1520'), new BigDecimal('1444'), new BigDecimal('1368'), new BigDecimal('1292'), new BigDecimal('1216'), new BigDecimal('1140'), new BigDecimal('1064'), new BigDecimal('988'), new BigDecimal('912'), new BigDecimal('836'), new BigDecimal('760'), new BigDecimal('722'), new BigDecimal('684'), new BigDecimal('646'), new BigDecimal('608'), new BigDecimal('570'), new BigDecimal('532'), new BigDecimal('494'), new BigDecimal('456'), new BigDecimal('418'), new BigDecimal('380'), new BigDecimal('342'), new BigDecimal('304'), new BigDecimal('266'), new BigDecimal('228'), new BigDecimal('190'), new BigDecimal('152'), new BigDecimal('114'), new BigDecimal('76'), new BigDecimal('38'), BigDecimal.ZERO()]
// Zahlenkonstanten fuer im Plan oft genutzte BigDecimal Werte
const ZAHL0: BigDecimal = BigDecimal.ZERO()

const ZAHL1: BigDecimal = BigDecimal.ONE()

const ZAHL2: BigDecimal = new BigDecimal('2')

const ZAHL3: BigDecimal = new BigDecimal('3')

const ZAHL4: BigDecimal = new BigDecimal('4')

const ZAHL5: BigDecimal = new BigDecimal('5')

const ZAHL6: BigDecimal = new BigDecimal('6')

const ZAHL7: BigDecimal = new BigDecimal('7')

const ZAHL8: BigDecimal = new BigDecimal('8')

const ZAHL9: BigDecimal = new BigDecimal('9')

const ZAHL10: BigDecimal = BigDecimal.TEN()

const ZAHL11: BigDecimal = new BigDecimal('11')

const ZAHL12: BigDecimal = new BigDecimal('12')

const ZAHL100: BigDecimal = new BigDecimal('100')

const ZAHL360: BigDecimal = new BigDecimal('360')

const ZAHL500: BigDecimal = new BigDecimal('500')

const ZAHL700: BigDecimal = new BigDecimal('700')

const ZAHL1000: BigDecimal = new BigDecimal('1000')
// Rentenbemessungs-Grenze neue Bundesländer in EUR
const RENTBEMESSUNGSGR_OST_2013: BigDecimal = new BigDecimal('58800')
// Rentenbemessungs-Grenze alte Bundesländer in EUR
const RENTBEMESSUNGSGR_WEST: BigDecimal = new BigDecimal('69600')

/* INTERNALS */

// spezielles ZVE f. Einkommensteuer-Berechnung, dieses darf negativ werden.
let zveEkSt: BigDecimal = BigDecimal.ZERO()

let zveGemeinsam: BigDecimal = BigDecimal.ZERO()
// Altersentlastungsbetrag nach Alterseinkünftegesetz in €,
// Cent (2 Dezimalstellen)
let ALTE: BigDecimal = BigDecimal.ZERO()
// Arbeitnehmer-Pauschbetrag in EURO
let ANP: BigDecimal = BigDecimal.ZERO()
// Auf den Lohnzahlungszeitraum entfallender Anteil von Jahreswerten
// auf ganze Cents abgerundet
let ANTEIL1: BigDecimal = BigDecimal.ZERO()
// Bemessungsgrundlage für Altersentlastungsbetrag in €, Cent
// (2 Dezimalstellen)
let BMG: BigDecimal = BigDecimal.ZERO()
// Differenz zwischen ST1 und ST2 in EURO
let DIFF: BigDecimal = BigDecimal.ZERO()
// Entlastungsbetrag fuer Alleinerziehende in EURO
let EFA: BigDecimal = BigDecimal.ZERO()
// Versorgungsfreibetrag in €, Cent (2 Dezimalstellen)
let FVB: BigDecimal = BigDecimal.ZERO()
// Versorgungsfreibetrag in €, Cent (2 Dezimalstellen) für die Berechnung
// der Lohnsteuer für den sonstigen Bezug
let FVBSO: BigDecimal = BigDecimal.ZERO()
// Zuschlag zum Versorgungsfreibetrag in EURO
let FVBZ: BigDecimal = BigDecimal.ZERO()
// Zuschlag zum Versorgungsfreibetrag in EURO fuer die Berechnung
// der Lohnsteuer beim sonstigen Bezug
let FVBZSO: BigDecimal = BigDecimal.ZERO()
// Maximaler Altersentlastungsbetrag in €
let HBALTE: BigDecimal = BigDecimal.ZERO()
// Massgeblicher maximaler Versorgungsfreibetrag in €
let HFVB: BigDecimal = BigDecimal.ZERO()
// Massgeblicher maximaler Zuschlag zum Versorgungsfreibetrag in €,Cent
// (2 Dezimalstellen)
let HFVBZ: BigDecimal = BigDecimal.ZERO()
// Massgeblicher maximaler Zuschlag zum Versorgungsfreibetrag in €, Cent
// (2 Dezimalstellen) für die Berechnung der Lohnsteuer für den
// sonstigen Bezug
let HFVBZSO: BigDecimal = BigDecimal.ZERO()
// Nummer der Tabellenwerte fuer Versorgungsparameter
let J: number = 0
// Jahressteuer nach § 51a EStG, aus der Solidaritaetszuschlag und
// Bemessungsgrundlage fuer die Kirchenlohnsteuer ermittelt werden in EURO
let JBMG: BigDecimal = BigDecimal.ZERO()
// Auf einen Jahreslohn hochgerechneter LZZFREIB in €, Cent
// (2 Dezimalstellen)
let JLFREIB: BigDecimal = BigDecimal.ZERO()
// Auf einen Jahreslohn hochgerechnete LZZHINZU in €, Cent
// (2 Dezimalstellen)
let JLHINZU: BigDecimal = BigDecimal.ZERO()
// Jahreswert, dessen Anteil fuer einen Lohnzahlungszeitraum in
// UPANTEIL errechnet werden soll in Cents
let JW: BigDecimal = BigDecimal.ZERO()
// Nummer der Tabellenwerte fuer Parameter bei Altersentlastungsbetrag
let K: number = 0
// Merker für Berechnung Lohnsteuer für mehrjährige Tätigkeit.
// 0 = normale Steuerberechnung
// 1 = Steuerberechnung für mehrjährige Tätigkeit
// 2 = entfällt
let KENNVMT: number = 0
// Summe der Freibetraege fuer Kinder in EURO
let KFB: BigDecimal = BigDecimal.ZERO()
// Beitragssatz des Arbeitgebers zur Krankenversicherung
let KVSATZAG: BigDecimal = BigDecimal.ZERO()
// Beitragssatz des Arbeitnehmers zur Krankenversicherung
let KVSATZAN: BigDecimal = BigDecimal.ZERO()
// Kennzahl fuer die Einkommensteuer-Tabellenart:
// 1 = Grundtabelle
// 2 = Splittingtabelle
let KZTAB: number = 0
// Jahreslohnsteuer in EURO
let LSTJAHR: BigDecimal = BigDecimal.ZERO()
// Zwischenfelder der Jahreslohnsteuer in Cent
let LST1: BigDecimal = BigDecimal.ZERO()

let LST2: BigDecimal = BigDecimal.ZERO()

let LST3: BigDecimal = BigDecimal.ZERO()

let LSTOSO: BigDecimal = BigDecimal.ZERO()

let LSTSO: BigDecimal = BigDecimal.ZERO()
// Mindeststeuer fuer die Steuerklassen V und VI in EURO
let MIST: BigDecimal = BigDecimal.ZERO()
// Beitragssatz des Arbeitgebers zur Pflegeversicherung
let PVSATZAG: BigDecimal = BigDecimal.ZERO()
// Beitragssatz des Arbeitnehmers zur Pflegeversicherung
let PVSATZAN: BigDecimal = BigDecimal.ZERO()
// Rechenwert in Gleitkommadarstellung
let RW: BigDecimal = BigDecimal.ZERO()
// Sonderausgaben-Pauschbetrag in EURO
let SAP: BigDecimal = BigDecimal.ZERO()
// Freigrenze fuer den Solidaritaetszuschlag in EURO
let SOLZFREI: BigDecimal = BigDecimal.ZERO()
// Solidaritaetszuschlag auf die Jahreslohnsteuer in EURO, C (2 Dezimalstellen)
let SOLZJ: BigDecimal = BigDecimal.ZERO()
// Zwischenwert fuer den Solidaritaetszuschlag auf die Jahreslohnsteuer
// in EURO, C (2 Dezimalstellen)
let SOLZMIN: BigDecimal = BigDecimal.ZERO()
// Tarifliche Einkommensteuer in EURO
let ST: BigDecimal = BigDecimal.ZERO()
// Tarifliche Einkommensteuer auf das 1,25-fache ZX in EURO
let ST1: BigDecimal = BigDecimal.ZERO()
// Tarifliche Einkommensteuer auf das 0,75-fache ZX in EURO
let ST2: BigDecimal = BigDecimal.ZERO()
// Zwischenfeld zur Ermittlung der Steuer auf Vergütungen für mehrjährige Tätigkeit
let STOVMT: BigDecimal = BigDecimal.ZERO()
// Bemessungsgrundlage fuer den Versorgungsfreibetrag in Cents
let VBEZB: BigDecimal = BigDecimal.ZERO()
// Bemessungsgrundlage für den Versorgungsfreibetrag in Cent für
// den sonstigen Bezug
let VBEZBSO: BigDecimal = BigDecimal.ZERO()
// Hoechstbetrag der Vorsorgepauschale nach Alterseinkuenftegesetz in EURO, C
let VHB: BigDecimal = BigDecimal.ZERO()
// Vorsorgepauschale in EURO, C (2 Dezimalstellen)
let VSP: BigDecimal = BigDecimal.ZERO()
// Vorsorgepauschale nach Alterseinkuenftegesetz in EURO, C
let VSPN: BigDecimal = BigDecimal.ZERO()
// Zwischenwert 1 bei der Berechnung der Vorsorgepauschale nach
// dem Alterseinkuenftegesetz in EURO, C (2 Dezimalstellen)
let VSP1: BigDecimal = BigDecimal.ZERO()
// Zwischenwert 2 bei der Berechnung der Vorsorgepauschale nach
// dem Alterseinkuenftegesetz in EURO, C (2 Dezimalstellen)
let VSP2: BigDecimal = BigDecimal.ZERO()
// Vorsorgepauschale mit Teilbeträgen für die gesetzliche Kranken- und
// soziale Pflegeversicherung nach fiktiven Beträgen oder ggf. für die
// private Basiskrankenversicherung und private Pflege-Pflichtversicherung
// in Euro, Cent (2 Dezimalstellen)
let VSP3: BigDecimal = BigDecimal.ZERO()
// Hoechstbetrag der Vorsorgepauschale nach § 10c Abs. 3 EStG in EURO
let VSPKURZ: BigDecimal = BigDecimal.ZERO()
// Hoechstbetrag der Vorsorgepauschale nach § 10c Abs. 2 Nr. 2 EStG in EURO
let VSPMAX1: BigDecimal = BigDecimal.ZERO()
// Hoechstbetrag der Vorsorgepauschale nach § 10c Abs. 2 Nr. 3 EStG in EURO
let VSPMAX2: BigDecimal = BigDecimal.ZERO()
// Vorsorgepauschale nach § 10c Abs. 2 Satz 2 EStG vor der Hoechstbetragsberechnung
// in EURO, C (2 Dezimalstellen)
let VSPO: BigDecimal = BigDecimal.ZERO()
// Fuer den Abzug nach § 10c Abs. 2 Nrn. 2 und 3 EStG verbleibender
// Rest von VSPO in EURO, C (2 Dezimalstellen)
let VSPREST: BigDecimal = BigDecimal.ZERO()
// Hoechstbetrag der Vorsorgepauschale nach § 10c Abs. 2 Nr. 1 EStG
// in EURO, C (2 Dezimalstellen)
let VSPVOR: BigDecimal = BigDecimal.ZERO()
// Zu versteuerndes Einkommen gem. § 32a Abs. 1 und 2 EStG €, C
// (2 Dezimalstellen)
let X: BigDecimal = BigDecimal.ZERO()
// gem. § 32a Abs. 1 EStG (6 Dezimalstellen)
let Y: BigDecimal = BigDecimal.ZERO()
// Auf einen Jahreslohn hochgerechnetes RE4 in €, C (2 Dezimalstellen)
// nach Abzug der Freibeträge nach § 39 b Abs. 2 Satz 3 und 4.
let ZRE4: BigDecimal = BigDecimal.ZERO()
// Auf einen Jahreslohn hochgerechnetes RE4 in €, C (2 Dezimalstellen)
let ZRE4J: BigDecimal = BigDecimal.ZERO()
// Auf einen Jahreslohn hochgerechnetes RE4 in €, C (2 Dezimalstellen)
// nach Abzug des Versorgungsfreibetrags und des Alterentlastungsbetrags
// zur Berechnung der Vorsorgepauschale in €, Cent (2 Dezimalstellen)
let ZRE4VP: BigDecimal = BigDecimal.ZERO()
// Feste Tabellenfreibeträge (ohne Vorsorgepauschale) in €, Cent
// (2 Dezimalstellen)
let ZTABFB: BigDecimal = BigDecimal.ZERO()
// Auf einen Jahreslohn hochgerechnetes (VBEZ abzueglich FVB) in
// EURO, C (2 Dezimalstellen)
let ZVBEZ: BigDecimal = BigDecimal.ZERO()
// Auf einen Jahreslohn hochgerechnetes VBEZ in €, C (2 Dezimalstellen)
let ZVBEZJ: BigDecimal = BigDecimal.ZERO()
// Zu versteuerndes Einkommen in €, C (2 Dezimalstellen)
let ZVE: BigDecimal = BigDecimal.ZERO()
// Zwischenfelder zu X fuer die Berechnung der Steuer nach § 39b
// Abs. 2 Satz 7 EStG in €
let ZX: BigDecimal = BigDecimal.ZERO()

let ZZX: BigDecimal = BigDecimal.ZERO()

let HOCH: BigDecimal = BigDecimal.ZERO()

let VERGL: BigDecimal = BigDecimal.ZERO()
// Jahreswert der berücksichtigten Beiträge zur privaten Basis-Krankenversicherung und
// privaten Pflege-Pflichtversicherung (ggf. auch die Mindestvorsorgepauschale) in Cent.
let VKV: BigDecimal = BigDecimal.ZERO()
// Für den Lohnzahlungszeitraum berücksichtigte Beiträge des Arbeitnehmers zur
// privaten Basis-Krankenversicherung und privaten Pflege-Pflichtversicherung (ggf. auch
// die Mindestvorsorgepauschale) in Cent beim laufenden Arbeitslohn. Für Zwecke der Lohn-
// steuerbescheinigung sind die einzelnen Ausgabewerte außerhalb des eigentlichen Lohn-
// steuerbescheinigungsprogramms zu addieren; hinzuzurechnen sind auch die Ausgabewerte
// VKVSONST
let VKVLZZ: BigDecimal = BigDecimal.ZERO()
// Für den Lohnzahlungszeitraum berücksichtigte Beiträge des Arbeitnehmers
// zur privaten Basis-Krankenversicherung und privaten Pflege-Pflichtversicherung (ggf.
// auch die Mindestvorsorgepauschale) in Cent bei sonstigen Bezügen. Der Ausgabewert kann
// auch negativ sein. Für tarifermäßigt zu besteuernde Vergütungen für mehrjährige
// Tätigkeiten enthält der PAP keinen entsprechenden Ausgabewert.
let VKVSONST: BigDecimal = BigDecimal.ZERO()

/**
 * Calculates the WageTax2013.
 *
 * @params inputs - The inputs for the calculation.
 * @returns The outputs of the calculation.
 */
export function calculateWageTax(inputs: WageTax2013Inputs): WageTax2013Outputs {
  // Inputs
  let {
    AF = 1.0,
    AJAHR = 0,
    ALTER1 = 0,
    ENTSCH = BigDecimal.ZERO(),
    F = 1.0,
    JFREIB = BigDecimal.ZERO(),
    JHINZU = BigDecimal.ZERO(),
    JRE4 = BigDecimal.ZERO(),
    JVBEZ = BigDecimal.ZERO(),
    KRV = 0,
    LZZ = 0,
    LZZFREIB = BigDecimal.ZERO(),
    LZZHINZU = BigDecimal.ZERO(),
    PKPV = BigDecimal.ZERO(),
    PKV = 0,
    PVS = 0,
    PVZ = 0,
    R = 0,
    RE4 = BigDecimal.ZERO(),
    SONSTB = BigDecimal.ZERO(),
    STERBE = BigDecimal.ZERO(),
    STKL = 0,
    VBEZ = BigDecimal.ZERO(),
    VBEZM = BigDecimal.ZERO(),
    VBEZS = BigDecimal.ZERO(),
    VBS = BigDecimal.ZERO(),
    VJAHR = 0,
    VKAPA = BigDecimal.ZERO(),
    VMT = BigDecimal.ZERO(),
    ZKF = BigDecimal.ZERO(),
    ZMVB = 0,
    JRE4ENT = BigDecimal.ZERO(),
    SONSTENT = BigDecimal.ZERO(),
  } = inputs

  // Outputs
  let BK = BigDecimal.ZERO()
  let BKS = BigDecimal.ZERO()
  let BKV = BigDecimal.ZERO()
  let LSTLZZ = BigDecimal.ZERO()
  let SOLZLZZ = BigDecimal.ZERO()
  let SOLZS = BigDecimal.ZERO()
  let SOLZV = BigDecimal.ZERO()
  let STS = BigDecimal.ZERO()
  let STV = BigDecimal.ZERO()

  function MRE4JL(): void {
    if (LZZ === 1) {
      ZRE4J = RE4.divide(ZAHL100, 2, BigDecimal.ROUND_DOWN)
      ZVBEZJ = VBEZ.divide(ZAHL100, 2, BigDecimal.ROUND_DOWN)
      JLFREIB = LZZFREIB.divide(ZAHL100, 2, BigDecimal.ROUND_DOWN)
      JLHINZU = LZZHINZU.divide(ZAHL100, 2, BigDecimal.ROUND_DOWN)
    }
    else {
      if (LZZ === 2) {
        ZRE4J = (RE4.multiply(ZAHL12)).divide(ZAHL100, 2, BigDecimal.ROUND_DOWN)
        ZVBEZJ = (VBEZ.multiply(ZAHL12)).divide(ZAHL100, 2, BigDecimal.ROUND_DOWN)
        JLFREIB = (LZZFREIB.multiply(ZAHL12)).divide(ZAHL100, 2, BigDecimal.ROUND_DOWN)
        JLHINZU = (LZZHINZU.multiply(ZAHL12)).divide(ZAHL100, 2, BigDecimal.ROUND_DOWN)
      }
      else {
        if (LZZ === 3) {
          ZRE4J = (RE4.multiply(ZAHL360)).divide(ZAHL700, 2, BigDecimal.ROUND_DOWN)
          ZVBEZJ = (VBEZ.multiply(ZAHL360)).divide(ZAHL700, 2, BigDecimal.ROUND_DOWN)
          JLFREIB = (LZZFREIB.multiply(ZAHL360)).divide(ZAHL700, 2, BigDecimal.ROUND_DOWN)
          JLHINZU = (LZZHINZU.multiply(ZAHL360)).divide(ZAHL700, 2, BigDecimal.ROUND_DOWN)
        }
        else {
          ZRE4J = (RE4.multiply(ZAHL360)).divide(ZAHL100, 2, BigDecimal.ROUND_DOWN)
          ZVBEZJ = (VBEZ.multiply(ZAHL360)).divide(ZAHL100, 2, BigDecimal.ROUND_DOWN)
          JLFREIB = (LZZFREIB.multiply(ZAHL360)).divide(ZAHL100, 2, BigDecimal.ROUND_DOWN)
          JLHINZU = (LZZHINZU.multiply(ZAHL360)).divide(ZAHL100, 2, BigDecimal.ROUND_DOWN)
        }
      }
    }
    if (AF === 0) {
      F = 1
    }
  } /* of MRE4JL */

  function MRE4(): void {
    if (ZVBEZJ.compareTo(BigDecimal.ZERO()) === 0) {
      FVBZ = BigDecimal.ZERO()
      FVB = BigDecimal.ZERO()
      FVBZSO = BigDecimal.ZERO()
      FVBSO = BigDecimal.ZERO()
    }
    else {
      if (VJAHR < 2006) {
        J = 1
      }
      else {
        if (VJAHR < 2040) {
          J = VJAHR - 2004
        }
        else {
          J = 36
        }
      }
      if (LZZ === 1) {
        VBEZB = (VBEZM.multiply(new BigDecimal(String(ZMVB)))).add(VBEZS)
        HFVB = TAB2[J].divide(ZAHL12).multiply(new BigDecimal(String(ZMVB)))
        FVBZ = TAB3[J].divide(ZAHL12).multiply(new BigDecimal(String(ZMVB))).setScale(0, BigDecimal.ROUND_UP)
      }
      else {
        VBEZB = ((VBEZM.multiply(ZAHL12)).add(VBEZS)).setScale(2, BigDecimal.ROUND_DOWN)
        HFVB = TAB2[J]
        FVBZ = TAB3[J]
      }
      FVB = ((VBEZB.multiply(TAB1[J]))).divide(ZAHL100).setScale(2, BigDecimal.ROUND_UP)
      if (FVB.compareTo(HFVB) === 1) {
        FVB = HFVB
      }
      FVBSO = (FVB.add((VBEZBSO.multiply(TAB1[J])).divide(ZAHL100))).setScale(2, BigDecimal.ROUND_UP)
      if (FVBSO.compareTo(TAB2[J]) === 1) {
        FVBSO = TAB2[J]
      }
      HFVBZSO = (((VBEZB.add(VBEZBSO)).divide(ZAHL100)).subtract(FVBSO)).setScale(2, BigDecimal.ROUND_DOWN)
      FVBZSO = (FVBZ.add((VBEZBSO).divide(ZAHL100))).setScale(0, BigDecimal.ROUND_UP)
      if (FVBZSO.compareTo(HFVBZSO) === 1) {
        FVBZSO = HFVBZSO.setScale(0, BigDecimal.ROUND_UP)
      }
      if (FVBZSO.compareTo(TAB3[J]) === 1) {
        FVBZSO = TAB3[J]
      }
      HFVBZ = ((VBEZB.divide(ZAHL100)).subtract(FVB)).setScale(2, BigDecimal.ROUND_DOWN)
      if (FVBZ.compareTo(HFVBZ) === 1) {
        FVBZ = HFVBZ.setScale(0, BigDecimal.ROUND_UP)
      }
    }
    MRE4ALTE()
  } /* of MRE4 */

  function MRE4ALTE(): void {
    if (ALTER1 === 0) {
      ALTE = BigDecimal.ZERO()
    }
    else {
      if (AJAHR < 2006) {
        K = 1
      }
      else {
        if (AJAHR < 2040) {
          K = AJAHR - 2004
        }
        else {
          K = 36
        }
      }
      BMG = ZRE4J.subtract(ZVBEZJ)
      ALTE = (BMG.multiply(TAB4[K])).setScale(0, BigDecimal.ROUND_UP)
      HBALTE = TAB5[K]
      if (ALTE.compareTo(HBALTE) === 1) {
        ALTE = HBALTE
      }
    }
  } /* of MRE4ALTE */

  function MRE4ABZ(): void {
    ZRE4 = (ZRE4J.subtract(FVB).subtract(ALTE).subtract(JLFREIB).add(JLHINZU)).setScale(2, BigDecimal.ROUND_DOWN)
    if (ZRE4.compareTo(BigDecimal.ZERO()) === -1) {
      ZRE4 = BigDecimal.ZERO()
    }
    ZRE4VP = ZRE4J
    if (KENNVMT === 2) {
      ZRE4VP = ZRE4VP.subtract(ENTSCH.divide(ZAHL100)).setScale(2, BigDecimal.ROUND_DOWN)
    }
    ZVBEZ = ZVBEZJ.subtract(FVB).setScale(2, BigDecimal.ROUND_DOWN)
    if (ZVBEZ.compareTo(BigDecimal.ZERO()) === -1) {
      ZVBEZ = BigDecimal.ZERO()
    }
  } /* of MRE4ABZ */

  function MZTABFB(): void {
    ANP = BigDecimal.ZERO()
    if (ZVBEZ.compareTo(BigDecimal.ZERO()) >= 0 && ZVBEZ.compareTo(FVBZ) === -1) {
      FVBZ = new BigDecimal(String(ZVBEZ.longValue()))
    }
    if (STKL < 6) {
      if (ZVBEZ.compareTo(BigDecimal.ZERO()) === 1) {
        if ((ZVBEZ.subtract(FVBZ)).compareTo(new BigDecimal('102')) === -1) {
          ANP = (ZVBEZ.subtract(FVBZ)).setScale(0, BigDecimal.ROUND_UP)
        }
        else {
          ANP = new BigDecimal('102')
        }
      }
    }
    else {
      FVBZ = BigDecimal.ZERO()
      FVBZSO = BigDecimal.ZERO()
    }
    if (STKL < 6) {
      if (ZRE4.compareTo(ZVBEZ) === 1) {
        if (ZRE4.subtract(ZVBEZ).compareTo(ZAHL1000) === -1) {
          ANP = ANP.add(ZRE4).subtract(ZVBEZ).setScale(0, BigDecimal.ROUND_UP)
        }
        else {
          ANP = ANP.add(ZAHL1000)
        }
      }
    }
    KZTAB = 1
    if (STKL === 1) {
      SAP = new BigDecimal('36')
      KFB = (ZKF.multiply(new BigDecimal('7008'))).setScale(0, BigDecimal.ROUND_DOWN)
    }
    else {
      if (STKL === 2) {
        EFA = new BigDecimal('1308')
        SAP = new BigDecimal('36')
        KFB = (ZKF.multiply(new BigDecimal('7008'))).setScale(0, BigDecimal.ROUND_DOWN)
      }
      else {
        if (STKL === 3) {
          KZTAB = 2
          SAP = new BigDecimal('36')
          KFB = (ZKF.multiply(new BigDecimal('7008'))).setScale(0, BigDecimal.ROUND_DOWN)
        }
        else {
          if (STKL === 4) {
            SAP = new BigDecimal('36')
            KFB = (ZKF.multiply(new BigDecimal('3504'))).setScale(0, BigDecimal.ROUND_DOWN)
          }
          else {
            if (STKL === 5) {
              SAP = new BigDecimal('36')
              KFB = BigDecimal.ZERO()
            }
            else {
              KFB = BigDecimal.ZERO()
            }
          }
        }
      }
    }
    ZTABFB = (EFA.add(ANP).add(SAP).add(FVBZ)).setScale(2, BigDecimal.ROUND_DOWN)
  } /* of MZTABFB */

  function MLSTJAHR(): void {
    UPEVP()
    if (KENNVMT !== 1) {
      ZVE = (ZRE4.subtract(ZTABFB).subtract(VSP)).setScale(2, BigDecimal.ROUND_DOWN)
      UPMLST()
    }
    else {
      ZVE = (ZRE4.subtract(ZTABFB).subtract(VSP).subtract((VMT).divide(ZAHL100)).subtract((VKAPA).divide(ZAHL100))).setScale(2, BigDecimal.ROUND_DOWN)
      if (ZVE.compareTo(BigDecimal.ZERO()) === -1) {
        ZVE = ZVE.add(VMT.divide(ZAHL100)).add(VKAPA.divide(ZAHL100)).divide(ZAHL5).setScale(2, BigDecimal.ROUND_DOWN)
        UPMLST()
        ST = (ST.multiply(ZAHL5)).setScale(0, BigDecimal.ROUND_DOWN)
      }
      else {
        UPMLST()
        STOVMT = ST
        ZVE = (ZVE.add(((VMT.add(VKAPA)).divide(ZAHL500)))).setScale(2, BigDecimal.ROUND_DOWN)
        UPMLST()
        ST = (((ST.subtract(STOVMT)).multiply(ZAHL5)).add(STOVMT)).setScale(0, BigDecimal.ROUND_DOWN)
      }
    }
  } /* of MLSTJAHR */

  function UPVKVLZZ(): void {
    UPVKV()
    JW = VKV
    UPANTEIL()
    VKVLZZ = ANTEIL1
  } /* of UPVKVLZZ */

  function UPVKV(): void {
    if (PKV > 0) {
      if (VSP2.compareTo(VSP3) === 1) {
        VKV = VSP2.multiply(ZAHL100)
      }
      else {
        VKV = VSP3.multiply(ZAHL100)
      }
    }
    else {
      VKV = BigDecimal.ZERO()
    }
  } /* of UPVKV */

  function UPLSTLZZ(): void {
    JW = LSTJAHR.multiply(ZAHL100)
    UPANTEIL()
    LSTLZZ = ANTEIL1
  } /* of UPLSTLZZ */

  function UPMLST(): void {
    if (ZVE.compareTo(ZAHL1) === -1) {
      ZVE = BigDecimal.ZERO()
      X = BigDecimal.ZERO()
    }
    else {
      X = (ZVE.divide(new BigDecimal(String(KZTAB)))).setScale(0, BigDecimal.ROUND_DOWN)
    }
    if (STKL < 5) {
      UPTAB13()
    }
    else {
      MST5_6()
    }
  } /* of UPMLST */

  function UPEVP(): void {
    if (KRV > 1) {
      VSP1 = BigDecimal.ZERO()
    }
    else {
      if (KRV === 0) {
        if (ZRE4VP.compareTo(RENTBEMESSUNGSGR_WEST) === 1) {
          ZRE4VP = RENTBEMESSUNGSGR_WEST
        }
      }
      else {
        if (ZRE4VP.compareTo(RENTBEMESSUNGSGR_OST_2013) === 1) {
          ZRE4VP = RENTBEMESSUNGSGR_OST_2013
        }
      }
      VSP1 = (ZRE4VP.multiply(new BigDecimal('0.52'))).setScale(2, BigDecimal.ROUND_DOWN)
      VSP1 = (VSP1.multiply(new BigDecimal('0.0945'))).setScale(2, BigDecimal.ROUND_DOWN)
    }
    VSP2 = (ZRE4VP.multiply(new BigDecimal('0.12'))).setScale(2, BigDecimal.ROUND_DOWN)
    if (STKL === 3) {
      VHB = new BigDecimal('3000')
    }
    else {
      VHB = new BigDecimal('1900')
    }
    if (VSP2.compareTo(VHB) === 1) {
      VSP2 = VHB
    }
    VSPN = (VSP1.add(VSP2)).setScale(0, BigDecimal.ROUND_UP)
    MVSP()
    if (VSPN.compareTo(VSP) === 1) {
      VSP = VSPN.setScale(2, BigDecimal.ROUND_DOWN)
    }
  } /* of UPEVP */

  function MVSP(): void {
    if (ZRE4VP.compareTo(new BigDecimal('47250')) === 1) {
      ZRE4VP = new BigDecimal('47250')
    }
    if (PKV > 0) {
      if (STKL === 6) {
        VSP3 = BigDecimal.ZERO()
      }
      else {
        VSP3 = PKPV.multiply(ZAHL12).divide(ZAHL100)
        if (PKV === 2) {
          KVSATZAG = new BigDecimal('0.07').setScale(5)
          if (PVS === 1) {
            PVSATZAG = new BigDecimal('0.00525').setScale(5)
          }
          else {
            PVSATZAG = new BigDecimal('0.01025').setScale(5)
          }
          VSP3 = VSP3.subtract(ZRE4VP.multiply(KVSATZAG.add(PVSATZAG))).setScale(2, BigDecimal.ROUND_DOWN)
        }
      }
    }
    else {
      KVSATZAN = new BigDecimal('0.079').setScale(5)
      if (PVS === 1) {
        PVSATZAN = new BigDecimal('0.01525').setScale(5)
      }
      else {
        PVSATZAN = new BigDecimal('0.01025').setScale(5)
      }
      if (PVZ === 1) {
        PVSATZAN = PVSATZAN.add(new BigDecimal('0.0025'))
      }
      VSP3 = ZRE4VP.multiply(KVSATZAN.add(PVSATZAN)).setScale(2, BigDecimal.ROUND_DOWN)
    }
    VSP = VSP3.add(VSP1).setScale(0, BigDecimal.ROUND_UP)
  } /* of MVSP */

  function UMVSP(): void {
    VSPVOR = (VSPVOR.subtract(ZRE4VP.multiply(new BigDecimal('0.16')))).setScale(2, BigDecimal.ROUND_DOWN)
    if (VSPVOR.compareTo(BigDecimal.ZERO()) === -1) {
      VSPVOR = BigDecimal.ZERO()
    }
    if (VSPO.compareTo(VSPVOR) === 1) {
      VSP = VSPVOR
      VSPREST = VSPO.subtract(VSPVOR)
      if (VSPREST.compareTo(VSPMAX1) === 1) {
        VSP = VSP.add(VSPMAX1)
        VSPREST = (VSPREST.subtract(VSPMAX1)).divide(ZAHL2, 2, BigDecimal.ROUND_UP)
        if (VSPREST.compareTo(VSPMAX2) === 1) {
          VSP = (VSP.add(VSPMAX2)).setScale(0, BigDecimal.ROUND_DOWN)
        }
        else {
          VSP = (VSP.add(VSPREST)).setScale(0, BigDecimal.ROUND_DOWN)
        }
      }
      else {
        VSP = (VSP.add(VSPREST)).setScale(0, BigDecimal.ROUND_DOWN)
      }
    }
    else {
      VSP = VSPO.setScale(0, BigDecimal.ROUND_DOWN)
    }
  } /* of UMVSP */

  function MST5_6(): void {
    ZZX = X
    if (ZZX.compareTo(new BigDecimal('26441')) === 1) {
      ZX = new BigDecimal('26441')
      UP5_6()
      if (ZZX.compareTo(new BigDecimal('200584')) === 1) {
        ST = (ST.add((new BigDecimal('200584').subtract(new BigDecimal('26441'))).multiply(new BigDecimal('0.42')))).setScale(0, BigDecimal.ROUND_DOWN)
        ST = (ST.add((ZZX.subtract(new BigDecimal('200584'))).multiply(new BigDecimal('0.45')))).setScale(0, BigDecimal.ROUND_DOWN)
      }
      else {
        ST = (ST.add((ZZX.subtract(new BigDecimal('26441'))).multiply(new BigDecimal('0.42')))).setScale(0, BigDecimal.ROUND_DOWN)
      }
    }
    else {
      ZX = ZZX
      UP5_6()
      if (ZZX.compareTo(new BigDecimal('9550')) === 1) {
        VERGL = ST
        ZX = new BigDecimal('9550')
        UP5_6()
        HOCH = (ST.add((ZZX.subtract(new BigDecimal('9550'))).multiply(new BigDecimal('0.42')))).setScale(0, BigDecimal.ROUND_DOWN)
        if (HOCH.compareTo(VERGL) === -1) {
          ST = HOCH
        }
        else {
          ST = VERGL
        }
      }
    }
  } /* of MST5_6 */

  function UP5_6(): void {
    X = (ZX.multiply(new BigDecimal('1.25'))).setScale(2, BigDecimal.ROUND_DOWN)
    UPTAB13()
    ST1 = ST
    X = (ZX.multiply(new BigDecimal('0.75'))).setScale(2, BigDecimal.ROUND_DOWN)
    UPTAB13()
    ST2 = ST
    DIFF = (ST1.subtract(ST2)).multiply(ZAHL2)
    MIST = (ZX.multiply(new BigDecimal('0.14'))).setScale(0, BigDecimal.ROUND_DOWN)
    if (MIST.compareTo(DIFF) === 1) {
      ST = MIST
    }
    else {
      ST = DIFF
    }
  } /* of UP5_6 */

  function MSOLZ(): void {
    SOLZFREI = new BigDecimal(String(972 * KZTAB))
    if (JBMG.compareTo(SOLZFREI) === 1) {
      SOLZJ = (JBMG.multiply(new BigDecimal('5.5'))).divide(ZAHL100).setScale(2, BigDecimal.ROUND_DOWN)
      SOLZMIN = (JBMG.subtract(SOLZFREI)).multiply(new BigDecimal('20')).divide(ZAHL100).setScale(2, BigDecimal.ROUND_DOWN)
      if (SOLZMIN.compareTo(SOLZJ) === -1) {
        SOLZJ = SOLZMIN
      }
      JW = SOLZJ.multiply(ZAHL100).setScale(0, BigDecimal.ROUND_DOWN)
      UPANTEIL()
      SOLZLZZ = ANTEIL1
    }
    else {
      SOLZLZZ = BigDecimal.ZERO()
    }
    if (R > 0) {
      JW = JBMG.multiply(ZAHL100)
      UPANTEIL()
      BK = ANTEIL1
    }
    else {
      BK = BigDecimal.ZERO()
    }
  } /* of MSOLZ */

  function UPANTEIL(): void {
    if (LZZ === 1) {
      ANTEIL1 = JW
    }
    else {
      if (LZZ === 2) {
        ANTEIL1 = JW.divide(ZAHL12, 0, BigDecimal.ROUND_DOWN)
      }
      else {
        if (LZZ === 3) {
          ANTEIL1 = (JW.multiply(ZAHL7)).divide(ZAHL360, 0, BigDecimal.ROUND_DOWN)
        }
        else {
          ANTEIL1 = JW.divide(ZAHL360, 0, BigDecimal.ROUND_DOWN)
        }
      }
    }
  } /* of UPANTEIL */

  function MSONST(): void {
    LZZ = 1
    if (ZMVB === 0) {
      ZMVB = 12
    }
    if (SONSTB.compareTo(BigDecimal.ZERO()) === 0) {
      VKVSONST = BigDecimal.ZERO()
      LSTSO = BigDecimal.ZERO()
      STS = BigDecimal.ZERO()
      SOLZS = BigDecimal.ZERO()
      BKS = BigDecimal.ZERO()
    }
    else {
      MOSONST()
      UPVKV()
      VKVSONST = VKV
      ZRE4J = ((JRE4.add(SONSTB)).divide(ZAHL100)).setScale(2, BigDecimal.ROUND_DOWN)
      ZVBEZJ = ((JVBEZ.add(VBS)).divide(ZAHL100)).setScale(2, BigDecimal.ROUND_DOWN)
      VBEZBSO = STERBE
      MRE4SONST()
      MLSTJAHR()
      UPVKV()
      VKVSONST = VKV.subtract(VKVSONST)
      LSTSO = ST.multiply(ZAHL100)
      STS = LSTSO.subtract(LSTOSO).multiply(new BigDecimal(String(F))).divide(ZAHL100, 0, BigDecimal.ROUND_DOWN).multiply(ZAHL100)
      if (STS.compareTo(BigDecimal.ZERO()) === -1) {
        STS = BigDecimal.ZERO()
      }
      SOLZS = STS.multiply(new BigDecimal('5.5')).divide(ZAHL100, 0, BigDecimal.ROUND_DOWN)
      if (R > 0) {
        BKS = STS
      }
      else {
        BKS = BigDecimal.ZERO()
      }
    }
  } /* of MSONST */

  function MVMT(): void {
    if (VKAPA.compareTo(BigDecimal.ZERO()) === -1) {
      VKAPA = BigDecimal.ZERO()
    }
    if ((VMT.add(VKAPA)).compareTo(BigDecimal.ZERO()) === 1) {
      if (LSTSO.compareTo(BigDecimal.ZERO()) === 0) {
        MOSONST()
        LST1 = LSTOSO
      }
      else {
        LST1 = LSTSO
      }
      VBEZBSO = STERBE.add(VKAPA)
      ZRE4J = ((JRE4.add(SONSTB).add(VMT).add(VKAPA)).divide(ZAHL100)).setScale(2, BigDecimal.ROUND_DOWN)
      ZVBEZJ = ((JVBEZ.add(VBS).add(VKAPA)).divide(ZAHL100)).setScale(2, BigDecimal.ROUND_DOWN)
      KENNVMT = 2
      MRE4SONST()
      MLSTJAHR()
      LST3 = ST.multiply(ZAHL100)
      MRE4ABZ()
      ZRE4VP = ZRE4VP.subtract(JRE4ENT.divide(ZAHL100)).subtract(SONSTENT.divide(ZAHL100))
      KENNVMT = 1
      MLSTJAHR()
      LST2 = ST.multiply(ZAHL100)
      STV = LST2.subtract(LST1)
      LST3 = LST3.subtract(LST1)
      if (LST3.compareTo(STV) === -1) {
        STV = LST3
      }
      if (STV.compareTo(BigDecimal.ZERO()) === -1) {
        STV = BigDecimal.ZERO()
      }
      else {
        STV = STV.multiply(new BigDecimal(String(F))).divide(ZAHL100, 0, BigDecimal.ROUND_DOWN).multiply(ZAHL100)
      }
      SOLZV = ((STV.multiply(new BigDecimal('5.5'))).divide(ZAHL100)).setScale(0, BigDecimal.ROUND_DOWN)
      if (R > 0) {
        BKV = STV
      }
      else {
        BKV = BigDecimal.ZERO()
      }
    }
    else {
      STV = BigDecimal.ZERO()
      SOLZV = BigDecimal.ZERO()
      BKV = BigDecimal.ZERO()
    }
  } /* of MVMT */

  function MOSONST(): void {
    ZRE4J = (JRE4.divide(ZAHL100)).setScale(2, BigDecimal.ROUND_DOWN)
    ZVBEZJ = (JVBEZ.divide(ZAHL100)).setScale(2, BigDecimal.ROUND_DOWN)
    JLFREIB = JFREIB.divide(ZAHL100, 2, BigDecimal.ROUND_DOWN)
    JLHINZU = JHINZU.divide(ZAHL100, 2, BigDecimal.ROUND_DOWN)
    MRE4()
    MRE4ABZ()
    ZRE4VP = ZRE4VP.subtract(JRE4ENT.divide(ZAHL100))
    MZTABFB()
    MLSTJAHR()
    LSTOSO = ST.multiply(ZAHL100)
  } /* of MOSONST */

  function MRE4SONST(): void {
    MRE4()
    FVB = FVBSO
    MRE4ABZ()
    ZRE4VP = ZRE4VP.subtract(JRE4ENT.divide(ZAHL100)).subtract(SONSTENT.divide(ZAHL100))
    FVBZ = FVBZSO
    MZTABFB()
  } /* of MRE4SONST */

  function UPTAB13(): void {
    if (X.compareTo(new BigDecimal('8131')) === -1) {
      ST = BigDecimal.ZERO()
    }
    else {
      if (X.compareTo(new BigDecimal('13470')) === -1) {
        Y = (X.subtract(new BigDecimal('8130'))).divide(new BigDecimal('10000'), 6, BigDecimal.ROUND_DOWN)
        RW = Y.multiply(new BigDecimal('933.7'))
        RW = RW.add(new BigDecimal('1400'))
        ST = (RW.multiply(Y)).setScale(0, BigDecimal.ROUND_DOWN)
      }
      else {
        if (X.compareTo(new BigDecimal('52882')) === -1) {
          Y = (X.subtract(new BigDecimal('13469'))).divide(new BigDecimal('10000'), 6, BigDecimal.ROUND_DOWN)
          RW = Y.multiply(new BigDecimal('228.74'))
          RW = RW.add(new BigDecimal('2397'))
          RW = RW.multiply(Y)
          ST = (RW.add(new BigDecimal('1014'))).setScale(0, BigDecimal.ROUND_DOWN)
        }
        else {
          if (X.compareTo(new BigDecimal('250731')) === -1) {
            ST = ((X.multiply(new BigDecimal('0.42'))).subtract(new BigDecimal('8196'))).setScale(0, BigDecimal.ROUND_DOWN)
          }
          else {
            ST = ((X.multiply(new BigDecimal('0.45'))).subtract(new BigDecimal('15718'))).setScale(0, BigDecimal.ROUND_DOWN)
          }
        }
      }
    }
    ST = ST.multiply(new BigDecimal(String(KZTAB)))
  } /* of UPTAB13 */

  MRE4JL()
  VBEZBSO = BigDecimal.ZERO()
  KENNVMT = 0
  MRE4()
  MRE4ABZ()
  MZTABFB()
  MLSTJAHR()
  LSTJAHR = ST.multiply(new BigDecimal(String(F))).setScale(0, BigDecimal.ROUND_DOWN)
  JW = LSTJAHR.multiply(ZAHL100)
  UPLSTLZZ()
  UPVKVLZZ()
  if (ZKF.compareTo(BigDecimal.ZERO()) === 1) {
    ZTABFB = (ZTABFB.add(KFB)).setScale(2, BigDecimal.ROUND_DOWN)
    MRE4ABZ()
    MLSTJAHR()
    JBMG = ST.multiply(new BigDecimal(String(F))).setScale(0, BigDecimal.ROUND_DOWN)
  }
  else {
    JBMG = LSTJAHR
  }
  MSOLZ()
  MSONST()
  MVMT()

  return {
    BK,
    BKS,
    BKV,
    LSTLZZ,
    SOLZLZZ,
    SOLZS,
    SOLZV,
    STS,
    STV,
  }
}
