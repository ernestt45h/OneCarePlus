const route = require('express').Router()
const jwtAuth = require('../plugins/AuthCheck')
const User = require('../models/UserModel.model')

//Get User Info
route.get('/', (req, res) => {
  let user = new User()
  user.find({username: 'ernestt45h'},'',100).then((result) => {
      res.json(result)
  }).catch((err) => {
      res.json(err)
  });
})

//User signUp
route.post('/', (req, res) => {
    if(!req.body) res.json({error: 'sign up body can not be empty'})
    
})



route.post('/auth', (req, res) => {
  res.json({
    token: 'asdasd.asdasdasd.asdasdad'
  })
})

module.exports = route
