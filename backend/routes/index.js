const express = require('express')
const router = express.Router()
const  {User} = require('../db')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const path = require('path')
require('dotenv').config()

router.post('/login', async (req, res)=>{
  let {username, password }  = req.body
  try{
    let user = await User.findOne({username})
    if(!user) return res.sendStatus(404)
    let userId = user._doc['$oid']
    let match = bcrypt.compareSync(password,user.password)
    if(!match) return res.sendStatus(401)
    let accessToken = jwt.sign({id: userId},
      process.env.ACCESS_TOKEN_SECRET || 'unsafe secret', 
      {expiresIn: "1h"})
    res.status(200).send({auth:true, accessToken, user})
  }catch(e){
    console.log(e)
    return res.sendStatus(500)
  }
})


router.get('/image/:filename', async (req, res)=>{
  let filename = req.params.filename
  try{
    res.sendFile(path.join(__dirname, '../images', filename))
  }catch(e){
    console.log(e)
    return res.sendStatus(500)
  }
})



module.exports = router