const mongoose = require('mongoose')
const Schema = mongoose.Schema


const BilletSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  }
})

module.exports = Billet = mongoose.model('blog', BilletSchema)
