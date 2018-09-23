const route = require('express').Router()
const Perms = require('../models/PermsModel.model')
const is_dev_auth = require('../plugins/is_auth_dev')


route.post('/', (req, res)=>{
    if(req.user.user_role !== "developer")
        res.status(401).send({error: 'user role is not authorized'})
    else{
        if(!req.body) 
            res.status(401).send({error: 'permission fields needed'})
        else{
            let perm = new Perms()
            perm.save({...req.body, dev_id: req.user.user_id})
            .then((result) => {
                res.send(result)
            }).catch((err) => {
                res.status(500).send(err)
            });
        }
    }
}),

route.post('/update', is_dev_auth, (req,res)=>{
    let perm = new Perms()
    perm.findOneAndUpdate({_id: req.body._id}, req.body).then((result) => {
        res.json({
            message: 'permission updated successfully'
        })
        req.io.emit('permission_update', result)
    }).catch((err) => {
        res.status(500)
    }); 
})

    // Todo 

route.put('/is_active', is_dev_auth, (req, res)=>{
    let perm = new Perms()
    perm.findOneAndUpdate({_id: req.body._id}, {is_default: req.body.is_default}).then((result) => {
    res.status(200)
}).catch((err) => {
    res.status(500)
})
})
module.exports = route