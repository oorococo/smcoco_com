// @flow
const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require("extract-text-webpack-plugin")

const src = path.resolve(__dirname, '../webapp')
const dst = path.resolve(__dirname, '../public/static')
const lib = path.resolve(__dirname, '../node_modules')
const commonLibs = [src, path.resolve(lib, 'normalize.css'), path.resolve(lib, 'font-awesome')]
const publicPath = '//smcoco.oss-cn-hangzhou.aliyuncs.com'

module.exports = {
  context: `${src}`,
  devtool: '#source-map',
  entry: {
    home: [`${src}/home/index.jsx`],
    ttd2: [`${src}/ttd2/index.jsx`],
    auth: [`${src}/auth/index.jsx`],
    common: ['react', 'react-router', 'redux', 'react-redux', 'normalize.css', 'font-awesome/css/font-awesome.css'],
  },
  output: {
    path: `${dst}/`,
    publicPath: `${publicPath}/`,
    filename: '[name]/[name].js',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.css', '.scss'],
  },
  module: {
    loaders: [{
      test: /\.html$/,
      loaders: [
        `file-loader?name=[path]/[name].[ext]`,
        'extract-loader',
        'html-loader?interpolate',
        `string-replace-loader?search=__public_path__&replace=${publicPath}&flags=g`,
        'string-replace-loader?search=<!--&replace=&flags=g',
        'string-replace-loader?search=-->&replace=&flags=g',
      ],
    }, {
      test: /\.s?css$/,
      include: commonLibs,
      loader: ExtractTextPlugin.extract({
        fallbackLoader: 'style-loader',
        loader: 'css-loader?sourceMap!sass-loader?sourceMap',
      }),
    }, {
      test: /\.jsx?$/,
      loader: 'babel-loader',
      include: src,
    }, {
      test: /\.(png|jpg|jpeg|gif|ico)(\?[a-z0-9A-Z]*)?$/,
      include: [src],
      loader: 'url-loader',
      query: {
        name: 'img/[path]/[name].[ext]',
        limit: 10000,
      },
    }, {
      test: /\.(eot|ttf|svg|woff|woff2)(\?[a-z0-9A-Z]*)?$/,
      include: commonLibs,
      loader: 'url-loader',
      query: {
        name: 'fonts/[name].[ext]',
        limit: 10000,
      },
    }],
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      names: ['common'],
      filename: 'common/common.js',
      minChunks: Infinity,
    }),
    new ExtractTextPlugin('[name]/[name].css'),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },
      sourceMap: true,
    }),
  ],
}
