const path = require("path");
const friends = require('../data/friends.js');

module.exports = function(app){

console.log("heres what it is");
    // route to display the json from the api
    app.get("/json", function(req, res) {
        res.sendFile(path.join(__dirname, friends));
        console.log('apiRoute');
    });

    app.post("/json/friends", function (req, res) {
        var bestAmigo = {
            name: '',
            photo: '',
            total: '',
        };
        // const reducer = (accumulator, currentValue) => accumulator + currentValue;
        var user = req.body;
        var scores = user.scores;

        var userData = 0;
// chnge the below to a functon var
        for ( var i = 0 ; i<scores.length; i++ ){
            for( var x = 0; friends.length) {

            userData += parseInt(scores[i]);
            console.log('inside', scores[i], userData );
            }
        }

        console.log( 'outside', scores, userData);
    });
// run the reducer function on each person at ./json location to reduce them to a single score num
// compare the userScoreNum to the freindScoreNum to => the clossest match
// display match in html

};