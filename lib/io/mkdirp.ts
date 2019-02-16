import fs from 'fs'
import path from 'path'
import { isDirectory } from './isDirectory'

function mkdir(dir: string) {
  return new Promise((resolve, reject) => {
    fs.mkdir(dir, (err) => {
      if (err) return reject(err)
      resolve()
    })
  })
}

export async function mkdirp(dir: string) {
  if (await isDirectory(dir)) {
    return
  }

  await mkdirp(path.dirname(dir))
  await mkdir(dir)
}
