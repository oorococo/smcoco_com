import React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import App from './containers/App'
import createStore from './store/createStore'

/* eslint no-underscore-dangle: 0 */
const initialState = window.___INITIAL_STATE__ ? window.___INITIAL_STATE__ : {}
const store = createStore(initialState)

export default (root, Component) => {
  render(<AppContainer><App store={store} component={Component} /></AppContainer>, root)
}
