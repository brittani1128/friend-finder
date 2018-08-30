// DEPENDENCIES
//=================================================================
var express = require("express");
var bodyParser = require ("body-parser");
var path = require("path");
// var friends = require("app/data/friends.js");

//SET UP EXPRESS APP
//=================================================================
var app = express();
var PORT = process.env.PORT || 8080;


app.use(bodyParser.urlencoded({ extended: true}))
app.use(bodyParser.json());

    
  
var friends = [
    {
        name:"Ahmed",
        photo:"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
        scores:[
            5,
            1,
            4,
            4,
            5,
            1,
            2,
            5,
            4,
            1
        ]
   }
];

// HTML ROUTES -- htmlRoutes.js
//=================================================================
//GET route to /survey to display survey page
//default route that displays home.html

app.get("/", function(req,res){
    res.sendFile(path.join(__dirname, "app/public/home.html"));
});

app.get("/survey", function(req,res){
    res.sendFile(path.join(__dirname, "app/public/survey.html"));
});





// API ROUTES -- apiRoutes.js
//GET route to /api/friends -- display JSON of all possible friends
//POST route /api/friends -- handle incoming survey results and compatibility logic

app.get("/api/survey",function(req,res){
    res.json(questions);
})
app.post("/api/survey", function(req,res){
    friends.push(req.body);
    console.log(friends);

    //add to friends.js
    //compare()
    //send result of compare function to front end
})



function compare(newFriend){
    //pass new friend created
    //get friends from js
    //compare new friend scores to other friends scores
    //return best match
}



//START SERVER
//===================================================================
app.listen(PORT, function(){
    console.log("App listening on PORT " + PORT);
})