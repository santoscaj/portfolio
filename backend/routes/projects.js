const express = require('express')
const projects = express.Router()
const {authenticate} = require('./middleware')
const {Project} = require('../db')

require('dotenv').config()

projects.get('/project', async (req,res)=>{
  let project = await Project.find({})
  res.json(project)
})

projects.post('/project', authenticate, async (req, res)=>{
  try{
    let newProject = req.body
    let result = await Project.create(newProject)
    res.status(200).send(result)
  }catch(e){
    console.log(e)
    return res.sendStatus(500)
  }
})

projects.delete('/project/:id', authenticate, async (req, res)=>{
  try{
    let _id = req.params.id
    let result = await Project.deleteOne({_id})
    if(result.deletedCount === 0) return res.sendStatus(404)
    res.status(200).send(result)
  }catch(e){
    console.log(e)
    return res.sendStatus(500)
  }
})

projects.put('/project/:id', authenticate, async (req, res)=>{
  let _id = req.params.id
  let data = req.body
  try{
    let result = await Project.findOneAndUpdate({_id}, data)
    if(!result) return res.sendStatus(404)
    let updatedProject  =  await Project.findOne({_id})
    res.status(200).send(updatedProject)
  }catch(e){
    console.log(e)
    return res.sendStatus(500)
  }
})


module.exports = projects