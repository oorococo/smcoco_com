import {
  LOADING_CHANGE,
  MODAL_OPEN,
  MODAL_CLOSE,
} from '../actions/rootActions'

export default (state = {
  loadingRatio: 0,
  isLoading: false,
  isModalOpen: false,
  isError: true,
  isWaring: false,
}, action) => {
  switch (action.type) {
    case LOADING_CHANGE:
      return Object.assign({}, state, { loadingRatio: action.payload })
    case MODAL_OPEN:
      return state
    case MODAL_CLOSE:
      return state
    default:
      return state
  }
}
