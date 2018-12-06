const path = require("path");

module.exports = function(app){
    // route to display the json from the api
    app.get("/json", function(req, res) {
        res.sendFile(path.join(__dirname, "../data/friends.js"));
    });
};