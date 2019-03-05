import fs from 'fs'

export function stat(filename: fs.PathLike): Promise<fs.Stats> {
  return new Promise((resolve, reject) => {
    fs.stat(filename, (err, stats) => {
      if (err) return reject(err)
      resolve(stats)
    })
  })
}
