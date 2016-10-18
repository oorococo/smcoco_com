import React from 'react'
import {Link} from 'react-router'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

class App extends React.Component {

    state = {
        direction: 'left'
    }

    componentWillReceiveProps(newProps) {
        const pathOrder = ['music', 'video', 'article']
        const path = newProps.routes.map(v => v.path).filter(v => v !== undefined)[2]
        const oldPath = this.props.routes.map(v => v.path).filter(v => v !== undefined)[2]
        if (pathOrder.indexOf(path) > pathOrder.indexOf(oldPath)) {
            this.setState({
                direction: 'left'
            })
        } else if (pathOrder.indexOf(path) < pathOrder.indexOf(oldPath)) {
            this.setState({
                direction: 'right'
            })
        } else {
            this.setState({
                direction: ''
            })
        }
    }

    render() {
        const {children, location, ...props} = this.props
        return (
            <div className="module-ctn">
                <div className="wander-topbar">
                    <i className="fa fa-user"></i>
                    <Link className="topbar-link" to="/" activeClassName="active">返回</Link>
                    <Link className="topbar-link" to="/i" activeClassName="active">所有</Link>
                    <Link className="topbar-link" to="/i/music" activeClassName="active">音乐</Link>
                    <Link className="topbar-link" to="/i/video" activeClassName="active">视频</Link>
                    <Link className="topbar-link" to="/i/article" activeClassName="active">文章</Link>
                    <Link className="topbar-link" to="/portal/login" activeClassName="active">登录</Link>
                    <Link className="topbar-link" to="/portal/register" activeClassName="active">注册</Link>
                </div>
                <ReactCSSTransitionGroup
                    component="div"
                    className="page-transition-ctn"
                    transitionName={`page-ctn-${this.state.direction}`}
                    transitionEnterTimeout={400}
                    transitionLeaveTimeout={400}
                >
                    {
                        React.cloneElement(children, {
                            key: location.pathname.split('/')[1] || 'i/root',
                            ...props
                        })
                    }
                </ReactCSSTransitionGroup>
            </div>
        )
    }
}

export default App
