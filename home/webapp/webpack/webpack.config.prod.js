const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const conf = require('../conf/conf').conf

const src = path.resolve(__dirname, '../src')
const dst = path.resolve(__dirname, '../public/assets')
const lib = path.resolve(__dirname, '../node_modules')

module.exports = {
  context: `${src}`,
  devtool: 'source-map',
  entry: {
    index: ['react-hot-loader/patch', `${src}/index.jsx`],
  },
  output: {
    path: `${dst}/`,
    publicPath: `${conf.ASSETS_BASE}/`,
    filename: '[name]/js/[name].js',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.css', '.scss'],
  },
  module: {
    loaders: [{
      test: /\.(css|scss)$/,
      include: [src, `${lib}/normalize.css`, `${lib}/font-awesome`],
      loader: ExtractTextPlugin.extract("css?&sourceMap?{browsers:['last 2 versions', 'ie 9']}!sass?sourceMap"),
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
    new ExtractTextPlugin('[name]/css/[name].css'),
  ],
}
