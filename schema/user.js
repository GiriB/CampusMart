var mongoose = require('mongoose');

module.exports = mongoose.model('user',{
          email:String,
          name:String,
          collegeID:Number,
          Contact1:Number,
          Contact2:Number
});