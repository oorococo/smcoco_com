// @flow

const path = require('path')
const webpack = require('webpack')

const src = path.resolve(__dirname, '../webapp')
const dst = path.resolve(__dirname, '../build')
const lib = path.resolve(__dirname, '../node_modules')

module.exports = {
  context: `${src}`,
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    port: 3000,
    contentBase: dst,
    historyApiFallback: true,
  },
  entry: {
    index: [
      'react-hot-loader/patch',
      `${src}/index.jsx`,
    ],
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
      test: /\.html$/,
      loader: 'file-loader?name=[name].[ext]!extract-loader!html-loader?interpolate',
    }, {
      test: /\.(css|scss)$/,
      include: [src, `${lib}/normalize.css`, `${lib}/font-awesome`],
      loader: 'style-loader!css-loader?sourceMap!sass-loader?sourceMap',
    }, {
      test: /\.jsx?$/,
      loader: 'babel-loader',
      include: src,
      query: {
        cacheDirectory: true,
      },
    }, {
      test: /\.(ico|png|jpg|jpeg|gif|eot|ttf|svg|woff|woff2)(\?[a-z0-9A-Z]*)?$/,
      include: [src, `${lib}/normalize.css`, `${lib}/font-awesome`],
      loader: 'url-loader',
      query: {
        name: '[name].[ext]',
      },
    }],
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
  ],
}
