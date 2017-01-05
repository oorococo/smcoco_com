import { loading, loaded } from '../modules/app'

class LoadingBarCounter {
  count = 0

  add() {
    this.count += 1
  }

  dec() {
    this.count -= 1
  }

  isEmpty() {
    return !this.count
  }
}

const loadingBarCounter = new LoadingBarCounter()

export default function loadingBarMiddleware({ dispatch, getState }) {
  return next => (action) => {
    const { promise, meta = { isHideLoadingBar: false } } = action
    if (!promise) {
      return next(action)
    }

    if (!meta.isHideLoadingBar) {
      if (loadingBarCounter.isEmpty()) {
        setTimeout(() => {
          dispatch(loading())
        }, 0)
      }

      loadingBarCounter.add()
    }

    const actionPromise = promise(dispatch, getState)

    actionPromise
      .finally(() => {
        if (!meta.isHideLoadingBar) {
          loadingBarCounter.dec()

          if (loadingBarCounter.isEmpty()) {
            setTimeout(() => {
              dispatch(loaded())
            }, 0)
          }
        }
      })

    return next(Object.assign(action, { promise: actionPromise }))
  }
}
