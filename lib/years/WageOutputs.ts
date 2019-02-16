import { BigDecimal } from "bigdecimal"
import { toMonth } from './toMonth'

export interface WageOutputs {
  LSTLZZ: BigDecimal
  SOLZLZZ: BigDecimal
  BK: BigDecimal
}

export function convertWageOutputs(output: WageOutputs): { salaryTax: number, churchBasis: BigDecimal, solidarityTax: number } {
  return {
    salaryTax: toMonth(output.LSTLZZ).longValue(),
    solidarityTax: toMonth(output.SOLZLZZ).longValue(),
    churchBasis: toMonth(output.BK),
  }
}
