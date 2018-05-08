'use strict'

module.exports = function (bundler) {
  bundler.addPackager('js', require.resolve('./lib/packager/Prepack'))
}