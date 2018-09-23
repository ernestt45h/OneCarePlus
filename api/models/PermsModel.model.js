const BaseModel = require('./BaseModel')
const PermDb = require('../database/Permission.db')

class Permission extends BaseModel {
  constructor() {
    super(PermDb)
  }

}

module.exports = Permission
