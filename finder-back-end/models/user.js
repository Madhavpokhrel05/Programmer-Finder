const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    username: {
      type: String,
      unique: true,
      required: true
    },

    password: {
      type: String,
      unique: true,
      required: true
    },

    projects: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Projects'
<<<<<<< HEAD
    }]
=======
  }],

    bio: {
        type: String
    }
>>>>>>> d25fa6b4c5422dff78b93b3fc6680ea2e88862a0
})

module.exports = mongoose.model('User', userSchema)
