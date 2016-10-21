import Root from './root.jsx'
import Home from './home'

import genre from './genre'
import artist from './artist'
import album from './album'

export default (store) => {
  return {
    path: 'music',
    component: Root,
    indexRoute: {
      component: Home,
    },
    getChildRoutes(location, cb) {
      cb(null, [
        genre(store),
        artist(store),
        album(store),
      ])
    },
  }
}
