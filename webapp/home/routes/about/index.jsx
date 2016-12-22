// @flow
import React from 'react'

export default class About extends React.PureComponent {

    static defaultProps = {
        maxLoops: 19,
    }

    static propTypes = {
        maxLoops: React.PropTypes.number.isRequired,
    }

    state = {
        loopsRemaining: this.props.maxLoops,
    }
    render = () => {
        const el = <div>{this.state.loopsRemaining + 444}</div>
        return el
    }
}
