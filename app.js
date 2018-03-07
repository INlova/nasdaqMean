require('./api/data/db.js');
var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');

var routes = require('./api/routes');

app.set('port', process.env.PORT); // application variable; only have to set port once;  used with app.get('port') in the app.listen function

app.use(function(req, res, next){
	console.log(req.method, req.url);
	next();
});

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({ extended:false })); // middleware to parse form data prior to using in controller

app.use('/api', routes);


var server = app.listen(app.get('port'), function(){
	var port = server.address().port;
	console.log("Magic happens on port "+ port);
});