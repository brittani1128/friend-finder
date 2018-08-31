//LOAD DATA ===========================================

var friends = require("../data/friends.js");


//ROUTING ============================================

module.exports = function (app) {


    app.get("/api/survey", function (req, res) {
        res.json(questions);
    })



    var differenceArray = [];
    var bestMatch = {};

    app.post("/api/survey", function (req, res) {

        var newFriend = req.body;
        // loop through friends array and grab scores
        for (var i = 0; i < friends.length; i++) {
            
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
        
        //find best match with index
        bestMatch = friends[index];
        console.log(bestMatch);

        //empty differences array
        differenceArray = [];
    
        //send bestMatch to survey.html 
        res.send(bestMatch);
        
    })

   
    


};