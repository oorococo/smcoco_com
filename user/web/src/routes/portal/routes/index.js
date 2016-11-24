import Root from './root.jsx'
import Home from './home'

import login from './login'
import register from './register'
import profile from './profile'

export default function createRoutes() {
  return {
    path: 'portal',
    component: Root,
    indexRoute: {
      component: Home,
    },
    getChildRoutes(location, cb) {
      cb(null, [
        login(),
        register(),
        profile(),
      ])
    },
  }
}
