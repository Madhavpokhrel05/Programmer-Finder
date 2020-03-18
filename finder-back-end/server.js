const express = require('express')
const app = express()
const PORT = 3003

const projects = require('./controllers/projects.js')

const projectController = require('./controllers/projects.js')

const mongoose = require('mongoose')
const cors = require('cors')


app.use(express.json())

const whitelist = ['http://localhost:3000']
const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}
app.use(cors(corsOptions))

mongoose.connection.on('error', error => { console.log(error.message + 'Mongo running properly?')})
mongoose.connection.on('disconnected', ()=> console.log('Mongoose Disconnected'))
mongoose.connect('mongodb://localhost:27017/projects', {useUnifiedTopology: true, useNewUrlParser: true})
mongoose.connection.once('open', () => {console.log('Mongoose Connected')})


app.use('/project', projectController)

app.listen(PORT, ()=> {
    console.log('Everything is going according to plan at port: ', PORT)
})
