declare module "bigdecimal" {
  export class BigDecimal {
    static ZERO(): BigDecimal
    static ONE(): BigDecimal
    static TEN(): BigDecimal

    static ROUND_CEILING: number
    static ROUND_DOWN: number
    static ROUND_FLOOR: number
    static ROUND_HALF_DOWN: number
    static ROUND_HALF_EVEN: number
    static ROUND_HALF_UP: number
    static ROUND_UNNECESSARY: number
    static ROUND_UP: number

    constructor(value: string)

    static valueOf(value: number): BigDecimal
    longValue(): number
    compareTo(other: BigDecimal): number
    setScale(precision: number, roundingMode: number): BigDecimal
    add(other: BigDecimal): BigDecimal
    min(other: BigDecimal): BigDecimal
    subtract(other: BigDecimal): BigDecimal
    divide(divisor: BigDecimal, precision?: number, roundingMode?: number): BigDecimal
    multiply(multiplicator: BigDecimal): BigDecimal
  }
}
