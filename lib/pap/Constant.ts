import { cleanupCode } from './cleanupCode'
import { Item } from './Item'

export interface Constant {
  name: string
  type: string
  value: string
  comment: string[]
}

export function parseConstant(className: string, item: Item): Constant {
  return {
    name: item.attributes.name,
    type: item.attributes.type
      .replace('int', 'number')
      .replace('double', 'number'),
    value: cleanupCode(className, item.attributes.value)
      .replace(/^{([\S\s]*)}$/, '[$1]')
      .split(',')
      .map(str => str.trim())
      .join(', '),
    comment: item.comment,
  }
}
