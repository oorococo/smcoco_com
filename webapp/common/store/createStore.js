import { applyMiddleware, compose, createStore } from 'redux'
import createReducer from './reducers'

import thunkMiddleware from './middlewares/thunkMiddleware'
import loadingMiddleware from './middlewares/loadingMiddleware'
import promiseMiddleware from './middlewares/promiseMiddleware'
import errorMiddleware from './middlewares/errorMiddleware'

export default (initialState = {}) => {
  // ======================================================
  // Middleware Configuration
  // ======================================================
  const middleware = [
    thunkMiddleware,
    loadingMiddleware,
    promiseMiddleware,
    errorMiddleware,
  ]

  // ======================================================
  // Store Enhancers
  // ======================================================
  const enhancers = []
  if (process.env.NODE_ENV === 'development') {
    const devToolsExtension = window.devToolsExtension
    if (typeof devToolsExtension === 'function') {
      enhancers.push(devToolsExtension())
    }
  }

  // ======================================================
  // Store Instantiation and HMR Setup
  // ======================================================
  const store = createStore(
    createReducer(),
    initialState,
    compose(
      applyMiddleware(...middleware),
      ...enhancers,
    ),
  )
  store.asyncReducers = {}

  if (module.hot) {
    module.hot.accept('./reducers', () => {
      /* eslint global-require: 0 */
      const reducers = require('./reducers').default
      store.replaceReducer(reducers(store.asyncReducers))
    })
  }

  return store
}
