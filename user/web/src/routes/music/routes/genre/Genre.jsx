import React from 'react'
import { Link } from 'react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Loading from '../../../../components/Loading'
import * as actions from './actions/genreActions'

const Genre = (props) => (
  <div className="module-ctn" style={{ background: 'green' }}>
    {
      (function () {
        console.log(props.state.music_genre.initState)
      })()

    }
    {
      Array.isArray(props.state.music_genre.initState) ? props.state.music_genre.initState.map((i, k) => <div key={k}>1</div>) : <Loading />
    }
    <button onClick={props.actions.genre}>
      刷新
    </button>
  </div>
)


function mapStateToProps(state) {
  return { state }
}

function mapDispatchToProps(dispatchs) {
  return { actions: bindActionCreators(actions, dispatchs) }
}

export default connect(mapStateToProps, mapDispatchToProps)(Genre)

