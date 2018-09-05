const route = require('express').Router()
const User = require('../../models/UserModel.model')

route.post('/', (req, res)=>{
    let user = new User()
    user.loginUser(req.body.auth, req.body.password).then((result) => {
        res.json(result)
    }).catch((err) => {
        res.status(401).send({error: 'wrong credentials provided', errlog: err})
    });
})



module.exports = route