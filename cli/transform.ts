import path from 'path'
import { mkdirp, readPAP, renderPAP } from '../lib'

export interface TransformOpts {
  year: string[]
}

export interface TransformArgs {
  xml: string
}

export async function transform({ year }: TransformOpts, { xml }: TransformArgs) {
  const yearNum = +year[0]
  if (!yearNum) {
    throw new Error(`Invalid year: ${year}`)
  }

  const pap = await readPAP(xml)
  pap.name = `WageTax${year}`
  pap.fn = 'calculateWageTax'
  const outPath = path.resolve(__dirname, `../lib/years/${year}/${pap.fn}.ts`)
  await mkdirp(path.dirname(outPath))

  await renderPAP(pap, outPath)
}
