


var express = require('express');
var fs = require("fs");
var app = express();
var PORT = process.env.PORT || 3000;
var amigosapi = require("./app/data/friends")
amigosapi;
// var friendsapi = require("./app/data/friends.js")
// friendsapi;
// respond with "hello world" when a GET request is made to the homepage

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Get

// should have var apiRoutes= require directory path
// should have var htmlRoutes= require directory path
app.get('/', function (req, res) {

  res.send(amigosapi[0].name);
});

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });

 