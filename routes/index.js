
/*
 * GET home page.
 */
var https = require('https'); 
var config = require('../config');
var ItemSchema = require('../schema/item');
var myModules = require('../myModules/myModules');

//HIDE THIS LATER 
var BOOK_API_KEY = config.BOOK_API_KEY;
console.log(config.BOOK_API_KEY);



exports.test = function(req,res){
	console.log('in test');
	res.render('signin.html',{});
};


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


exports.saveManual = function(req,res){
	res.send('<h3>Save Manual</h3>');
}

exports.save = function(req,res){

	//authentication to be done here 
	




	
	// GET https://www.googleapis.com/books/v1/volumes?q=9788129711960&key={YOUR_API_KEY}
	//GET https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key=yourAPIKey
	var path = "/books/v1/volumes?q=isbn:"+req.body.isbn;
	path=path+'&key='+BOOK_API_KEY;
	var options = {
  		host: 'www.googleapis.com',
  		path: path,
	};
	
	var str =''; //data we are receiving
	var objJSON; // json object that we create from the response we get 

	//API that gets ISBN data 
	https.request(options, function(response){
		response.on('data', function (chunk) {
    	str += chunk;
  		});

  		response.on('end', function () {
    		objJson=JSON.parse(str);
	        if(objJson.hasOwnProperty('items')){
	    	    //if we got a valid response , we can save here !


	    	    //pass the details about the book
	    		//res.render('save',{status:"autoSave"});
	    		res.render('save',{status:"autoSave"});
	    	}else{
	    		//if we get an empty response ,we have to ask details about the book 
	    		//  redirect to a form that gets the details about the obook and then saves.

	    		//redirect to manually enter the details of the books
	    		//res.send("<h3>Can't locate the book, enter details manually!!</h3>");
	    		res.render('save',{status:"manualSave"});

	    	}
  		});
	}).end();




	//collegeId's can be more than one !!

	//create item object with received values
	// var record = new ItemSchema({created:Date.now(),
 //          ISBN:req.body.isbn,
 //          collegeIDs:req.body.collegeID,
 //          sellerEmail:req.body.email});
 	
 // 	//save the instance
	// record.save(function(err){
	//  	if(err){
	//  		console.log(err);
	//  		res.status(500).json({status:'failure'});
	//  	}
 // 	});


	// console.log("The details are : ");
	// console.log(record['name']);
	// console.log(record['sellerEmail']);
	// console.log(record['created']);
	// console.log(record['collegeIDs']);

	// sends a JSON object
	// -- res.json(req.body);
	//con verts the object into JSON string 
	//var details = JSON.stringify(req.body);
	//res.json({status:'done'});
	console.log('At the end');
  
};