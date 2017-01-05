import { error as errorAction } from '../modules/app'

export default function errorMiddleware({ dispatch }) {
  return next => (action) => {
    const { error, payload, ...actionAttr } = action

    // If there is no error then call next middleware
    if (!error) {
      return next(action)
    }

    // Or dispatch `errorAction`
    dispatch(errorAction(payload))

    // Then call next middleware
    return next({ payload, ...actionAttr })
  }
}
