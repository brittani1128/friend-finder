//LOAD DATA ===========================================

var friends = require("../data/friends.js");


//ROUTING ============================================

module.exports = function (app) {


    app.get("/api/survey", function (req, res) {
        res.json(questions);
    })


    app.post("/api/survey", function (req, res) {

        // console.log(friends);

        //add to friends.js
        compare(req.body);
        //send result of compare function to front end
        // friends.push(req.body);
        // console.log(friends);

        res.send(bestMatch);
        differenceArray = [];
    })

    var differenceArray = [];
    
    var bestMatch = {};
    
    function compare(newFriend) {
        // loop through friends array
        for (var i = 0; i < friends.length; i++) {
            //store friend score array in new var
            var friendScores = friends[i].scores;
            var totalDifference = 0;
            //loop through new friend score array, compare each friend score with newFriend score for each question
            for (var j = 0; j < friendScores.length; j++) {
                var friendScore = parseInt(friendScores[j]);
                var newFriendScore = parseInt(newFriend.scores[j]);
                //find difference between scores
                totalDifference += Math.abs(friendScore - newFriendScore);
            }
            //push score differences to array
            differenceArray.push(totalDifference);
        
        }
        console.log(differenceArray);

        //grab index of smallest number, then find friend at that index
        var min = parseInt(Math.min.apply(null, differenceArray));
        var index = differenceArray.indexOf(min);
        // console.log(index);

        // bestMatch = {name: friends[index].name,
        //             photo: friends[index].photo};
        bestMatch = friends[index];
        console.log(bestMatch);
        
    }




};