import { Bundesland } from './Bundesland'

export interface Input {
  year: number
  grossSalary: number
  state: Bundesland
  yearOfBirth: number
  taxClass: number
  healthInsuranceAddOn: number
  churchTax: boolean
}
