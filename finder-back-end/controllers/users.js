const bcrypt = require('bcrypt')
const express = require('express')
const users = express.Router()
const User = require('../models/user.js')

// show sign up form
users.get('/new', (req, res) => {
  res.render('users/new.ejs', {currentUser: req.session.currentUser})
})

// create a new user
users.post('/', (req, res) => {
  req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10))
  User.create(req.body, (err, createdUser) => {
    if (err) {
      console.log(err)
    } else {
      console.log('user is created', createdUser)
      // alert('Your account has been created. Please log in.')
      res.render('sessions/new.ejs')
    }
  })
})
module.exports = users
