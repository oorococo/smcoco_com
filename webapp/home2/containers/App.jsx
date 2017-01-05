// @flow
import React from 'react'
import { BrowserRouter, Match, Miss, Link } from 'react-router'

import Home from '../routes/home'
import About from '../routes/about'
import Topics from '../routes/topics'

const NoMatch = () => (
  <div>
    <h2>  火星基地尚未开发！</h2>
  </div>
)

const App = () => (
  <BrowserRouter>
    <div>
      <ul>
        <li><Link to="/"><i className="fa fa-user" />首页</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/topics">Topics</Link></li>
      </ul>
      <Match exactly pattern="/" component={Home} />
      <Match pattern="/about" component={About} />
      <Match pattern="/topics" component={Topics} />
      <Miss component={NoMatch} />
    </div>
  </BrowserRouter>
)

export default App
