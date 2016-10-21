/* eslint global-require: 0 */
const express = require('express')
const Log = require('log')
const chalk = require('chalk')

const webpack = require('webpack')
const devMiddleware = require('webpack-dev-middleware')
const hotMiddleware = require('webpack-hot-middleware')


const conf = require('../conf/conf').conf
const webpackConfig = require('./webpack.config.dev')

const app = express()
const log = new Log()

const compiler = webpack(webpackConfig)

app.use(devMiddleware(compiler, {
  noInfo: true,
  publicPath: webpackConfig.output.publicPath,
}))

app.use(hotMiddleware(compiler))

app.get('/api/test', (req, res) => {
  res.json([...(new Array(9999).keys())].map(i => {
    return {
      username: `user${i}`,
    }
  }))
})

app.get('*', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title></title>
      <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1">
    </head>
    <body>
      <div id="root"></div>
    </body>
    <script src="/index.js"></script>
    </html>
  `)
})

app.listen(conf.DEV_PORT, () => {
  log.info(chalk.blue.bgGreen.underline(`Api server is listening port ${conf.DEV_PORT} in ${process.env.NODE_ENV} environment`))
})
