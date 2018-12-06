const path = require("path");

module.exports = function(app){
    app.get("/json", function(req, res) {
        res.sendFile(path.join(__dirname, "../data/friends.js"));
    });
};