'use strict';

const express = require('express'),
bodyParser   = require('body-parser'),
app = express(),
port = 8000;
var username = 'Test';

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.listen(port, function () {
	console.log('using port no '+port);
})

app.get('/', function(request, response) {
	//response.send('simple response')
	return response.json({
		status: 200,
		message: 'simaple response'
	})
})

app.get('/setUser', function(request, response) {
	console.log(request.body);
	//username = request.body.name;
	username = request.param("name");
	response.send('hello '+username);
}) 

app.get('/sendUser', function(request, response) {
	return response.json({
		status: 200,
		user: username
	})
})