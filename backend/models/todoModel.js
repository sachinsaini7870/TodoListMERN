const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

const todoSchema = new mongoose.Schema({
  title:{
    type: String,
    required: true    
  },
  desc: {
    type: String 
  },
  completed: {
    type: Boolean,
    default: false
  }
},
  {
    timestamps: true
  }
);

todoSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('Todo', todoSchema);