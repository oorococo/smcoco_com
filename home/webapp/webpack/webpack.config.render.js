const fs = require('fs')
const path = require('path')
const webpack = require('webpack')

const conf = require('../conf/conf').conf

const src = path.resolve(__dirname, '../src')
const dst = path.resolve(__dirname, '../build')
const lib = path.resolve(__dirname, '../node_modules')

const nodeModules = {}
fs.readdirSync('node_modules')
  .filter(x => ['.bin'].indexOf(x) === -1)
  .forEach((mod) => {
    nodeModules[mod] = `commonjs ${mod}`
  })

module.exports = {
  externals: nodeModules,
  context: `${src}`,
  target: 'node',
  node: {
    __dirname: false,
  },
  entry: {
    render: [`${src}/render.jsx`],
  },
  output: {
    path: `${dst}/`,
    publicPath: conf.ASSETS_BASE,
    filename: '[name].js',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.css', '.scss'],
  },
  module: {
    loaders: [{
      test: /\.(css|scss)$/,
      include: [src, `${lib}/normalize.css`, `${lib}/font-awesome`],
      loader: "style!css?-minimize&sourceMap?{browsers:['last 2 versions', 'ie 9']}!sass?sourceMap",
    }, {
      test: /\.(js|jsx)$/,
      loader: 'babel',
      include: src,
      query: {
        presets: [['latest', { modules: false }], 'stage-0', 'react'],
      },
    }, {
      test: /\.(png|jpg|jpeg|gif|eot|ttf|svg|woff|woff2)(\?[a-z0-9A-Z]*)?$/,
      include: [src, `${lib}/normalize.css`, `${lib}/font-awesome`],
      loader: 'url',
      query: {
        name: '[hash].[ext]',
        limit: 10000,
      },
    }],
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.NoErrorsPlugin(),
  ],
}
