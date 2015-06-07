var mongoose = require('mongoose');

module.exports = mongoose.model('item',{
        
          created:Date,
          ISBN:String,
          collegeIDs:Array,
          sellerEmail:String,
          
});

