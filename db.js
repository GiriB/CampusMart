var mongoose = require('mongoose');
mongoose.connect('mongodb://giri:mongo1@ds036638.mongolab.com:36638/campusmart');
module.exports = mongoose.connection ;
