const mongoose = require('mongoose')
const Schema = mongoose.Schema


const UserSchema = new Schema({
  login: {
    type: String
  },
  email: {
    type: String,
    required: true,
    pattern: '/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/'
  },
  password: {
    type: String,
    required: true
  }
})

module.exports = User = mongoose.model('users', UserSchema)