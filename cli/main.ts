#!/usr/bin/npx ts-node
import { create, exec } from 'commandpost'
import { download, DownloadArguments, DownloadOptions, transform, TransformArgs, TransformOpts } from '.'

const app = create('steuer')
  .help('-h, --help', 'Renders this help text.')

app.subCommand<DownloadOptions, DownloadArguments>('download <url>')
  .description('Downloads a pseudo code from the BMF.')
  .action(download)

app.subCommand<TransformOpts, TransformArgs>('transform <xml>')
  .description('Transforms an XML pseudo code file to TypeScript.')
  .option('-y, --year <year>', 'The year for which to transform the file.')
  .action(transform)

exec(app, process.argv)
  .catch((err) => console.error(err.stack))
