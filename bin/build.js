const config = require('../lib/config')(process.argv[process.argv.length - 1])

console.log(`module.exports = ${JSON.stringify(config, null, 2)}`)
