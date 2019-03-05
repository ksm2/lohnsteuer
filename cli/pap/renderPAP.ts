import handlebars from 'handlebars'
import path from 'path'
import { prefixLines, readFile, writeFile } from '../io'
import { PAP } from './PAP'

handlebars.registerHelper('singlelinecmt', (str: string) => {
  if (str.length) {
    return new handlebars.SafeString(prefixLines(str[0], '// '))
  }

  return ''
})

handlebars.registerHelper('multilinecmt', (str: string, indent: string, obj: handlebars.HelperOptions) => {
  if (str.length) {
    return new handlebars.SafeString('/**\n' + prefixLines(str[0], indent + ' * ') + '\n' + indent + ' */')
  }

  return ''
})

const templatePath = path.resolve(__dirname, '..', 'templates', 'lohnsteuer.ts.hbs')
const templatePromise = readFile(templatePath).then(content => handlebars.compile(content))

export async function renderPAP(pap: PAP, outPath: string): Promise<void> {
  const template = await templatePromise
  const data = template(pap)

  await writeFile(outPath, data)
}
