import fs from 'fs'
import path from 'path'
import React from 'react'
import { renderToString } from 'react-dom/server'
import { match, RouterContext } from 'react-router'
import { Provider } from 'react-redux'
import { minify } from 'html-minifier'

import { conf } from '../../conf/conf'

import getRoutes from '../routes'
import { configureStore } from '../store'

const style = fs.readFileSync(path.resolve(__dirname, '../public/assets/index/css/index.css'))

export default (req, res) => {
  const state = {}
  const store = configureStore(state, undefined)
  const routes = getRoutes(store)
  match({ routes, location: req.url }, (error, redirectLocation, renderProps) => {
    if (error) {
      res.status(500).send(error.message)
    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search)
    } else if (renderProps) {
      const reactRoot = renderToString(
        <Provider store={store}>
          <RouterContext {...renderProps} />
        </Provider>
      )
      const finalState = store.getState()
      const html = `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
          <meta http-equiv="x-ua-compatible" content="ie=edge">
          <title></title>
          <style>${style}</style>
        </head>
        <body>
          <div id="root">${reactRoot}</div>
          <script>window.__INITIAL_STATE__ = ${JSON.stringify(finalState)}</script>
          <script src="${conf.ASSETS_BASE}/index/js/index.js"></script>
        </body>
        </html>
      `
      res.send(minify(html, {
        removeAttributeQuotes: true,
        collapseWhitespace: true,
        collapseInlineTagWhitespace: true,
      }))
    } else {
      res.status(404).send('页面没找到哦亲!')
    }
  })
}
