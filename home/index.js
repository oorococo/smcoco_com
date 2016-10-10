import express from 'express'

const app = express()

app.get('/l', (req, res) => {
    res.send("好hi")
})

app.listen(3000)
