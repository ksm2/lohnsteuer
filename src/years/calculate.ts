import { Input, Output } from '../model'
import { yearInfo } from './yearInfo'

export function calculate(input: Input): Output {
  return yearInfo(input.year).calculate(input)
}
