const { merge } = require('webpack-merge'),
  baseConfig = require('./webpack.base')

module.exports = merge(baseConfig, {
  mode: 'production',
  devtool: false
})
