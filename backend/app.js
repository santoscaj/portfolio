
const express = require('express')
const app = express()
const server = require('http').createServer(app)

app.use(express.json())
// app.use(cors({}))

const router = require('./routes/index')
const careers = require('./routes/careers')
const educations = require('./routes/educations')
const certifications = require('./routes/certifications')
const projects = require('./routes/projects')


app.use(router)
app.use(careers)
app.use(educations)
app.use(certifications)
app.use(projects)

const port = process.env.PORT || 2000
server.listen(port)
