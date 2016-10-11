import express from 'express'
import spdy from 'spdy'
import fs from 'fs'

const app = express()

app.use(express.static('webapp'))

app.get('*', (req, res) => {
    res.send(`
        <html>
        <head>
            <meta charset="utf-8">
            <title></title>
            <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1">
        </head>
        <body>
            <div id="root"></div>
            <script src="//cdn.bootcss.com/systemjs/0.19.39/system.js"></script>
            <script src="assets/index-compiled.js"></script>
        </body>
        </html>
    `)
})

const options = {
    key: fs.readFileSync(__dirname + '/node-http/server.key'),
    cert: fs.readFileSync(__dirname + '/node-http/server.crt')
}

spdy.createServer(options, app).listen(3000, (error) => {
    if (error) {
        console.error(error)
        return process.exit(1)
    } else {
        console.log(`Listening on port: ${3000}.`)
    }
})
