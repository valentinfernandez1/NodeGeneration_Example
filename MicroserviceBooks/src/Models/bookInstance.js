const mongoose = require('mongoose');

const BookInstanceSchema = new mongoose.Schema({
  book:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Book',
    required: true 
  },
  status:{
    type: String, required: true,
    //¿Deberiamos permitir esto en el metamodelo?
    enum: ['Available', 'Maintenance', 'Loaned', 'Reserved'], 
    default: 'Maintenance'
  },
  return_date:{
    type: Date, 
    default: Date.now
  }
});

module.exports = mongoose.model("BookInstance", BookInstanceSchema);