/* eslint global-require: 0 */
import React from 'react'
import ReactDOM from 'react-dom'
import {Router, match, hashHistory} from 'react-router'
import {syncHistoryWithStore} from 'react-router-redux'
import {AppContainer} from 'react-hot-loader'

import './styles/index.scss'
import './resources/swiper/swiper.min.js'
import './resources/swiper/swiper.min.css'

import createRoutes from './routes'
import {configureStore} from './store'

import fs from 'fs'

console.log(fs)

const initialState = {}
const store = configureStore(initialState, hashHistory)
const routes = createRoutes(store)
const history = syncHistoryWithStore(hashHistory, store)

match({history, routes}, (error, redirectLocation, renderProps) => {
  ReactDOM.render(
    <AppContainer>
      <Router {...renderProps} />
    </AppContainer>,
    document.getElementById('react-root')
  )

  if (module.hot) {
    module.hot.accept('./routes', () => {
      const createRoutesHot = require('./routes').default
      ReactDOM.render(
        <AppContainer>
          <Router {...renderProps} />
        </AppContainer>,
        document.getElementById('react-root')
      )
    })
  }
})
