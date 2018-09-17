'use strict'

const webpack = require('webpack')
const paths = require('../utils/paths')
const WriteFilePlugin = require('write-file-webpack-plugin')
const { useHotReload } = require('./webpack.vars')

let plugins = [
  new webpack.DefinePlugin({
    __DEVELOPMENT__: true,
    __STACK_ASSETS__: false
  }),
  new webpack.ProvidePlugin({
    'cozy.client': 'cozy-client-js/dist/cozy-client.js',
    'cozy.bar': 'cozy-bar/dist/cozy-bar.js'
  })
]

if (useHotReload) {
  plugins = plugins.concat([
    new webpack.HotModuleReplacementPlugin(),
    /*
    Here is the trick about hot-reload:
    We launch a webpack-dev-server but we write the computed build files to the disk to allow running `cozy-stack server` on them.
    This config file works with the script: /scripts/standalone.js
    */
    new WriteFilePlugin()
  ])
}

module.exports = {
  devtool: '#source-map',
  mode: 'development',
  externals: ['cozy'],
  module: {
    rules: [
      {
        test: require.resolve(paths.appCozyBarJs),
        loader: require.resolve('imports-loader'),
        options: {
          css: paths.appCozyBarCss
        }
      }
    ]
  },
  plugins
}
