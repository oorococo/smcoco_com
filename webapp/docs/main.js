import express from 'express'

const app = express()

app.get('/', (req, res) => {
  res.send('首页')
})

export default app
