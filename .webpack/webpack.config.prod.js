const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require("extract-text-webpack-plugin")

const src = path.resolve(__dirname, '../webapp')
const dst = path.resolve(__dirname, '../build')
const lib = path.resolve(__dirname, '../node_modules')

module.exports = {
  context: `${src}`,
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    port: 3000,
    contentBase: dst,
  },
  entry: {
    index: [`${src}/index.jsx`],
    indexHtml: [`${src}/index.html`],
  },
  output: {
    path: `${dst}/`,
    publicPath: '/',
    filename: '[name].js',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.css', '.scss'],
  },
  module: {
    loaders: [{
      test: /\.html$/,
      loader: 'file-loader?name=[name].[ext]!extract-loader!html-loader',
    }, {
      test: /\.(css|scss)$/,
      include: [src, `${lib}/normalize.css`, `${lib}/font-awesome`],
      loader: ExtractTextPlugin.extract({
        fallbackLoader: 'style-loader',
        loader: 'css-loader?sourceMap!sass-loader?sourceMap',
      }),
    }, {
      test: /\.jsx?$/,
      loader: 'babel-loader',
      include: src,
    }, {
      test: /\.tsx?$/,
      loader: 'ts-loader',
    }, {
      test: /\.(png|jpg|jpeg|gif|eot|ttf|svg|woff|woff2)(\?[a-z0-9A-Z]*)?$/,
      include: [src, `${lib}/normalize.css`, `${lib}/font-awesome`],
      loader: 'url-loader',
      query: {
        name: '[hash].[ext]',
        limit: 10000,
      },
    }],
  },
  plugins: [
    new ExtractTextPlugin('style.css'),
  ],
}
