// @flow
import React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'

import './index.html'
import './favicon.ico'
import './styles/index.scss'

import App from './containers/App'

const root = document.getElementById('root')

render(<AppContainer><App /></AppContainer>, root)
if (module.hot) {
  module.hot.accept('./containers/App', () => { render(<AppContainer><App /></AppContainer>, root) })
}
