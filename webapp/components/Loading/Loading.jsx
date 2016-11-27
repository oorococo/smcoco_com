import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as actions from '../../actions'
import './loading.scss'

const Loading = ({ loadingRatio }) => (
  loadingRatio === 0 || loadingRatio === 1
  ? <div />
  : <div className="loading-container">
    <div className="loading-indicator" style={{ width: `${loadingRatio * 100}%` }}>{loadingRatio}</div>
  </div>
)

function mapStateToProps(state) {
  return { loadingRatio: state.rootStates.loadingRatio }
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(actions, dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)(Loading)
