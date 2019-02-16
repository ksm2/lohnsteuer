import fs from 'fs'

export function readFile(pathname: fs.PathLike): Promise<string> {
  return new Promise((resolve, reject) => {
    fs.readFile(pathname, 'utf8', (err, data) => {
      if (err) return reject(err)
      resolve(data)
    })
  })
}
