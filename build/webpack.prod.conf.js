process.env.NODE_ENV = 'production'

var path = require('path')
var config = require('../config')
var utils = require('./utils')
var webpack = require('webpack')
var merge = require('webpack-merge')
var baseWebpackConfig = require('./webpack.base.conf')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var env = process.env.NODE_ENV === 'testing'
  ? require('../config/test.env')
  : config.build.env

module.exports = [
  merge(baseWebpackConfig, {
    externals: {
      'vue': 'vue',
      'vuex': 'vuex',
      'vue-resource': 'vue-resource',
    },
    module: {
      loaders: utils.styleLoaders({ sourceMap: config.build.productionSourceMap, extract: true })
    },
    devtool: config.build.productionSourceMap ? '#source-map' : false,
    output: {
      path: config.build.assetsRoot,
      filename: utils.assetsPath('flextable.min.js'),
    },
    vue: {
      loaders: utils.cssLoaders({
        sourceMap: config.build.productionSourceMap,
        extract: true
      })
    },
    plugins: [
      // http://vuejs.github.io/vue-loader/en/workflow/production.html
      new webpack.DefinePlugin({
        'process.env': env
      }),
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false
        }
      }),
      new webpack.optimize.OccurrenceOrderPlugin(),
      new ExtractTextPlugin(utils.assetsPath('flextable.min.css')),
    ]
  }),
  merge(baseWebpackConfig, {
    externals: {
      'vue': 'vue',
      'vuex': 'vuex',
      'vue-resource': 'vue-resource',
    },
    module: {
      loaders: utils.styleLoaders({ sourceMap: config.build.productionSourceMap, extract: true })
    },
    devtool: config.build.productionSourceMap ? '#source-map' : false,
    output: {
      path: config.build.assetsRoot,
      filename: utils.assetsPath('flextable.common.js'),
      library: 'vue-flextable',
      libraryTarget: 'commonjs2',
    },
  })
]
