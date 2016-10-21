import render from '../render.jsx'

export default (app) => {
  app.get('*', (req, res) => {
    render(req, res)
  })
}
