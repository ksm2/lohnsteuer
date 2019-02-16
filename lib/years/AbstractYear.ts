import { BigDecimal } from 'bigdecimal'
import { Bundesland, Input, Output } from '../model'
import { calculateChurchTax } from './calculateChurchTax'
import { toMonth } from './toMonth'
import { convertWageInputs, WageInputs } from './WageInputs'
import { convertWageOutputs, WageOutputs } from './WageOutputs'

const HUNDRED = BigDecimal.valueOf(100)
const TWO_HUNDRED = BigDecimal.valueOf(200)

function calculateInsurance(grossSalary: BigDecimal, percentage: BigDecimal, single = false): number {
  return grossSalary.multiply(percentage.divide(single ? HUNDRED : TWO_HUNDRED)).setScale(0, BigDecimal.ROUND_UP).longValue()
}

/**
 * Created on 2019-02-16.
 *
 * @author Konstantin Simon Maria Möllers
 */
export abstract class AbstractYear {

  calculate(input: Input): Output {
    const grossSalary = toMonth(BigDecimal.valueOf(input.grossSalary))

    const wageInputs = convertWageInputs(input)
    const hasAddOn = !!wageInputs.PVZ
    const { salaryTax, solidarityTax, churchBasis } = convertWageOutputs(this.calculateWageTax(wageInputs))
    const churchTax = calculateChurchTax(input, churchBasis).longValue()
    const wageTax = salaryTax + solidarityTax + churchTax

    const healthAddOn = BigDecimal.valueOf(input.healthInsuranceAddOn)
    const healthInsurance = calculateInsurance(grossSalary, this.getHealthInsurancePercentage(healthAddOn))
    const pensionInsurance = calculateInsurance(grossSalary, this.getPensionInsurancePercentage())
    const unemploymentInsurance = calculateInsurance(grossSalary, this.getUnemploymentInsurancePercentage())
    const carePercentage = this.getCareInsurancePercentage(input.state).add(hasAddOn ? this.getCareInsuranceAddon() : BigDecimal.ZERO())
    const careInsurance = calculateInsurance(grossSalary, carePercentage, true)
    const socialCharges = healthInsurance + pensionInsurance + careInsurance + unemploymentInsurance

    const netSalary = grossSalary.subtract(BigDecimal.valueOf(wageTax)).subtract(BigDecimal.valueOf(socialCharges)).longValue()

    return {
      grossSalary: grossSalary.longValue(),
      salaryTax,
      solidarityTax,
      churchTax,
      wageTax,
      healthInsurance,
      pensionInsurance,
      unemploymentInsurance,
      careInsurance,
      socialCharges,
      netSalary,
    }
  }

  abstract calculateWageTax(input: WageInputs): WageOutputs

  abstract getHealthInsurancePercentage(addOn: BigDecimal): BigDecimal

  abstract getPensionInsurancePercentage(): BigDecimal

  abstract getUnemploymentInsurancePercentage(): BigDecimal

  abstract getCareInsurancePercentage(state: Bundesland): BigDecimal

  abstract getCareInsuranceAddon(): BigDecimal
}
