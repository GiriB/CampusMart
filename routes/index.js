
/*
 * GET home page.
 */
var ItemSchema = require('../schema/item');
exports.buysell = function(req, res){
  res.render('index', { title: 'CampusMart' });
};

exports.dead = function(req,res){
	res.render('dead',{});
};

exports.sell = function(req,res){
	res.render('sell',{name:'giri'});
};

exports.save = function(req,res){
 var record = new ItemSchema({created:Date.now(),
          ISBN:req.body.isbn,
          collegeIDs:req.body.collegeID,
          sellerEmail:req.body.email});

console.log(record);
console.log(Date.now());
 var html = 'Thank you for posting ! ';
 var details = req.body;
 console.log("The details received is " + details);
 html = html + details;
 res.send(html);
};