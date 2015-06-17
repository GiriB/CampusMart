
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
	
	res.render('sell',{});
};

exports.search = function (req,res){
	ItemSchema.find({ISBN: req.body.isbn})
	.setOptions({})
	.exec(function(err,results){
		if(err){
			console.log(err);
			res.status(500).json({status:'failure'});
		}else{
			res.render('found',{
				results:results,
			});
		}
	});


	//res.render('found',{});
};

exports.buy = function(req,res){
res.render('buy',{});

};

exports.list = function(req,res){
	//change this to  receive a :title placeholder and item,user,books accordingly or all at once  

	ItemSchema.find()
	.setOptions({})
	.exec(function(err,results){
		if(err){
			console.log(err);
			res.status(500).json({status:'failure'});
		}else{
			res.render('list',{
				title:'Items',
				results:results
			});
		}

	});


}

exports.save = function(req,res){

	//authentication to be done here 
	//create item object with received values
 var record = new ItemSchema({created:Date.now(),
          ISBN:req.body.isbn,
          collegeIDs:req.body.collegeID,
          sellerEmail:req.body.email});
 //save the instance
 record.save(function(err){
 	if(err){
 		console.log(err);
 		res.status(500).json({status:'failure'});
 	}
 });


  console.log("The details are : ");
  console.log(record['name']);
  console.log(record['sellerEmail']);
  console.log(record['created']);
  console.log(record['collegeIDs']);
  
   // sends a JSON object
  // -- res.json(req.body);
  //con verts the object into JSON string 
  var details = JSON.stringify(req.body);
  res.json({status:'done'});
  
};