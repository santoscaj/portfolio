const express = require('express')
const careers = express.Router()
const {authenticate} = require('./middleware')
const  { Career } = require('../db')

require('dotenv').config()

careers.get('/career', async (req,res)=>{
  let career = await Career.find({})
  res.json(career)
})

careers.post('/career', authenticate, async (req, res)=>{
  console.log('inside', req.body)

  try{
    let newCareer = req.body
    let result = await Career.create(newCareer)
    res.status(200).send(result)
  }catch(e){
    console.log(e)
    return res.sendStatus(500)
  }
})

careers.delete('/career/:id', authenticate, async (req, res)=>{
  try{
    let _id = req.params.id
    let result = await Career.deleteOne({_id})
    if(result.deletedCount === 0) return res.sendStatus(404)
    res.status(200).send(result)
  }catch(e){
    console.log(e)
    return res.sendStatus(500)
  }
})

careers.put('/career/:id', authenticate, async (req, res)=>{
  console.log('inside', req.body)
  let _id = req.params.id
  let data = req.body
  try{
    let result = await Career.findOneAndUpdate({_id}, data)
    if(!result) return res.sendStatus(404)
    let updatedCareer  =  await Career.findOne({_id})
    res.status(200).send(updatedCareer)
  }catch(e){
    console.log(e)
    return res.sendStatus(500)
  }
})

module.exports = careers