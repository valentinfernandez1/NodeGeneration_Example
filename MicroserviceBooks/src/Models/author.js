const mongoose = require('mongoose');

const AuthorSchema = new mongoose.Schema(
{
  name: {
    type: String, 
    required: true, 
    maxLength: 100
  },
  lastName: {
    type: String,
    required: true, 
    maxLength: 100
  },
  birthDay: {
    type: Date,
    required: true, 
  },
});

module.exports = mongoose.model('Author', AuthorSchema);