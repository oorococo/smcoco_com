import React, { PureComponent, PropTypes } from 'react'
import { Provider } from 'react-redux'

class App extends PureComponent {
  render() {
    const { store, component } = this.props
    const Component = component
    return (
      <Provider store={store}>
        <Component />
      </Provider>
    )
  }
}

App.propTypes = {
  store: PropTypes.object.isRequired,
  component: PropTypes.func.isRequired,
}

export default App
