const express = require('express')
const certifications = express.Router()
const {authenticate} = require('./middleware')
const  { Certification } = require('../db')

require('dotenv').config()

/*
   Get requests 
*/

certifications.get('/certification', async (req,res)=>{
  let certification = await Certification.find({})
  res.json(certification)
})

certifications.post('/certification', authenticate, async (req, res)=>{
  try{
    let newCertification = req.body
    let result = await Certification.create(newCertification)
    res.status(200).send(result)
  }catch(e){
    console.log(e)
    return res.sendStatus(500)
  }
})

certifications.delete('/certification/:id', authenticate, async (req, res)=>{
  try{
    let _id = req.params.id
    let result = await Certification.deleteOne({_id})
    if(result.deletedCount === 0) return res.sendStatus(404)
    res.status(200).send(result)
  }catch(e){
    console.log(e)
    return res.sendStatus(500)
  }
})

certifications.put('/certification/:id', authenticate, async (req, res)=>{
  let _id = req.params.id
  let data = req.body
  try{
    let result = await Certification.findOneAndUpdate({_id}, data)
    if(!result) return res.sendStatus(404)
    let updatedCertification  =  await Certification.findOne({_id})
    res.status(200).send(updatedCertification)
  }catch(e){
    console.log(e)
    return res.sendStatus(500)
  }
})


module.exports = certifications