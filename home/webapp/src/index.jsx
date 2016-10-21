/* eslint global-require: 0 */

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Router, useRouterHistory, match } from 'react-router'
import createBrowserHistory from 'history/lib/createBrowserHistory'
import { syncHistoryWithStore } from 'react-router-redux'
import { AppContainer } from 'react-hot-loader'

import './styles/index.scss'

import createRoutes from './routes'
import { configureStore } from './store'

const browserHistory = useRouterHistory(createBrowserHistory)({
  basename: '/',
})

const initialState = {}
const store = configureStore(initialState, browserHistory)
const routes = createRoutes(store)
const history = syncHistoryWithStore(browserHistory, store)

match({ history, routes }, (error, redirectLocation, renderProps) => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <Router {...renderProps} />
      </Provider>
    </AppContainer>,
    document.getElementById('root')
  )

  if (module.hot) {
    module.hot.accept('./routes', () => {
      /* eslint no-unused-vars: 0 */
      const createRoutesHot = require('./routes').default
      ReactDOM.render(
        <AppContainer>
          <Provider store={store}>
            <Router {...renderProps} />
          </Provider>
        </AppContainer>,
        document.getElementById('root')
      )
    })
  }
})
