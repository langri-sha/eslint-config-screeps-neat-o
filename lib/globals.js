const babylon = require('babylon')
const t = require('babel-types')
const traverse = require('babel-traverse').default
const Xray = require('x-ray')

function fromApiReference (apiUrl) {
  const x = new Xray()

  return new Promise((resolve, reject) => {
    x(apiUrl, {
      objects: x(['.api-title']),
      constantsSrc: x('pre:last-child')
    })((err, {objects, constantsSrc}) => {
      if (err) {
        return reject(err)
      }

      const ast = babylon.parse(`root = ${constantsSrc}`)
      const constants = []

      traverse(ast, {
        enter (path) {
          if (t.isObjectExpression(path.node, {start: 7})) {
            const root = path.node

            traverse(path.node, {
              noScope: true,
              enter (path) {
                if (t.isProperty(path.node) && path.parent === root) {
                  constants.push(path.node.key.name)
                }
              }
            })
          }

          if (t.isAssignmentExpression(path.node)) {
            constants.push(path.node.left.name)
          }
        }
      })

      resolve(objects.concat(constants))
    })
  })
  .then(globals => {
    return globals.reduce((o, key) => {
      o[key] = false

      return o
    }, {})
  })
}

module.exports = {
  fromApiReference
}
