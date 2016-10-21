import {
  MUSIC_GENRE_INIT,
} from '../actions/genreActions'

export default (state = {
  title: 'genre',
  initState: {},
}, { type, payload }) => {
  switch (type) {
    case 'MUSIC_GENRE_INIT':
      return Object.assign({}, state, { initState: payload })
    default:
      return state
  }
}
