const path = require('path')
const webpack = require('webpack')

const src = path.resolve(__dirname, '../src')
const dst = path.resolve(__dirname, '../build')
const lib = path.resolve(__dirname, '../node_modules')

module.exports = {
  context: `${src}`,
  devtool: 'cheap-module-eval-source-map',
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
    extensions: ['.js', '.jsx', '.css', '.scss'],
  },
  module: {
    loaders: [{
      test: /\.(css|scss)$/,
      include: [src, `${lib}/normalize.css`, `${lib}/font-awesome`],
      loader: 'style!css?sourceMap!sass?sourceMap',
    }, {
      test: /\.(js|jsx)$/,
      loader: 'babel',
      include: src,
      query: {
        presets: [['latest', {modules: false}], 'stage-0', 'react'],
        plugins: ['react-hot-loader/babel'],
      },
    }, {
      test: /\.(png|jpg|jpeg|gif|eot|ttf|svg|woff|woff2)(\?[a-z0-9A-Z]*)?$/,
      include: [src, `${lib}/normalize.css`, `${lib}/font-awesome`],
      loader: 'url',
      query: {
        name: '[hash].[ext]',
        limit: 10000,
      },
    }, {
      test: /\.html$/,
      loader: 'file-loader?name=[name].[ext]!extract-loader!html-loader',
    }],
  },
  devServer: {
    proxy: {
      '/api/*': {
        target: 'https://other-server.example.com',
        secure: false,
      },
    },
  },
}
