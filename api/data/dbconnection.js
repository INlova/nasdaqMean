var MongoClient = require('mongodb').MongoClient;
var dburl = 'mongodb://'+process.env.IP+':27017/meanstock';

var _connection = null;

var open = function(){
	MongoClient.connect(dburl, function(err, client){
		if(err){
			console.log("DB connection Failed");
			return;
		}
		_connection = client.db("meanstock");
		console.log("DB connection open", client)
	});
};
var get = function(){
	return _connection;
};
module.exports = {
	open : open,
	get : get
};