


const express = require('express');
const fs = require("fs");
const app = express();
const PORT = process.env.PORT || 3000;


// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// this imports the routes from the htmlRoutes.js file
const htmlRoutes = require("./app/routing/htmlRoutes.js");
htmlRoutes(app);

// const apiRoutes = require("./app/routing/apiRoutes.js");
// apiRoutes(app);
// app.get("/", function(req, res) {
//   res.send("you suck");
// })

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });

 