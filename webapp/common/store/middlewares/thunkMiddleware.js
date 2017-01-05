export default function thunkMiddleware({ dispatch, getState }) {
  return next => (action) => {
    // Make it compatiable with `redux-thunk`
    // See https://github.com/gaearon/redux-thunk/blob/master/src/index.js
    if (typeof action === 'function') {
      return action(dispatch, getState)
    }

    // Call `action.payload` if it's function
    if (typeof action.payload === 'function') {
      return {
        ...action,
        payload: action.payload(dispatch, getState),
      }
    }

    return next(action)
  }
}
