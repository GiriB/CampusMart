var mongoose = require('mongoose');

module.exports = mongoose.model('college',{
          collegeID:Number,
          name:String,
          address:String,
         
});