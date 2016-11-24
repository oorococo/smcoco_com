import { genre } from './actions/genreActions'
import { injectAsyncReducer } from '../../../../store'

import reducers from './reducers'

export default function createRoutes(store) {
  return {
    path: 'genre',
    getComponents(location, cb) {
      System.import('./Genre.jsx').then((Genre) => {
        if (store.getState().music_genre === undefined) {
          store.dispatch(genre())
        }
        injectAsyncReducer(store, 'music_genre', reducers)
        cb(null, Genre.default)
      })
    },
  }
}
