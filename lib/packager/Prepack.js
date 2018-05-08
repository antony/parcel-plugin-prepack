'use strict'

const { prepackSources } = require('prepack')
const { Packager } = require('parcel-bundler')

class PrepackPackager extends Packager {
  async addAsset (asset) {
    const { name, generated } = asset
    const { code, map } = prepackSources([
      {
        filePath: name,
        fileContents: generated.js,
        sourceMapContents: generated.map
      }
    ], {})
    
    await this.dest.write(code)
  }
}

module.exports = PrepackPackager