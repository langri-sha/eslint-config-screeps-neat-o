import test from 'ava'

import pkg from './package'

test('Test API Reference URL in build', t => {
  t.truthy(pkg.scripts.build.match(
    /http:\/\/support\.screeps\.com\/hc\/en-us\/articles\/\d+-API-Reference/
  ))
})

test('Test main exists', t => {
  t.notThrows(() => { require.resolve('./', pkg.main) })
})

import config from './index'

test('Test config has some known globals', t => {
  t.truthy(config.globals)

  const keys = Object.keys(config.globals)

  t.true(keys.indexOf('Game') !== -1)
  t.true(keys.indexOf('BODYPARTS_ALL') !== -1)
})
