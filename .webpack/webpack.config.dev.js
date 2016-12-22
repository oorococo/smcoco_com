// @flow
const path = require('path')
const webpack = require('webpack')

const src = path.resolve(__dirname, '../webapp')
const lib = path.resolve(__dirname, '../node_modules')
const MODULE_NAME = process.env.MODULE_NAME ? process.env.MODULE_NAME : 'home'

module.exports = {
  context: `${src}`,
  devServer: {
    port: 3000,
    historyApiFallback: true,
  },
  entry: {
    [MODULE_NAME]: ['react-hot-loader/patch', `${src}/${MODULE_NAME}/index.jsx`],
    common: ['react', 'react-router', 'redux', 'react-redux', 'normalize.css', 'font-awesome/css/font-awesome.css', 'basscss/css/basscss.min.css'],
  },
  output: {
    publicPath: '/',
    filename: '[name]/[name].js',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.css', '.scss'],
  },
  module: {
    loaders: [{
      test: /\.html$/,
      include: [src],
      loaders: [
        'file-loader?name=index.[ext]',
        'extract-loader',
        'raw-loader',
        'string-replace-loader?search=__public_path__&replace=&flags=g',
      ],
    }, {
      test: /\.s?css$/,
      include: [src, `${lib}/normalize.css`, `${lib}/font-awesome`, `${lib}/basscss`],
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
    new webpack.optimize.CommonsChunkPlugin({
      names: ['common'],
      filename: 'common/common.js',
      minChunks: Infinity,
    }),
  ],
}
