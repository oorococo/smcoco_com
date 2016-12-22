// @flow
import React from 'react'
import { Match, Link } from 'react-router'

import Topic from './routes/topic'

export default ({ pathname }: {pathname: string}) => (
  <div>
    <h2>Topics</h2>
    <ul>
      <li><Link to={`${pathname}/rendering`}>Rendering with React</Link></li>
      <li><Link to={`${pathname}/components`}>Components</Link></li>
      <li><Link to={`${pathname}/props-v-state`}>Props v. State</Link></li>
    </ul>
    <Match pattern={`${pathname}/:topicId`} component={Topic} />
    <Match
      pattern={pathname}
      exactly
      render={() => (
        <h3>Please select a topic</h3>
      )}
    />
  </div>
)
