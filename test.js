import test from 'ava'

import pkg from './package'

test('Test API Reference URL in build', t => {
  console.log('Foo', pkg.scripts.build)
  t.truthy(pkg.scripts.build.match(
    /http:\/\/support\.screeps\.com\/hc\/en-us\/articles\/\d+-API-Reference/
  ))
})

test('Test main exists', t => {
  t.notThrows(() => { require.resolve('./', pkg.main) })
})

import config from './index'

test('Test stub content', t => {
  t.truthy(config.apiUrl)
})
