const base = require('../lib/base')
const globals = require('../lib/globals')

async function main () {
  const config = Object.assign({}, base)
  const apiUrl = process.argv[process.argv.length - 1]

  try {
    config.globals = await globals.fromApiReference(apiUrl)
  } catch (err) {
    console.error('ERROR', err)

    process.exit(-1)
  }

  console.log(`module.exports = ${JSON.stringify(config, null, 2)}`)
  process.exit(0)
}

main()
