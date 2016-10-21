const path = require('path')
const webpack = require('webpack')

const conf = require('../conf/conf').conf

const src = path.resolve(__dirname, '../src')
const dst = path.resolve(__dirname, '../build')
const lib = path.resolve(__dirname, '../node_modules')

module.exports = {
  context: `${src}`,
  target: 'node',
  node: {
    __dirname: false,
  },
  entry: {
    index: [`${src}/index.jsx`],
  },
  output: {
    path: `${dst}/`,
    publicPath: '/',
    filename: '[name].js',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.css', '.scss'],
  },
  module: {
    loaders: [{
      test: /\.(css|scss)$/,
      include: [src, `${lib}/normalize.css`, `${lib}/font-awesome`],
      loader: 'style!css!sass',
    }, {
      test: /\.(js|jsx)$/,
      loader: 'babel',
      include: src,
      query: {
        presets: [['latest', { modules: false }], 'stage-0', 'react'],
      },
    }, {
      test: /\.(eot|ttf|svg|woff|woff2)(\?[a-z0-9A-Z]*)?$/,
      include: [src, `${lib}/normalize.css`, `${lib}/font-awesome`],
      loader: 'url',
      query: {
        name: '[name]/img/[name].[ext]',
        limit: 1000000000000,
      },
    }, {
      test: /\.(png|jpg|jpeg|gif)(\?[a-z0-9A-Z]*)?$/,
      include: [src, `${lib}/normalize.css`, `${lib}/font-awesome`],
      loader: 'url',
      query: {
        name: '[name]/fonts/[name].[ext]',
        limit: 100000000000,
      },
    }],
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.NoErrorsPlugin(),
  ],
}
