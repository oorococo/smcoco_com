import Axios from 'axios'

export const [LOADING_CHANGE] = ['LOADING_CHANGE']
export const [MODAL_OPEN, MODAL_CLOSE] = ['MODAL_OPEN', 'MODAL_CLOSE']

/* eslint arrow-body-style: 0 */
export const changeLoading = (ratio) => {
  return {
    type: LOADING_CHANGE,
    payload: ratio,
  }
}

Axios.defaults.baseURL = '/'
Axios.defaults.headers.token = 'secret'
// Axios.defaults.headers.common.Authorization = '4444'
// Axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'


export const apiGen = method => (reqs, params) => async(dispatch) => {
  let data = null
  if (Array.isArray(reqs)) {
    const requests = []
    for (let i = 0; i < reqs.length; i += 1) {
      /* eslint new-cap: 0 */
      requests.push(Axios(reqs[i].url, {
        method,
        params: reqs[i].params,
        data: reqs[i].params,
        onDownloadProgress: (oEvent) => {
          if (oEvent.lengthComputable) {
            const percentComplete = oEvent.loaded / oEvent.total
            // ...
          } else {
            // Unable to compute progress information since the total size is unknown
          }
        },
      }))
    }
    const reses = await Axios.all(requests)
    data = reses
  } else {
    /* eslint new-cap: 0 */
    const res = await Axios(reqs, {
      method,
      params,
      data: params,
    })
    data = res
  }
  return data
}

export const get = () => async (dispath) => {
  dispath(changeLoading(0.001))
  const res = await Axios({
    method: 'get',
    url: '/api/test',
    onDownloadProgress: (oEvent) => {
      if (oEvent.lengthComputable) {
        const percentComplete = oEvent.loaded / oEvent.total
        dispath(changeLoading(percentComplete))
      }
    },
  })
  dispath(changeLoading(9.999))
  setTimeout(() => {
    dispath(changeLoading(1))
  }, 200)
  return res
}

export const post = (req, params) => async() => {
  let data = null
  const res = await Axios(req, {
    method: 'post',
    data: params,
  })
  data = res
  return data
}

