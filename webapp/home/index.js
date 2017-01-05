import boot from '../common/boot'
import App from './containers/App'
import './index.html'

const root = document.getElementById('root')

boot(root, App)

if (module.hot) {
  module.hot.accept('./containers/App', () => {
    boot(root, App)
  })
}
