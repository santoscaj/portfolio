const mongoose = require('mongoose')

const dbIpAddr  = 'localhost'
const dbName    = 'portfolio'

mongoose.connect(`mongodb://${dbIpAddr}:27017/${dbName}`)

const userSchema = new mongoose.Schema({
  id: {type: Number, required: true, unique: true, immutable: true},
  name: { type: String, required: true, index: { unique: true } },
  password: { type: String, required: true },
  admin: {type: Boolean, default: false}
})

const educationSchema = new mongoose.Schema({
  id: {type: Number, required: true, unique: true, immutable: true},
  institution: { type: String, required: true },
  degree: { type: String, required: true }, // Master of Science
  field: {type: String, required: true},    // Computer Engineering
  endDate: {type: Date, required: true},
  startDate: {type: Date, required: true},
  gpa: Number,
  link: String
})

const certificationSchema = new mongoose.Schema({
  id: {type: Number, required: true, unique: true, immutable: true},
  institution: { type: String, required: true },
  degree: { type: String, required: true },
  field: {type: String, required: true}, 
  endDate: {type: Date, required: true},
  link: String
})

const Skill = {
  name: String,
  aliases: [String],
  detail: String
}

const careerSchema = new mongoose.Schema({
  id: {type: Number, required: true, unique: true, immutable: true},
  company: {type: String, required: true},
  location: {type: String, required: true},
  startDate: {type: String, required: true},
  endDate: {type: String, required: true},
  position: {type: String, required: true},
  responsabilities: [ String ],
  skills: [Skill]
})

const projectSchema = new mongoose.Schema({
  id: {type: Number, required: true, unique: true, immutable: true},
  name: {type:String, required: true},
  description: {type:String, required: true},
  skills: [Skill]
})

let User = new mongoose.model('User', userSchema)
let Education = new mongoose.model('Education', educationSchema)
let Career = new mongoose.model('Career', careerSchema)
let Certification = new mongoose.model('Certification', certificationSchema)
let Project = new mongoose.model('Project', projectSchema)

module.exports = {User, Career, Education, Certification, Project}