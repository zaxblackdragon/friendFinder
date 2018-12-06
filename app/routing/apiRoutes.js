const path = require("path");

module.exports = function(app){
    app.get("/json", function(req, res) {
        res.send("Hi there");
    });
};