#!/usr/bin/env nodejs
//import http from 'http';
/*
var http = require('http');
http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World\n');
}).listen(8080, 'localhost');
console.log('Server running at http://localhost:8080/');
*/

var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var port = process.env.PORT || 8080;


app.listen(port, () => console.log(`Listening to port ${port}`));

var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({ extended: false });


app.get('/', (req, res) => {
	res.send('From server');
});

app.get('/file/:id', (req, res) => {
	res.send(`You requested file with id with id: ${req.params.id}`);
});

