import { BigDecimal } from 'bigdecimal'
import { Bundesland, Input, isWestGermany } from '../model'

export interface WageInputs {
  STKL: number
  LZZ: number
  KRV: number
  RE4: BigDecimal
  R: number
  PVS: number
  KVZ: BigDecimal
  PVZ: number
}

export function convertWageInputs(input: Input): WageInputs {
  const age = input.year - input.yearOfBirth - 1
  return {
    STKL: input.taxClass,
    LZZ: 1,
    KRV: isWestGermany(input.state) ? 0 : 1,
    RE4: BigDecimal.valueOf(input.grossSalary),
    R: input.churchTax ? 1 : 0,
    KVZ: BigDecimal.valueOf(input.healthInsuranceAddOn),
    PVS: input.state === Bundesland.SAXONY ? 1 : 0,
    PVZ: age > 23 ? 1 : 0,
  }
}
