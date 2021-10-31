const express = require('express')
const educations = express.Router()
const  { Education } = require('../db')
const {authenticate} = require('./middleware')

require('dotenv').config()

educations.get('/education', async (req,res)=>{
  let education = await Education.find({})
  res.json(education)
})

educations.post('/education', authenticate, async (req, res)=>{
  try{
    let newEducation = req.body
    let result = await Education.create(newEducation)
    res.status(200).send(result)
  }catch(e){
    console.log(e)
    return res.sendStatus(500)
  }
})

educations.delete('/education/:id', authenticate, async (req, res)=>{
  try{
    let _id = req.params.id
    let result = await Education.deleteOne({_id})
    if(result.deletedCount === 0) return res.sendStatus(404)
    res.status(200).send(result)
  }catch(e){
    console.log(e)
    return res.sendStatus(500)
  }
})

educations.put('/education/:id', authenticate, async (req, res)=>{
  let _id = req.params.id
  let data = req.body
  try{
    let result = await Education.findOneAndUpdate({_id}, data)
    if(!result) return res.sendStatus(404)
    let updatedEducation  =  await Education.findOne({_id})
    res.status(200).send(updatedEducation)
  }catch(e){
    console.log(e)
    return res.sendStatus(500)
  }
})


module.exports = educations