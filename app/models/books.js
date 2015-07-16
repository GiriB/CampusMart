var mongoose = require('mongoose');

module.exports = mongoose.model('books',{
          ISBN:String,
          title:String,
          author:String,
          originalPrice:Number,
          
});