const express = require('express')
const vhost = require('vhost')

const app = express()

const homeApp = express()
const authApp = express()

homeApp.get('/home', (req, res) => {
  res.send('你好home')
})

authApp.get('/home', (req, res) => {
  res.send('你好auth')
})

app.use(vhost('smcocodev.com', homeApp))
app.use(vhost('auth.smcocodev.com', authApp))

app.listen(9998)
