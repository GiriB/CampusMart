exports.dispDetails = function(objJson){
    	console.log("inside myModules/myModules.js");
    	
    	if(objJson.hasOwnProperty('items')){
    	console.log(objJson.items[0].volumeInfo.title);
    	}else{
    		console.log("Can't locate the book in our database! ");
    	}
};