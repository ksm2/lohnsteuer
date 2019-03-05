import fetch from 'node-fetch'
import path from 'path'
import { writeFile, writeLine } from './io'

export interface DownloadOptions {
}

export interface DownloadArguments {
  url: string
}

export async function download(opts: DownloadOptions, { url }: DownloadArguments): Promise<void> {
  const response = await fetch(url)
  const text = await response.text()
  if (!/<PAP name="([^"]+)"/.test(text)) {
    throw new Error(`Not a valid pseudo code: ${url}`)
  }

  const name = RegExp.$1
  const pathname = path.resolve(__dirname, '..', 'pseudocodes', `${name}.xml`)

  await writeFile(pathname, text)
  writeLine(`Downloaded file to ${pathname}`)
}
