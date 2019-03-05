import { BigDecimal } from 'bigdecimal'

/**
 * Inputs accepted by WageTax2007.
 */
export interface WageTax2007Inputs {

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
   * In der Lohnsteuerkarte des Arbeitnehmers eingetragener Hinzurechnungsbetrag
   * fuer den Lohnzahlungszeitraum in Cents
   */
  HINZUR?: BigDecimal

  /**
   * Jahresfreibetrag nach Ma&szlig;gabe der Eintragungen auf der
   * Lohnsteuerkarte in Cents (ggf. 0)
   */
  JFREIB?: BigDecimal

  /**
   * Jahreshinzurechnungsbetrag in Cents (ggf. 0)
   */
  JHINZU?: BigDecimal

  /**
   * Voraussichtlicher Jahresarbeitslohn ohne sonstige Bezuege und
   * ohne Verguetung fuer mehrjaehrige Taetigkeit in Cents (ggf. 0)
   * Anmerkung: Die Eingabe dieses Feldes ist erforderlich bei Eingabe
   * „sonstiger Bezuege“ (Feld SONSTB) oder bei Eingabe der „Verguetung
   * fuer mehrjaehrige Taetigkeit“ (Feld VMT).
   */
  JRE4?: BigDecimal

  /**
   * In JRE4 enthaltene Versorgungsbezuege in Cents (ggf. 0)
   */
  JVBEZ?: BigDecimal

  /**
   * 1 = der Arbeitnehmer ist im Lohnzahlungszeitraum in der gesetzlichen
   * Rentenversicherung versicherungsfrei und gehoert zu den in
   * § 10 c Abs. 3 EStG genannten Personen.
   * Bei anderen Arbeitnehmern ist „0“ einzusetzen.
   * Fuer die Zuordnung sind allein die dem Arbeitgeber ohnehin bekannten
   * Tatsachen ma&szlig;gebend; zusaetzliche Ermittlungen braucht
   * der Arbeitgeber nicht anzustellen.
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
   * Kapitalauszahlungen/Abfindungen bei Versorgungsbezuegen fuer mehrere Jahre in Cents (ggf. 0)
   */
  VKAPA?: BigDecimal

  /**
   * Verguetung fuer mehrjaehrige Taetigkeit ohne Kapitalauszahlungen/Abfindungen bei
   * Versorgungsbezuegen in Cents (ggf. 0)
   */
  VMT?: BigDecimal

  /**
   * In der Lohnsteuerkarte des Arbeitnehmers eingetragener Freibetrag
   * fuer den Lohnzahlungszeitraum in Cents
   */
  WFUNDF?: BigDecimal

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
}

/**
 * Outputs returned by WageTax2007.
 */
export interface WageTax2007Outputs {

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

/* INTERNALS */

// Altersentlastungsbetrag nach Alterseinkuenftegesetz in Cents
let ALTE: BigDecimal = BigDecimal.ZERO()
// Arbeitnehmer-Pauschbetrag in EURO
let ANP: BigDecimal = BigDecimal.ZERO()
// Auf den Lohnzahlungszeitraum entfallender Anteil von Jahreswerten
// auf ganze Cents abgerundet
let ANTEIL1: BigDecimal = BigDecimal.ZERO()
// Auf den Lohnzahlungszeitraum entfallender Anteil von Jahreswerten
// auf ganze Cents aufgerundet
let ANTEIL2: BigDecimal = BigDecimal.ZERO()
// Bemessungsgrundlage fuer Altersentlastungsbetrag in Cents
let BMG: BigDecimal = BigDecimal.ZERO()
// Differenz zwischen ST1 und ST2 in EURO
let DIFF: BigDecimal = BigDecimal.ZERO()
// Entlastungsbetrag fuer Alleinerziehende in EURO
let EFA: BigDecimal = BigDecimal.ZERO()
// Versorgungsfreibetrag in Cents
let FVB: BigDecimal = BigDecimal.ZERO()
// Zuschlag zum Versorgungsfreibetrag in EURO
let FVBZ: BigDecimal = BigDecimal.ZERO()
// Massgeblich maximaler Versorgungsfreibetrag in Cents
let HFVB: BigDecimal = BigDecimal.ZERO()
// Nummer der Tabellenwerte fuer Versorgungsparameter
let J: number = 0
// Jahressteuer nach § 51a EStG, aus der Solidaritaetszuschlag und
// Bemessungsgrundlage fuer die Kirchenlohnsteuer ermittelt werden in EURO
let JBMG: BigDecimal = BigDecimal.ZERO()
// Jahreswert, dessen Anteil fuer einen Lohnzahlungszeitraum in
// UPANTEIL errechnet werden soll in Cents
let JW: BigDecimal = BigDecimal.ZERO()
// Nummer der Tabellenwerte fuer Parameter bei Altersentlastungsbetrag
let K: number = 0
// Kennzeichen bei Verguetung fuer mehrjaehrige Taetigkeit
// 0 = beim Vorwegabzug ist ZRE4VP zu beruecksichtigen
// 1 = beim Vorwegabzug ist ZRE4VP1 zu beruecksichtigen
let KENNZ: number = 0
// Summe der Freibetraege fuer Kinder in EURO
let KFB: BigDecimal = BigDecimal.ZERO()
// Kennzahl fuer die Einkommensteuer-Tabellenart:
// 1 = Grundtabelle
// 2 = Splittingtabelle
let KZTAB: number = 0
// Jahreslohnsteuer in EURO
let LSTJAHR: BigDecimal = BigDecimal.ZERO()
// Zwischenfelder der Jahreslohnsteuer in Cents
let LST1: BigDecimal = BigDecimal.ZERO()

let LST2: BigDecimal = BigDecimal.ZERO()

let LST3: BigDecimal = BigDecimal.ZERO()
// Mindeststeuer fuer die Steuerklassen V und VI in EURO
let MIST: BigDecimal = BigDecimal.ZERO()
// Arbeitslohn des Lohnzahlungszeitraums nach Abzug der Freibetraege
// fuer Versorgungsbezuege, des Altersentlastungsbetrags und des
// in der Lohnsteuerkarte eingetragenen Freibetrags und Hinzurechnung
// eines Hinzurechnungsbetrags in Cents. Entspricht dem Arbeitslohn,
// fuer den die Lohnsteuer im personellen Verfahren aus der
// zum Lohnzahlungszeitraum gehoerenden Tabelle abgelesen wuerde
let RE4LZZ: BigDecimal = BigDecimal.ZERO()
// Arbeitslohn des Lohnzahlungszeitraums nach Abzug der Freibetraege
// fuer Versorgungsbezuege und des Altersentlastungsbetrags in
// Cents zur Berechnung der Vorsorgepauschale
let RE4LZZV: BigDecimal = BigDecimal.ZERO()
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
// Bemessungsgrundlage fuer den Versorgungsfreibetrag in Cents
let VBEZB: BigDecimal = BigDecimal.ZERO()
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
// Zu versteuerndes Einkommen gem. § 32a Abs. 1 und 2 EStG
// (2 Dezimalstellen)
let X: BigDecimal = BigDecimal.ZERO()
// gem. § 32a Abs. 1 EStG (6 Dezimalstellen)
let Y: BigDecimal = BigDecimal.ZERO()
// Auf einen Jahreslohn hochgerechnetes RE4LZZ in EURO, C (2 Dezimalstellen)
let ZRE4: BigDecimal = BigDecimal.ZERO()
// Auf einen Jahreslohn hochgerechnetes RE4LZZV zur Berechnung
// der Vorsorgepauschale in EURO, C (2 Dezimalstellen)
let ZRE4VP: BigDecimal = BigDecimal.ZERO()
// Sicherungsfeld von ZRE4VP in EURO,C bei der Berechnung des Vorwegabzugs
// fuer die Verguetung fuer mehrjaehrige Taetigkeit
let ZRE4VP1: BigDecimal = BigDecimal.ZERO()
// Feste Tabellenfreibetraege (ohne Vorsorgepauschale) in EURO
let ZTABFB: BigDecimal = BigDecimal.ZERO()
// Auf einen Jahreslohn hochgerechnetes (VBEZ abzueglich FVB) in
// EURO, C (2 Dezimalstellen)
let ZVBEZ: BigDecimal = BigDecimal.ZERO()
// Zu versteuerndes Einkommen in EURO
let ZVE: BigDecimal = BigDecimal.ZERO()
// Zwischenfelder zu X fuer die Berechnung der Steuer nach § 39b
// Abs. 2 Satz 8 EStG in EURO.
let ZX: BigDecimal = BigDecimal.ZERO()

let ZZX: BigDecimal = BigDecimal.ZERO()

let HOCH: BigDecimal = BigDecimal.ZERO()

let VERGL: BigDecimal = BigDecimal.ZERO()

/**
 * Calculates the WageTax2007.
 *
 * @params inputs - The inputs for the calculation.
 * @returns The outputs of the calculation.
 */
export function calculateWageTax(inputs: WageTax2007Inputs): WageTax2007Outputs {
  // Inputs
  let {
    AJAHR = 0,
    ALTER1 = 0,
    HINZUR = BigDecimal.ZERO(),
    JFREIB = BigDecimal.ZERO(),
    JHINZU = BigDecimal.ZERO(),
    JRE4 = BigDecimal.ZERO(),
    JVBEZ = BigDecimal.ZERO(),
    KRV = 0,
    LZZ = 0,
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
    WFUNDF = BigDecimal.ZERO(),
    ZKF = BigDecimal.ZERO(),
    ZMVB = 0,
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

  function MRE4LZZ(): void {
    if (VBEZ.compareTo(BigDecimal.ZERO()) === 0) {
      FVBZ = BigDecimal.ZERO()
      FVB = BigDecimal.ZERO()
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
        if (((STERBE.add(VKAPA)).compareTo(BigDecimal.ZERO())) === 1) {
          VBEZB = (VBEZM.multiply(new BigDecimal(String(ZMVB)))).add(VBEZS)
          HFVB = TAB2[J].multiply(ZAHL100)
          FVBZ = TAB3[J]
        }
        else {
          VBEZB = (VBEZM.multiply(new BigDecimal(String(ZMVB)))).add(VBEZS)
          HFVB = TAB2[J].divide(ZAHL12).multiply(new BigDecimal(String(ZMVB))).multiply(ZAHL100)
          FVBZ = TAB3[J].divide(ZAHL12).multiply(new BigDecimal(String(ZMVB))).setScale(0, BigDecimal.ROUND_UP)
        }
      }
      else {
        VBEZB = ((VBEZM.multiply(ZAHL12)).add(VBEZS)).setScale(2, BigDecimal.ROUND_DOWN)
        HFVB = TAB2[J].multiply(ZAHL100)
        FVBZ = TAB3[J]
      }
      FVB = (VBEZB.multiply(TAB1[J])).setScale(2, BigDecimal.ROUND_UP)
      if (FVB.compareTo(HFVB) === 1) {
        FVB = HFVB
      }
      JW = FVB
      UPANTEIL()
      FVB = ANTEIL2
    }
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
      BMG = RE4.subtract(VBEZ)
      ALTE = (BMG.multiply(TAB4[K])).setScale(2, BigDecimal.ROUND_UP)
      JW = TAB5[K].multiply(ZAHL100)
      UPANTEIL()
      if (ALTE.compareTo(ANTEIL2) === 1) {
        ALTE = ANTEIL2
      }
    }
  } /* of MRE4LZZ */

  function MRE4(): void {
    if (LZZ === 1) {
      ZRE4 = RE4LZZ.divide(ZAHL100, 2, BigDecimal.ROUND_DOWN)
      ZRE4VP = RE4LZZV.divide(ZAHL100, 2, BigDecimal.ROUND_DOWN)
      ZVBEZ = (VBEZ.subtract(FVB)).divide(ZAHL100, 2, BigDecimal.ROUND_DOWN)
    }
    else {
      if (LZZ === 2) {
        ZRE4 = ((RE4LZZ.add(new BigDecimal('0.67'))).multiply(new BigDecimal('0.12'))).setScale(2, BigDecimal.ROUND_DOWN)
        ZRE4VP = ((RE4LZZV.add(new BigDecimal('0.67'))).multiply(new BigDecimal('0.12'))).setScale(2, BigDecimal.ROUND_DOWN)
        ZVBEZ = ((VBEZ.subtract(FVB).add(new BigDecimal('0.67'))).multiply(new BigDecimal('0.12'))).setScale(2, BigDecimal.ROUND_DOWN)
      }
      else {
        if (LZZ === 3) {
          ZRE4 = ((RE4LZZ.add(new BigDecimal('0.89'))).multiply(new BigDecimal('3.6'))).divide(new BigDecimal('7.0'), 2, BigDecimal.ROUND_DOWN)
          ZRE4VP = ((RE4LZZV.add(new BigDecimal('0.89'))).multiply(new BigDecimal('3.6'))).divide(new BigDecimal('7.0'), 2, BigDecimal.ROUND_DOWN)
          ZVBEZ = ((VBEZ.subtract(FVB).add(new BigDecimal('0.89'))).multiply(new BigDecimal('3.6'))).divide(new BigDecimal('7.0'), 2, BigDecimal.ROUND_DOWN)
        }
        else {
          ZRE4 = ((RE4LZZ.add(new BigDecimal('0.56'))).multiply(new BigDecimal('3.6'))).setScale(2, BigDecimal.ROUND_DOWN)
          ZRE4VP = ((RE4LZZV.add(new BigDecimal('0.56'))).multiply(new BigDecimal('3.6'))).setScale(2, BigDecimal.ROUND_DOWN)
          ZVBEZ = ((VBEZ.subtract(FVB).add(new BigDecimal('0.56'))).multiply(new BigDecimal('3.6'))).setScale(2, BigDecimal.ROUND_DOWN)
        }
      }
    }
    if (RE4LZZ.compareTo(BigDecimal.ZERO()) === -1) {
      ZRE4 = BigDecimal.ZERO()
    }
    if (RE4LZZV.compareTo(BigDecimal.ZERO()) === -1) {
      ZRE4VP = BigDecimal.ZERO()
    }
    if (VBEZ.compareTo(BigDecimal.ZERO()) === 0) {
      if (FVB.compareTo(BigDecimal.ZERO()) === 0) {
        ZVBEZ = BigDecimal.ZERO()
      }
    }
    else {
      if ((VBEZ.subtract(FVB)).compareTo(BigDecimal.ZERO()) === -1) {
        ZVBEZ = BigDecimal.ZERO()
      }
    }
  } /* of MRE4 */

  function MZTABFB(): void {
    ANP = BigDecimal.ZERO()
    if (ZVBEZ.compareTo(BigDecimal.ZERO()) >= 0) {
      if (ZVBEZ.compareTo(FVBZ) === -1) {
        FVBZ = ZVBEZ.setScale(0, BigDecimal.ROUND_DOWN)
      }
    }
    if (STKL < 6) {
      if (ZVBEZ.compareTo(BigDecimal.ZERO()) === 1) {
        if ((ZVBEZ.subtract(FVBZ)).compareTo(new BigDecimal('102')) === -1) {
          ANP = (ZVBEZ.subtract(FVBZ)).setScale(0, BigDecimal.ROUND_DOWN)
        }
        else {
          ANP = new BigDecimal('102')
        }
      }
    }
    if (STKL < 6) {
      if (ZRE4.compareTo(ZVBEZ) === 1) {
        if ((ZRE4.subtract(ZVBEZ)).compareTo(new BigDecimal('920')) === -1) {
          ANP = (ANP.add(ZRE4).subtract(ZVBEZ)).setScale(0, BigDecimal.ROUND_DOWN)
        }
        else {
          ANP = ANP.add(new BigDecimal('920'))
        }
      }
    }
    KZTAB = 1
    if (STKL === 1) {
      SAP = new BigDecimal('36')
      KFB = (ZKF.multiply(new BigDecimal('5808'))).setScale(0, BigDecimal.ROUND_DOWN)
    }
    else {
      if (STKL === 2) {
        EFA = new BigDecimal('1308')
        SAP = new BigDecimal('36')
        KFB = (ZKF.multiply(new BigDecimal('5808'))).setScale(0, BigDecimal.ROUND_DOWN)
      }
      else {
        if (STKL === 3) {
          KZTAB = 2
          SAP = new BigDecimal('72')
          KFB = (ZKF.multiply(new BigDecimal('5808'))).setScale(0, BigDecimal.ROUND_DOWN)
        }
        else {
          if (STKL === 4) {
            SAP = new BigDecimal('36')
            KFB = (ZKF.multiply(new BigDecimal('2904'))).setScale(0, BigDecimal.ROUND_DOWN)
          }
          else {
            KFB = BigDecimal.ZERO()
          }
        }
      }
    }
    ZTABFB = EFA.add(ANP).add(SAP).add(FVBZ)
  } /* of MZTABFB */

  function MLSTJAHR(): void {
    if (STKL < 5) {
      UPEVP()
    }
    else {
      VSP = BigDecimal.ZERO()
    }
    ZVE = (ZRE4.subtract(ZTABFB).subtract(VSP)).setScale(0, BigDecimal.ROUND_DOWN)
    if (ZVE.compareTo(ZAHL1) === -1) {
      ZVE = BigDecimal.ZERO()
      X = BigDecimal.ZERO()
    }
    else {
      X = ZVE.divide(new BigDecimal(String(KZTAB)), 0, BigDecimal.ROUND_DOWN)
    }
    if (STKL < 5) {
      UPTAB07()
    }
    else {
      MST5_6()
    }
  } /* of MLSTJAHR */

  function UPEVP(): void {
    if (KRV === 1) {
      VSP1 = BigDecimal.ZERO()
    }
    else {
      if (ZRE4VP.compareTo(new BigDecimal('63000')) === 1) {
        ZRE4VP = new BigDecimal('63000')
      }
      VSP1 = (ZRE4VP.multiply(new BigDecimal('0.28'))).setScale(2, BigDecimal.ROUND_DOWN)
      VSP1 = (VSP1.multiply(new BigDecimal('0.0995'))).setScale(2, BigDecimal.ROUND_DOWN)
    }
    VSP2 = ZRE4VP.multiply(new BigDecimal('0.11'))
    VHB = new BigDecimal(String(KZTAB)).multiply(new BigDecimal('1500'))
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
    if (KENNZ === 1) {
      VSPO = ZRE4VP1.multiply(new BigDecimal('0.2'))
    }
    else {
      VSPO = ZRE4VP.multiply(new BigDecimal('0.2'))
    }
    VSPVOR = new BigDecimal(String(KZTAB)).multiply(new BigDecimal('3068'))
    VSPMAX1 = new BigDecimal(String(KZTAB)).multiply(new BigDecimal('1334'))
    VSPMAX2 = new BigDecimal(String(KZTAB)).multiply(new BigDecimal('667'))
    VSPKURZ = new BigDecimal(String(KZTAB)).multiply(new BigDecimal('1134'))
    if (KRV === 1) {
      if (VSPO.compareTo(VSPKURZ) === 1) {
        VSP = VSPKURZ
      }
      else {
        VSP = VSPO.setScale(0, BigDecimal.ROUND_DOWN)
      }
    }
    else {
      UMVSP()
    }
  } /* of MVSP */

  function UMVSP(): void {
    if (KENNZ === 1) {
      VSPVOR = VSPVOR.subtract(ZRE4VP1.multiply(new BigDecimal('0.16')))
    }
    else {
      VSPVOR = VSPVOR.subtract(ZRE4VP.multiply(new BigDecimal('0.16')))
    }
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
    if (ZZX.compareTo(new BigDecimal('25812')) === 1) {
      ZX = new BigDecimal('25812')
      UP5_6()
      if (ZZX.compareTo(new BigDecimal('200000')) === 1) {
        ST = (ST.add(new BigDecimal('73158.96'))).setScale(0, BigDecimal.ROUND_DOWN);
        ST = (ST.add((ZZX.subtract(new BigDecimal('200000'))).multiply(new BigDecimal('0.45')))).setScale(0, BigDecimal.ROUND_DOWN)
      }
      else {
        ST = (ST.add((ZZX.subtract(new BigDecimal('25812'))).multiply(new BigDecimal('0.42')))).setScale(0, BigDecimal.ROUND_DOWN)
      }
    }
    else {
      ZX = ZZX
      UP5_6()
      if (ZZX.compareTo(new BigDecimal('9144')) === 1) {
        VERGL = ST
        ZX = new BigDecimal('9144')
        UP5_6()
        HOCH = (ST.add((ZZX.subtract(new BigDecimal('9144'))).multiply(new BigDecimal('0.42')))).setScale(0, BigDecimal.ROUND_DOWN)
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
    X = ZX.multiply(new BigDecimal('1.25'))
    UPTAB07()
    ST1 = ST
    X = ZX.multiply(new BigDecimal('0.75'))
    UPTAB07()
    ST2 = ST
    DIFF = (ST1.subtract(ST2)).multiply(ZAHL2)
    MIST = (ZX.multiply(new BigDecimal('0.15'))).setScale(0, BigDecimal.ROUND_DOWN)
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
      SOLZMIN = (JBMG.subtract(SOLZFREI)).multiply(new BigDecimal('20')).divide(ZAHL100)
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
      ANTEIL2 = JW
    }
    else {
      if (LZZ === 2) {
        ANTEIL1 = JW.divide(ZAHL12, 0, BigDecimal.ROUND_DOWN)
        ANTEIL2 = JW.divide(ZAHL12, 0, BigDecimal.ROUND_UP)
      }
      else {
        if (LZZ === 3) {
          ANTEIL1 = (JW.multiply(ZAHL7)).divide(ZAHL360, 0, BigDecimal.ROUND_DOWN)
          ANTEIL2 = (JW.multiply(ZAHL7)).divide(ZAHL360, 0, BigDecimal.ROUND_UP)
        }
        else {
          ANTEIL1 = JW.divide(ZAHL360, 0, BigDecimal.ROUND_DOWN)
          ANTEIL2 = JW.divide(ZAHL360, 0, BigDecimal.ROUND_UP)
        }
      }
    }
  } /* of UPANTEIL */

  function MSONST(): void {
    if (SONSTB.compareTo(BigDecimal.ZERO()) === 0) {
      STS = BigDecimal.ZERO()
      SOLZS = BigDecimal.ZERO()
      BKS = BigDecimal.ZERO()
    }
    else {
      LZZ = 1
      VBEZ = JVBEZ
      RE4 = JRE4
      MRE4LZZ()
      MRE4LZZ2()
      MLSTJAHR()
      LST1 = ST.multiply(ZAHL100)
      VBEZ = JVBEZ.add(VBS)
      RE4 = JRE4.add(SONSTB)
      VBEZS = VBEZS.add(STERBE)
      MRE4LZZ()
      MRE4LZZ2()
      MLSTJAHR()
      LST2 = ST.multiply(ZAHL100)
      STS = LST2.subtract(LST1)
      if (SONSTB.compareTo(BigDecimal.ZERO()) === 1) {
        if (STS.compareTo(BigDecimal.ZERO()) === -1) {
          STS = BigDecimal.ZERO()
        }
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

  function MRE4LZZ2(): void {
    RE4LZZ = RE4.subtract(FVB).subtract(ALTE).subtract(JFREIB).add(JHINZU)
    RE4LZZV = RE4.subtract(FVB).subtract(ALTE)
    MRE4()
    MZTABFB()
  } /* of MRE4LZZ2 */

  function MVMT(): void {
    if (VKAPA.compareTo(BigDecimal.ZERO()) === -1) {
      VKAPA = BigDecimal.ZERO()
    }
    if ((VMT.add(VKAPA)).compareTo(BigDecimal.ZERO()) === 1) {
      LZZ = 1
      VBEZ = JVBEZ.add(VBS)
      RE4 = JRE4.add(SONSTB)
      MRE4LZZ()
      MRE4LZZ2()
      MLSTJAHR()
      LST1 = ST.multiply(ZAHL100)
      VMT = VMT.add(VKAPA)
      VBEZS = VBEZS.add(VKAPA)
      VBEZ = VBEZ.add(VKAPA)
      RE4 = JRE4.add(SONSTB).add(VMT)
      MRE4LZZ()
      MRE4LZZ2()
      KENNZ = 1
      ZRE4VP1 = ZRE4VP
      MLSTJAHR()
      LST3 = ST.multiply(ZAHL100)
      VBEZ = VBEZ.subtract(VKAPA)
      VBEZS = VBEZS.subtract(VKAPA)
      RE4 = JRE4.add(SONSTB)
      MRE4LZZ()
      if ((RE4.subtract(JFREIB).add(JHINZU)).compareTo(BigDecimal.ZERO()) === -1) {
        RE4 = RE4.subtract(JFREIB).add(JHINZU)
        JFREIB = BigDecimal.ZERO()
        JHINZU = BigDecimal.ZERO()
        RE4 = (RE4.add(VMT)).divide(ZAHL5, 0, BigDecimal.ROUND_DOWN)
        MRE4LZZ2()
        MLSTJAHR()
        LST2 = ST.multiply(ZAHL100)
        STV = LST2.multiply(ZAHL5)
      }
      else {
        RE4 = RE4.add(VMT.divide(ZAHL5, 0, BigDecimal.ROUND_DOWN))
        MRE4LZZ2()
        MLSTJAHR()
        LST2 = ST.multiply(ZAHL100)
        STV = (LST2.subtract(LST1)).multiply(ZAHL5)
      }
      LST3 = LST3.subtract(LST1)
      if (LST3.compareTo(STV) === -1) {
        STV = LST3
      }
      SOLZV = (STV.multiply(new BigDecimal('5.5'))).divide(ZAHL100, 0, BigDecimal.ROUND_DOWN)
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

  function UPTAB07(): void {
    if (X.compareTo(new BigDecimal('7665')) === -1) {
      ST = BigDecimal.ZERO()
    }
    else {
      if (X.compareTo(new BigDecimal('12740')) === -1) {
        Y = (X.subtract(new BigDecimal('7664'))).divide(new BigDecimal('10000'), 6, BigDecimal.ROUND_DOWN)
        RW = Y.multiply(new BigDecimal('883.74'))
        RW = RW.add(new BigDecimal('1500'))
        ST = (RW.multiply(Y)).setScale(0, BigDecimal.ROUND_DOWN)
      }
      else {
        if (X.compareTo(new BigDecimal('52152')) === -1) {
          Y = (X.subtract(new BigDecimal('12739'))).divide(new BigDecimal('10000'), 6, BigDecimal.ROUND_DOWN)
          RW = Y.multiply(new BigDecimal('228.74'))
          RW = RW.add(new BigDecimal('2397'))
          RW = RW.multiply(Y)
          ST = (RW.add(new BigDecimal('989'))).setScale(0, BigDecimal.ROUND_DOWN)
        }
        else {
          if (X.compareTo(new BigDecimal('250001')) === -1) {
            ST = ((X.multiply(new BigDecimal('0.42'))).subtract(new BigDecimal('7914'))).setScale(0, BigDecimal.ROUND_DOWN)
          }
          else {
            ST = ((X.multiply(new BigDecimal('0.45'))).subtract(new BigDecimal('15414'))).setScale(0, BigDecimal.ROUND_DOWN)
          }
        }
      }
    }
    ST = ST.multiply(new BigDecimal(String(KZTAB)))
  } /* of UPTAB07 */

  MRE4LZZ()
  KENNZ = 0
  RE4LZZ = RE4.subtract(FVB).subtract(ALTE).subtract(WFUNDF).add(HINZUR)
  RE4LZZV = RE4.subtract(FVB).subtract(ALTE)
  MRE4()
  MZTABFB()
  MLSTJAHR()
  LSTJAHR = ST
  JW = LSTJAHR.multiply(ZAHL100)
  UPANTEIL()
  LSTLZZ = ANTEIL1
  if (ZKF.compareTo(BigDecimal.ZERO()) === 1) {
    ZTABFB = ZTABFB.add(KFB)
    MLSTJAHR()
    JBMG = ST
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
