import fs from 'fs'
import sax from 'sax'
import { cleanupCode } from './cleanupCode'
import { Constant, parseConstant } from './Constant'
import { Item } from './Item'
import { Method, PAP } from './PAP'
import { parseVariable, Variable } from './Variable'

function parseComment(cmt: string): string {
  return cmt
    .replace(/\r\n/g, '\n')
    .replace(/\s*\n\s*/g, '\n')
    .trim()
}

export function readPAP(pseudoCode: fs.PathLike): Promise<PAP> {
  return new Promise((resolve) => {
    const saxStream = sax.createStream(true, { trim: true })
    const comments: string[] = []
    const inputs: Variable[] = []
    const outputs: Variable[] = []
    const internals: Variable[] = []
    const constants: Constant[] = []
    const methods: Method[] = []
    let pap: Item | null = null
    let name = ''
    let main = ''
    let currentBody = ''
    let currentMethod: Method | null = null
    let indent = '    '

    const incIndent = () => indent = '  ' + indent
    const decIndent = () => indent = indent.substring(2)

    saxStream.on('opentag', (tag: sax.Tag) => {
      const comment = comments.splice(0, comments.length).map(parseComment)
      const item = { ...tag, comment }

      switch (item.name) {
        case 'PAP':
          name = item.attributes.name
          pap = item
          break
        case 'CONSTANT':
          if (!item.isSelfClosing) throw new TypeError('CONSTANT must be self-closing.')
          constants.push(parseConstant(name, item))
          break
        case 'INPUT':
          if (!item.isSelfClosing) throw new TypeError('INPUT must be self-closing.')
          inputs.push(parseVariable(name, item))
          break
        case 'OUTPUT':
          if (!item.isSelfClosing) throw new TypeError('OUTPUT must be self-closing.')
          outputs.push(parseVariable(name, item))
          break
        case 'INTERNAL':
          if (!item.isSelfClosing) throw new TypeError('INTERNAL must be self-closing.')
          internals.push(parseVariable(name, item))
          break
        case 'MAIN':
          currentBody = ''
          main = ''
          decIndent()
          break
        case 'METHOD':
          currentBody = ''
          currentMethod = { body: '', name: item.attributes.name }
          methods.push(currentMethod)
          break
        case 'IF':
          currentBody += indent + 'if (' + cleanupCode(name, item.attributes.expr) + ') '
          break
        case 'THEN':
          currentBody += '{\n'
          incIndent()
          break
        case 'ELSE':
          currentBody += indent + 'else {\n'
          incIndent()
          break
        case 'EVAL':
          currentBody += indent + cleanupCode(name, item.attributes.exec) + '\n'
          break
        case 'EXECUTE':
          currentBody += indent + item.attributes.method + '()\n'
          break
        case 'OUTPUTS':
        case 'INPUTS':
        case 'CONSTANTS':
        case 'VARIABLES':
        case 'INTERNALS':
        case 'METHODS':
          break

        default:
          throw new Error(`Unknown ${item.name} tag.`)
      }
    })

    saxStream.on('closetag', (tagName: string) => {
      switch (tagName) {
        case 'PAP':
          resolve({ name, inputs, outputs, internals, constants, main, methods })
          return
        case 'THEN':
          decIndent()
          currentBody += indent + '}\n'
          return
        case 'ELSE':
          decIndent()
          currentBody += indent + '}\n'
          return
        case 'MAIN':
          incIndent()
          main = currentBody.trimRight()
          currentBody = ''
          return
        case 'METHOD':
          if (currentMethod) currentMethod.body = currentBody.trimRight()
          currentBody = ''
          return
      }
    })

    saxStream.on('comment', (comment: string) => {
      comments.push(comment)
    })

    fs.createReadStream(pseudoCode).pipe(saxStream)
  })
}
