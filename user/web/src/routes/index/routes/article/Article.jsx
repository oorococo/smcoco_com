import React from 'react'
import {Link} from 'react-router'

export default class extends React.Component {
  render() {
    return (
      <div className="module-ctn" style={{background: 'green'}}>
        <Link className="topbar-link" to="/wander" activeClassName="active">返回</Link>
        来注册把
      </div>
    )
  }
}
