const route = require('express').Router()
const Perms = require('../models/PermsModel.model')



route.post('/', (req, res)=>{
    if(req.user.user_role !== "developer")
        res.status(401).send({error: 'user role is not authorized'})
    else{
        if(!res.body) 
            res.status(401).send({error: 'permission fields needed'})
        else{
            let perm = new Perms()
            perm.save(req.body).then((result) => {
                res.send(result)
            }).catch((err) => {
                res.status(500).send(err)
            });
        }
    }
})

module.exports = route