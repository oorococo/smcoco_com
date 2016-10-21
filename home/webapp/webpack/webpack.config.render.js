const fs = require('fs')
const path = require('path')
const webpack = require('webpack')

const src = path.resolve(__dirname, '../src')
const dst = path.resolve(__dirname, '../build')

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
    publicPath: '/',
    filename: '[name].js',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.css', '.scss'],
  },
  module: {
    loaders: [{
      test: /\.(js|jsx)$/,
      loader: 'babel',
      include: [src],
      query: {
        presets: [['latest', { modules: false }], 'stage-0', 'react'],
      },
    }],
  },
  plugins: [
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.NormalModuleReplacementPlugin(/\.(css|scss)$/, 'node-noop'),
  ],
}
