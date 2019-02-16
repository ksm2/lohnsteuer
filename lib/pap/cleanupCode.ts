export function cleanupCode(className: string, codeLine: string): string {
  const classPrefix = new RegExp(`${className}.`, 'g')

  // add extra space for =, remove spaces if function is invoked
  return codeLine
    .replace(/\r\n/g, '\n')
    .replace(/\s*\(\s*/g, '(') // remove whitespace around (
    .replace(/\s*\)/g, ')') // remove whitespace before )
    .replace(/==/g, '===') // avoid type coercion
    .replace(/!=/g, '!==') // avoid type coercion
    .replace(/,([^\s])/g, ', $1')
    .replace(/([a-zA-Z0-9])\s*=\s*([^=])/, '$1 = $2')
    .replace(/BigDecimal.valueOf\(((?:\d+)(?:\.\d*)?)\s*\+\s*((?:\d+)(?:\.\d*)?)\)/, 'BigDecimal.valueOf(\'$1\').add(BigDecimal.valueOf(\'$2\'))')
    .replace(/new\sBigDecimal\(((?:\d+)(?:\.\d*)?)\)/g, 'new BigDecimal(\'$1\')')
    .replace(/BigDecimal\.valueOf\(((?:\d+)(?:\.\d*)?)[LD]?\)/g, 'new BigDecimal(\'$1\')')
    .replace(/BigDecimal\.valueOf\((.*?)\)/g, 'new BigDecimal(String($1))')
    .replace(classPrefix, '') // remove the class prefix, all is local
    .replace(/new\sBigDecimal\('0(?:\.0*)?'\)/g, 'BigDecimal.ZERO')
    .replace(/new\sBigDecimal\('1(?:\.0*)?'\)/g, 'BigDecimal.ONE')
    .replace(/BigDecimal\.ZERO/g, 'BigDecimal.ZERO()')
    .replace(/BigDecimal\.ONE/g, 'BigDecimal.ONE()')
    .replace(/BigDecimal\.TEN/g, 'BigDecimal.TEN()')
    .trim()
}
