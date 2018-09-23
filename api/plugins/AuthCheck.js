const jwt = require('jsonwebtoken')
const secret = require('../config/jwtSecret')

module.exports = (req, res, next)=>{
    const bearerHeader = req.header("authorization");
    //Check if there is token
    if (typeof bearerHeader !== 'undefined'){
        //Getting the token
        const bearer = bearerHeader.split(" ");
        req.token = bearer[1];
        //Verifing the token
        try {
            req.user = jwt.verify(req.token, secret)
            if(req.user.user_ip == req.ip) next()
            else {
                res.status(401).send("Unacceptable token")
            }
        } catch (error) {
            console.log(error)
            res.status(401).send("Unacceptable token")
        }
        }
    else {
        res.status(401).send("user is unauthorized")
    }
}