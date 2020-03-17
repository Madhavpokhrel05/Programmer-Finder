const mongoose = require('mongoose')

const projectSchema = mongoose.Schema({
    name: {
      type: String,
      required: true
    },

    description: {
      type: String
    },

    url: {
      type: String
    },
<<<<<<< HEAD

=======
    
>>>>>>> d25fa6b4c5422dff78b93b3fc6680ea2e88862a0
    languages: [{
      Type: String
    }]
},
{
timestamp: true
}
)

module.exports = mongoose.model('Project', projectSchema)
