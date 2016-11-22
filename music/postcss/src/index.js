require('./style.less')

import React from 'react'
import ReactDOM from 'react-dom'
import {Pills, Button} from 'react-aaui'


class A extends React.Component {
    render() {
        return (
            <div>
                <Pills>
                    <Button>sdf</Button>
                    <Button>sdf</Button>
                </Pills>
                <div className="grid-example">
                    <div className="container">
                        <div className="grid">
                            <div className="grid-u-12-12 grid-u-sm-6-12 grid-u-md-4-12 grid-u-lg-3-12">
                                .grid-u-12-12 .grid-u-sm-6-12 .grid-u-md-4-12 .grid-u-lg-3-12
                            </div>
                            <div className="grid-u-12-12 grid-u-sm-6-12 grid-u-md-4-12 grid-u-lg-3-12">
                                .grid-u-12-12 .grid-u-sm-6-12 .grid-u-md-4-12 .grid-u-lg-3-12
                            </div>
                            <div className="grid-u-12-12 grid-u-sm-6-12 grid-u-md-4-12 grid-u-lg-3-12">
                                .grid-u-12-12 .grid-u-sm-6-12 .grid-u-md-4-12 .grid-u-lg-3-12
                            </div>
                            <div className="grid-u-12-12 grid-u-sm-6-12 grid-u-md-4-12 grid-u-lg-3-12">
                                .grid-u-12-12 .grid-u-sm-6-12 .grid-u-md-4-12 .grid-u-lg-3-12
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


ReactDOM.render(<A />, document.getElementById('root'))
