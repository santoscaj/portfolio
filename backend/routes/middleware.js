require('dotenv').config()
const jwt = require('jsonwebtoken')
const  { User } = require('../db')


async function authenticate(req, res, next){
  let token = req.get('Authentication')
  if(!token) return res.sendStatus(400)
  token = token.split(' ')[1]
  try{
    let webtoken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET || 'unsafe secret' )
    let authenticatedUser = await User.findOne({id: webtoken.id})
    if(!authenticatedUser) return res.sendStatus(401)
    req.authenticatedUser = authenticatedUser
    next()
  }catch(e){
    console.log(e.message)
    if(e.message === 'invalid token' || e.message === 'jwt expired') return res.status(401).send(e.message)
    // console.log(e)
    return res.status(500)
  }
}


module.exports = {authenticate}