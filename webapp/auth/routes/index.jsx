// @flow
import React from 'react'
import { Match, Miss, Link } from 'react-router'

import Home from './home'
import About from './about'
import Topics from './topics'

const NoMatch = ({ location }: { location: any }) => (
  <div>
    <h2>Whoops</h2>
    <p>Sorry but {location.pathname} didn’t match any pages</p>
  </div>
)

const Router = () => (
  <div>
    <ul>
      <li><Link to="/"><i className="fa fa-user" />Home</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/topics">Topics</Link></li>
    </ul>
    <Match exactly pattern="/" component={Home} />
    <Match pattern="/about" component={About} />
    <Match pattern="/topics" component={Topics} />
    <Miss component={NoMatch} />
  </div>
)

export default Router
