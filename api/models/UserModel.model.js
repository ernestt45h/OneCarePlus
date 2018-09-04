const User = require('../database/User.db')
const BaseModel = require('./BaseModel')
const jwt = require('jsonwebtoken')
const jwsSecret = require('../config/jwtSecret')

class UserModel extends BaseModel {

  constructor() {
    super(User)
  }

  async find(condition){
    return User.find(condition).populate('permissions').exec((err, user)=>{
      if(err) throw err
      return user
    })
  }


  //AUTHETICATING USER

  async auth(condition, password){
    return this.findOne({credentials:{
      info:{condition},password}}).then((result) => {
      if(!result) return {error: 'wrong credetials provided'}
      return result
    }).catch((err) => {
      throw err
    });
  }

  async auth_user(username, password){
    return this.auth(username,password).then((result) => {
      return result
    }).catch((err) => {
      throw err
    });
  }


  async auth_email(email, password){
    return this.auth(email,password).then((result) => {
      return result
    }).catch((err) => {
      throw err
    });
  }

  async isId(id){
    return this.findOne({_id: id}).then((result) => {
      return result ? true : false
    }).catch((err) => {
      throw err
    });
  }

  async isUsername(username){
    return this.findOne({credentials:{info:{username}}}).then((result) => {
      return result ? true : false
    }).catch((err) => {
      throw err
    });
  }

  async isEmail(username){
    return this.findOne({credentials:{info:{username}}}).then((result) => {
      return result ? true : false
    }).catch((err) => {
      throw err
    });
  }

  async generateUserToken(User_Document){
    let signedJwt = jwt.sign(User_Document, jwsSecret)
    User_Document.token = signedJwt
    return User_Document
  }



}


module.exports = UserModel
