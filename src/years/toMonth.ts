import { BigDecimal } from 'bigdecimal'

const TWELVE = BigDecimal.valueOf(12)

export function toMonth(bg: BigDecimal): BigDecimal {
  return bg.divide(TWELVE, 0, BigDecimal.ROUND_DOWN)
}
