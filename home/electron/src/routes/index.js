import Root from './root.jsx'
import Home from './home'

import indexRoutes from './index/routes'
import portalRoutes from './portal/routes'
import musicRoutes from './music/routes'


export default () => {
  const path = '/'
  return {
    path,
    component: Root,
    indexRoute: {
      component: Home,
    },
    getChildRoutes(location, cb) {
      cb(null, [
        indexRoutes(),
        portalRoutes(),
        musicRoutes(),
      ])
    },
  }
}
