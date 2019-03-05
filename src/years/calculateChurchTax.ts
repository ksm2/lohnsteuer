import { BigDecimal } from "bigdecimal"
import { Bundesland, Input } from '../model'
import { factorize } from './factorize'

export function calculateChurchTax(input: Input, churchBasis: BigDecimal): BigDecimal {
  // These states have only 8 % church tax, see
  // https://www.kirchensteuerinfo.de/kirchensteuersaetze-nach-bundeslaendern-2129
  if (input.state === Bundesland.BADEN_WUERTTEMBERG || input.state === Bundesland.BAVARIA) {
    return factorize(churchBasis, 0.08)
  }

  return factorize(churchBasis, 0.09)
}
