require('dotenv').config()

async function authenticate(req, res, next){
  return next()
  let token = req.get('Authentication')
  if(!token) return res.sendStatus(400)
  token = token.split(' ')[1]
  try{
    let webtoken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET || 'unsafe secret' )
    let authenticatedUser = await User.findOne({_id: webtoken.id})
    if(!authenticatedUser) return res.sendStatus(401)
    req.authenticatedUser = authenticatedUser
    next()
  }catch(e){
    if(e.message === 'invalid token') return res.status(400).send(e.message)
    return res.status(500)
  }
}


module.exports = {authenticate}