//First we'll include express to manage routing
var express = require('express'),
app = express();


//The use method adds middleware to the request stack... here's the default console logger
app.use(express.logger());


//Define homepage route
app.get('/', function(req, res){
	//Send response back to client
    res.send('Hello World');
});


//Define other route
app.get('/test', function(req, res){
	//Send response back to client
	res.send('You typed test');
});


//Define 404 by matching all other routes
app.get('/*', function(req, res){
	//Send HTTP status codes 404
	res.status(404);
	//Send response
	res.send('Page not found');
});


//Start listing on port 3000
app.listen(3000);
//Output to console
console.log('Express server started on port %s', 3000);


//Remaining steps
//- Install express module to the project folder "npm install express"
//- Install nodemon using "-g" to make it globally available. This module will auto restart our project
//  if changes are made. "npm install -g nodemon"