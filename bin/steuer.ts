#!/usr/bin/npx ts-node
import { create, exec } from 'commandpost'
import { download, DownloadArguments, DownloadOptions } from '../cli'

const app = create('steuer')
  .help('-h, --help', 'Renders this help text.')

app.subCommand<DownloadOptions, DownloadArguments>('download <url>')
  .description('Downloads a pseudo code from the BMF.')
  .action(download)

exec(app, process.argv)
  .catch((err) => console.error(err.stack))
