const route = require('express').Router()
const User = require('../models/UserModel.model')

//Routes
const AuthRoutes = require('./UserRoutes/UserAuthRoute')

//Get User Info
route.get('/', (req, res) => {
  let user = new User()
  user.find({},'',100).then((result) => {
      res.json(result)
  }).catch((err) => {
      res.json(err)
  });
})


route.use('/auth', AuthRoutes)

//User signUp
route.post('/', (req, res) => {
    if(!req.body) res.json({error: 'sign up body can not be empty'})
    let user = new User()
    if(!req.headers.authorization){
      user.createUserAccount(req.body,'patient').then((result) => {
        res.json({message: 'please check your email for verification', title: 'successfull sign up'})
      }).catch((err) => {
        res.status(406).json(err)
      });
    }else{
      user.verifyBearerToken(req.headers.authorization).then((result) => {
        res.json(result)
      }).catch((err) => {
        res.status(401).json(err)
      });
    }
})

module.exports = route
