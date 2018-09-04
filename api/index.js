const express = require('express')
const mongoose = require('mongoose')
const app = express()
const host = require('./config/host')



//Middlewares
const cors = require('cors')
const morgan = require('morgan')
const bodyParser = require('body-parser')

//Routes
const UserRoute = require('./routes/UserRoute')

//Database Connection
const db = require('./config/database')
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

app.use(bodyParser.json())
app.use(cors())
app.use(morgan('dev'))

app.get('/', function (req, res) {
  res.send('Hello to OneCare Plus API');
});

app.use('/user', UserRoute)


app.listen(host.port);
