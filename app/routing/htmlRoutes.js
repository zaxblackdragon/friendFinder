//route from index.html to survey.html

// require express

// Go to survey button on index.html 
//    app.get - sends the user to the survey.html

//Submit
// format data with query in variable opject
//post

// var express = require("express");
// var fs = require("fs");
// var app = express();

// var PORT = process.env.PORT || 3000;

// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// app.get("/", function (req, res) {
//     res.sendFile(path.join(__dirname, "index.html"));
// })

var express = require('express')
var app = express()
var PORT = 3000;
// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
  res.send('hello world')
})

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });