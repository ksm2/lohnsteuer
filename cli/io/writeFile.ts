import fs from 'fs'

export function writeFile(pathname: fs.PathLike, data: string): Promise<void> {
  return new Promise((resolve, reject) => {
    fs.writeFile(pathname, data, 'utf8', (err) => {
      if (err) return reject(err)
      resolve()
    })
  })
}
