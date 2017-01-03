import express from 'express'
import React from 'react'
import { renderToString } from 'react-dom/server'
import { ServerRouter, createServerRenderContext } from 'react-router'

import Router from './routes'

const app = express()

app.get('/*', (req, res) => {
  const context = createServerRenderContext()
  let markup = renderToString(
    <ServerRouter
      location={req.url}
      context={context}
    >
      <Router />
    </ServerRouter>,
  )

  const result = context.getResult()

  if (result.redirect) {
    res.writeHead(301, {
      Location: result.redirect.pathname,
    })
    res.end()
  } else {
    if (result.missed) {
      res.writeHead(404)
      markup = renderToString(
        <ServerRouter
          location={req.url}
          context={context}
        >
          <Router />
        </ServerRouter>,
      )
    }
    res.send(markup)
    res.end()
  }
})

export default app
