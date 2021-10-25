const express = require('express')
const router = express.Router()
const  {User, Education, Certification, Project} = require('./db')

router.get('/education', async (req,res)=>{
  let education = await Education.find({})
  res.json(education)
})

router.get('/certification', async (req,res)=>{
  let certification = await Certification.find({})
  res.json(certification)
})

router.get('/project', async (req,res)=>{
  let project = await Project.find({})
  res.json(project)
})

router.get('/career', async (req,res)=>{
  let career = await Career.find({})
  res.json(career)
})