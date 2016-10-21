import { get } from '../../../../../actions/rootActions'

const PRE = 'MUSIC_GENRE'

export const [INIT, FILTER] = [`${PRE}_INIT`, `${PRE}_FILTER`]

export const genre = () => (dispatch) => {
  dispatch(get('/i')).then((res) => {
    dispatch({
      type: INIT,
      payload: res.data,
    })
  })
}

export const filter = () => async(dispatch) => {
  const res = await dispatch(get('/i'))
  return {
    type: FILTER,
    payload: res.data,
  }
}
