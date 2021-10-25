
const express = require('express')
const app = express()
const server = require('http').createServer(app)
const router = require('./routes')

app.use(express.json())
app.use(cors({}))

app.use(router)
server.listen(2000)


