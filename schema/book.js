var mongoose = require('mongoose');

module.exports = mongoose.model('book',{
          ISBN:Number,
          title:String,
          author:String,
          price:Number,
          branch:String
});