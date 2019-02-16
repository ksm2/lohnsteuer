import { BigDecimal } from 'bigdecimal'
import { Bundesland } from '../../model'
import { AbstractYear } from '../AbstractYear'
import { WageInputs } from '../WageInputs'
import { WageOutputs } from '../WageOutputs'
import { calculateWageTax } from './calculateWageTax'

export class Year2018 extends AbstractYear {

  calculateWageTax(input: WageInputs): WageOutputs {
    return calculateWageTax(input)
  }

  getHealthInsurancePercentage(addOn: BigDecimal): BigDecimal {
    return BigDecimal.valueOf(14.6).add(addOn).add(addOn)
  }

  getPensionInsurancePercentage(): BigDecimal {
    return BigDecimal.valueOf(18.6)
  }

  getUnemploymentInsurancePercentage(): BigDecimal {
    return BigDecimal.valueOf(3.0)
  }

  getCareInsurancePercentage(state: Bundesland): BigDecimal {
    if (state === Bundesland.SAXONY) {
      return BigDecimal.valueOf(1.775)
    }
    return BigDecimal.valueOf(1.275)
  }

  getCareInsuranceAddon(): BigDecimal {
    return BigDecimal.valueOf(0.25)
  }
}
