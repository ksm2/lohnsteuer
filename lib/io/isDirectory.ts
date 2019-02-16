import fs from "fs"
import { stat } from './stat'

export async function isDirectory(filename: fs.PathLike): Promise<boolean> {
  try {
    const stats = await stat(filename)
    return stats.isDirectory()
  } catch (e) {
    if (e.code === 'ENOENT') {
      return false
    }

    throw e
  }
}
