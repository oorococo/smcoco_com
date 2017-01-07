import React, { PureComponent } from 'react'
import { BrowserRouter, Match, Miss, Link } from 'react-router'
/* eslint import/no-unresolved: 0, import/no-extraneous-dependencies: 0, import/extensions: 0 */
import NoMatch from '../../common/components/PageNotFound'

import Home from '../routes/home'
import About from '../routes/about'
import Topics from '../routes/topics'

class App extends PureComponent {
  render = () => (
    /* eslint no-undef: 0 */
    <BrowserRouter>
      <div>
        <ul>
          <li><Link to="/"><i className="fa fa-user" /></Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/topics">Topics</Link></li>
        </ul>
        <Match exactly pattern="/" component={Home} />
        <Match pattern="/about" component={About} />
        <Match pattern="/topics" component={Topics} />
        <Miss component={NoMatch} />
      </div>
    </BrowserRouter >
  )
}

export default App
