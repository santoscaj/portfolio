const express = require('express')
const router = express.Router()
const  {User} = require('../db')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
require('dotenv').config()

router.post('/login', async (req, res)=>{
  let {username, password }  = req.body
  try{
    let user = await User.findOne({username})
    if(!user) return res.sendStatus(404)
    let match = bcrypt.compareSync(password,user.password)
    if(!match) return res.sendStatus(401)
    let accessToken = jwt.sign({id: user._id},process.env.ACCESS_TOKEN_SECRET || 'unsafe secret' )
    res.status(200).send({auth:true, accessToken, user})
  }catch(e){
    console.log(e)
    return res.sendStatus(500)
  }
})




module.exports = router