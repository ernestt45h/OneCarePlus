const express = require('express')
const mongoose = require('mongoose')
const app = express()
const http = require('http').Server(app)
const io = require('socket.io')(http)

const host = require('./config/host')



//Middlewares
const cors = require('cors')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const authChecker = require('./plugins/AuthCheck')

//Routes
const UserRoute = require('./routes/UserRoute')
const PermsRoute = require('./routes/PermissionRoute')

//Database Connection
const db = require('./config/database')
mongoose.set('useFindAndModify', false)
mongoose.connect(db.mongodb, {
  keepAlive: true,
  socketTimeoutMS: 0,
  reconnectInterval: 5000
}, (err) => {
  if (err)
    console.log(err)
  else
    console.log(`API @ ${host.name}:${host.port} DB connection to ${db.mongodb} successfully`)
})

io.on('connection',socket=>{
  console.log('user connected')
})

app.use(function(req,res,next){
  req.io = io
  next()
})

app.use(bodyParser.json())
app.use(cors())
app.use(morgan('dev'))

app.get('/', function (req, res) {
  res.send('Hello to OneCare Plus API');
});

app.use('/user', UserRoute)
app.use('/permission', authChecker, PermsRoute)


http.listen(host.port, ()=>{
  console.log('runnuing on ',host.name, host.port)
});
