import Root from './root.jsx'
import Home from './home'

import music from './music'
import video from './video'
import article from './article'

export default function createRoutes() {
  return {
    path: 'i',
    component: Root,
    indexRoute: {
      component: Home,
    },
    getChildRoutes(location, cb) {
      cb(null, [
        music(),
        video(),
        article(),
      ])
    },
  }
}
