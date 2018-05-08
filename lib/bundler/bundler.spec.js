'use strict'

const { setup } = require('../../test/util/bundler-setup')
const assertBundleTree = require('parcel-assert-bundle-tree')
const { join } = require('path')

describe('basic', () => {
  const testFile = join(process.cwd(), 'test', 'input.js')

  it('Should create a basic prepacked bundle', async () => {
    const bundler = await setup(testFile)
    const bundle = await bundler.bundle()

    assertBundleTree(bundle, {
      type: 'js',
      assets: ['input.js'],
      childBundles: [
        {
          type: 'map'
        }
      ]
    })
  })
})
