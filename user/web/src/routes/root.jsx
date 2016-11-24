import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

import * as actions from '../actions'

import './style.css'

class App extends React.Component {
  state = {
    direction: 'right',
  }

  componentWillReceiveProps(newProps) {
    const direction = newProps.routes.map(v => v.path)
      .filter(v => v !== undefined).length < this.props.routes.map(v => v.path)
      .filter(v => v !== undefined).length
      ? 'right'
      : 'left'
    this.setState({ direction })
  }

  render() {
    const { children, location, ...props } = this.props
    return (
      <div className="app-ctn">
        <ReactCSSTransitionGroup
          component="div"
          className="page-transition-ctn"
          transitionName={`page-ctn-${this.state.direction}`}
          transitionEnterTimeout={400}
          transitionLeaveTimeout={400}
        >
          {React.cloneElement(children, {
            key: location.pathname.split('/')[0] || 'root',
            ...props,
          })}
        </ReactCSSTransitionGroup>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { state }
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(actions, dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

