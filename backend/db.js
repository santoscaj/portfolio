const mongoose = require('mongoose')

const dbIpAddr  = 'localhost'
const dbName    = 'portfolio'

mongoose.connect(`mongodb://${dbIpAddr}:27017/${dbName}`)

const userSchema = new mongoose.Schema({
  id: { type: Number, required: true } ,
  username: { type: String, required: true, index: { unique: true } },
  name: { type: String, default: '' }, 
  password: { type: String, required: true },
  admin: {type: Boolean, default: false}
})

const educationSchema = new mongoose.Schema({
  _id: { type: String, required: true } ,
  order: {type: Number, default: 10},
  institution: { type: String, required: true },
  degree: { type: String, required: true }, // Master of Science
  field: {type: String, required: true},    // Computer Engineering
  focus: { type: String, default: '' },                            // Real-Time and Embedded Systems
  endDate: {type: String, required: true},
  startDate: {type: String, required: true},
  gpa: {type: String, required: true},
  gpaBase: {type: String, required: true},
  link: { type: String, default: '' }
})

const certificationSchema = new mongoose.Schema({
  _id: { type: String, required: true } ,
  order: {type: Number, default: 10},
  institution: { type: String, required: true },
  degree: { type: String, required: true },
  link: { type: String, default: '' },
  endDate: {type: Number, required: true},
  expDate: {type: Number, required: true}
})

const Skill = {
  _id: { type: String, required: true } ,
  name: { type: String, default: '' },
  keywords: [String],
  detail: { type: String, default: '' }
}

const careerSchema = new mongoose.Schema({
  _id: { type: String, required: true } ,
  company: {type: String, required: true},
  location: {type: String, required: true},
  startDate: {type: String, required: true},
  endDate: {type: String, required: true},
  position: {type: String, required: true},
  responsabilities: [ String ],
  skills: [Skill]
})

const projectSchema = new mongoose.Schema({
  _id: { type: String, required: true } ,
  order: {type: Number, default: 10},
  name: {type:String, required: true},
  description: {type:String, required: true},
  fullDescription: { type: String, default: '' }, 
  image: { type: String, default: '' }, 
  link: { type: String, default: '' },
  githubLink: { type: String, default: '' }, 
  skills: [Skill]
})

let User = new mongoose.model('User', userSchema)
let Education = new mongoose.model('Education', educationSchema)
let Career = new mongoose.model('Career', careerSchema)
let Certification = new mongoose.model('Certification', certificationSchema)
let Project = new mongoose.model('Project', projectSchema)

module.exports = {User, Career, Education, Certification, Project}