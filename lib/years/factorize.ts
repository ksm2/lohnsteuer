import { BigDecimal } from 'bigdecimal'

export function factorize(value: BigDecimal, factor: number): BigDecimal {
  return value.multiply(BigDecimal.valueOf(factor)).setScale(0, BigDecimal.ROUND_DOWN)
}
