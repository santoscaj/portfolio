
const express = require('express')
const app = express()
const server = require('http').createServer(app)
const cors = require('cors')

app.use(express.json())
app.use(cors({}))

// removes _id properties so theres no conflict saving new data to DB
const remove_idProp = (req, res, next)=>{
  if (!req.body) next()
  delete req.body._id
  if( req.body.skills )
    req.body.skills = req.body.skills.map(({_id, ...otherProperties})=>otherProperties)
  next()
}

app.use(remove_idProp)
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
