const mongoose = require('mongoose')

const dbIpAddr  = 'localhost'
const dbName    = 'portfolio'

mongoose.connect(`mongodb://${dbIpAddr}:27017/${dbName}`)

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, index: { unique: true } },
  name: String, 
  password: { type: String, required: true },
  admin: {type: Boolean, default: false}
})

const educationSchema = new mongoose.Schema({
  order: {type: Number, default: 10},
  institution: { type: String, required: true },
  degree: { type: String, required: true }, // Master of Science
  field: {type: String, required: true},    // Computer Engineering
  focus: String,                            // Real-Time and Embedded Systems
  endDate: {type: Date, required: true},
  startDate: {type: Date, required: true},
  gpa: Number,
  link: String
})

const certificationSchema = new mongoose.Schema({
  order: {type: Number, default: 10},
  institution: { type: String, required: true },
  degree: { type: String, required: true },
  link: String,
  endDate: {type: Date, required: true}
})

const Skill = {
  name: String,
  keywords: [String],
  detail: String
}

const careerSchema = new mongoose.Schema({
  company: {type: String, required: true},
  location: {type: String, required: true},
  startDate: {type: String, required: true},
  endDate: {type: String, required: true},
  position: {type: String, required: true},
  responsabilities: [ String ],
  skills: [Skill]
})

const projectSchema = new mongoose.Schema({
  order: {type: Number, default: 10},
  name: {type:String, required: true},
  description: {type:String, required: true},
  fullDescription: String, 
  image: String, 
  link: String,
  githubLink: String, 
  skills: [Skill]
})

let User = new mongoose.model('User', userSchema)
let Education = new mongoose.model('Education', educationSchema)
let Career = new mongoose.model('Career', careerSchema)
let Certification = new mongoose.model('Certification', certificationSchema)
let Project = new mongoose.model('Project', projectSchema)

module.exports = {User, Career, Education, Certification, Project}