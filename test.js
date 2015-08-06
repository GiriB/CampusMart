	var https =require('https');

	var config = require('./config');
	var BOOK_API_KEY = config.BOOK_API_KEY;
	var objectJSON;

	var path = "/books/v1/volumes?q=isbn:9788129121509" ;
	
	path=path+'&key='+BOOK_API_KEY;
	console.log(path)

	var options = {
  		host: 'www.googleapis.com',
  		path: path,
	};
	
	// console.log(path+"is the link generated for the given ISBN");
	var str ='';
	var objectJSON;
	//API that gets ISBN data 
	https.request(options, function(res){
		res.on('data', function (chunk) {
    	str += chunk;
  		});

    //the whole response has been recieved, so we just print it out here
  		res.on('end', function () {
    	console.log(str);
    	objectJSON=JSON.parse(str);
    	console.log(objectJSON.items[0].volumeInfo.title);
  		});
	}).end();



