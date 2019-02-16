export function prefixLines(str: string, prefix: string): string {
  return str.split(/\n/g).map(line => `${prefix}${line}`).join('\n')
}
