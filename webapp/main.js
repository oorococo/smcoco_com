import express from 'express'
import vhost from 'vhost'
import homeApp from './home/main'
import authApp from './auth/main'

const app = express()

app.use(vhost('smcocodev.com', homeApp))
app.use(vhost('auth.smcocodev.com', authApp))

app.listen(9998)
