import { cleanupCode } from './cleanupCode'
import { Item } from './Item'

export interface Variable {
  name: string
  type: string
  default?: string
  comment: string[]
}

export function parseVariable(className: string, item: Item): Variable {
  const { type } = item.attributes
  const defaultTypes: Record<string, string> = {
    int: '0',
    BigDecimal: 'BigDecimal.ZERO()',
  }
  return {
    type: type
      .replace('int', 'number')
      .replace('double', 'number'),
    name: item.attributes.name,
    default: item.attributes.default ? cleanupCode(className, item.attributes.default) : defaultTypes[type],
    comment: item.comment,
  }
}
