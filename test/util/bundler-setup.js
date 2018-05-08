'use strict'

const Bundler = require('parcel-bundler')
const { join } = require('path')
const PrepackPlugin = require('../..')

async function setup (input, overrides) {
  const options = Object.assign({
    outDir: join(process.cwd(), 'dist'),
    watch: false,
    cache: false,
    hmr: false,
    logLevel: 0,
    publicUrl: './'
  }, overrides)

  const bundler = new Bundler(input, options)
  await PrepackPlugin(bundler)
  return bundler
}

exports.setup = setup