/* eslint global-require: 0 */
import path from 'path'
import express from 'express'
import favicon from 'serve-favicon'
import compression from 'compression'
import Log from 'log'
import chalk from 'chalk'

import { conf } from '../conf/conf'
import routers from './renders/routers'

const app = express()
const log = new Log()

app.use(compression())
app.use(favicon(path.resolve(__dirname, '../favicon.ico')))
app.use(express.static(path.resolve(__dirname, '../public')))
routers(app)

app.listen(conf.PROD_PORT, () => {
  log.info(chalk.blue.bgGreen.underline(`Api server is listening port ${conf.PROD_PORT} in ${process.env.NODE_ENV} environment`))
})
