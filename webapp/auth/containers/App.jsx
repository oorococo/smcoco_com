// @flow
import React from 'react'
import { BrowserRouter, Match, Miss, Link } from 'react-router'

import Home from '../routes/home'
import About from '../routes/about'
import Topics from '../routes/topics'

function test(s: string): string {
  return s
}

const NoMatch = ({ location }: { location: any }) => (
  <div>
    <h2>Whoops</h2>
    <p>Sorry but {location.pathname} didn’t match any pages</p>
  </div>
)

const App = () => (
  <BrowserRouter>
    <div>
      {test('你好!')}
      <div>sfsf</div>
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
  </BrowserRouter>
)

export default App
