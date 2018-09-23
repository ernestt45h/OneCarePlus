const BaseModel = require('./BaseModel')
const jwt = require('jsonwebtoken')
const jwsSecret = require('../config/jwtSecret')
const passwordHasher = require('password-hash')

//DBs
const User = require('../database/User.db')
const Permission = require('../database/Permission.db')
const Hospital = require('../database/Hospital.db')



class UserModel extends BaseModel {

  constructor() {
    super(User)
  }

  /**
   * @param {Object} condition 
   * 
   */
  async find(condition) {
    return User.find(condition)
      .populate('permissions')
      .populate('details.hospital', 'name description city')
      .then((result) => {
        return result
      }).catch(err => {
        throw err
      })
  }

  async findOne(condition) {
    return User.findOne(condition)
      .populate('permissions')
      .populate('details.hospital', 'name description city')
      .then((result) => {
        return result
      }).catch(err => {
        throw err
      })
  }


  //AUTHETICATING USER

  async auth(condition, password) {
    return this.findOne({
      credentials: {
        info: {
          condition
        },
        password
      }
    }).then((result) => {
      if (!result) throw {
        error: 'wrong credetials provided'
      }
      return result
    }).catch((err) => {
      throw err
    });
  }

  async auth_user(username, password) {
    return this.auth(username, password).then((result) => {
      return result
    }).catch((err) => {
      throw err
    });
  }


  async auth_email(email, password) {
    return this.auth(email, password).then((result) => {
      return result
    }).catch((err) => {
      throw err
    });
  }

  async isId(id) {
    return this.findOne({
      _id: id
    }).then((result) => {
      return result ? true : false
    }).catch((err) => {
      throw err
    });
  }

  async isUsername(username) {
    return this.findOne({
      'credentials.info.username': username
    }).then((result) => {
      return result ? true : false
    }).catch((err) => {
      throw err
    });
  }

  async isEmail(email) {
    return this.findOne({
      'credentials.info.email': email
    }).then((result) => {
      return result ? true : false
    }).catch((err) => {
      throw err
    });
  }

  async generateUserToken(User_Document) {
    let signedJwt = jwt.sign(User_Document, jwsSecret)
    return signedJwt
  }

  async verifyToken(token) {
    try {
      return jwt.verify(token, jwsSecret)
    } catch (error) {
      throw {
        error: 'invalid token'
      }
    }
  }

  async verifyBearerToken(authBearer) {
    if (typeof authBearer !== 'undefined') {
      const bearer = authBearer.split(" ");
      return this.verifyToken(bearer[1]);
    } else {
      throw {
        error: 'invalid token format'
      }
    }
  }

  async createUserAccount(body, role) {
    if (!body.password || !body.email) throw {
      error: 'empty body passed'
    }
    let emailOk = await this.isEmail(body.email)
    if (emailOk) throw {
      error: 'email already registered'
    }

    if (body.username) {
      let usernameOk = await this.isUsername(body.username)
      if (usernameOk) throw {
        error: 'username already taken'
      }
    }

    let user = User({
      credentials: {
        info: {
          email: body.email,
          username: body.username,
          address: body.address,
          phone: body.phone,
          role: role
        },
        password: passwordHasher.generate(body.password)
      }
    })

    return user.save((err) => {
      if (err) throw err
      return true
    })
  }



  async loginUser(username, password, user_ip) {
    return this.findOne({
      $or: [{
        'credentials.info.email': username
      }, {
        'credentials.info.username': username
      }]
    }).then((result) => {
      if(!result) throw {error: 'wrong credentials provided'}

      let permMod = require('../models/PermsModel.model')
      permMod = new permMod() 
      return permMod.find(
        {'role': result.credentials.info.role, is_default: true},
        'type role target name sub_name actions icon is_default'
      ).then((newPems) => {
        
        console.log( result.credentials.info.role)

        if (passwordHasher.verify(password, result.credentials.password)) {
          //Do some tokenization here
          return this.generateUserToken({
            user_ip: user_ip,
            user_id: result._id,
            user_role: result.credentials.info.role
          }).then((token) => {
            return {
              token,
              id: result._id, 
              ...result.credentials.info,
              permissions:{
              ...result.permission,
              ...newPems
            },
              ...result.details
            }
          }).catch((err) => {
            throw err
          });
        } else throw {
          error: 'wrong credentials provided'
        }

      }).catch((err) => {
        throw {error: 'unable to get user permissions'}
      });
    }).catch((err) => {
      throw err
    });
  }

}


module.exports = UserModel
