// DEPENDENCIES
//=================================================================
var express = require("express");
var bodyParser = require ("body-parser");
var path = require("path");

//SET UP EXPRESS APP
//=================================================================
var app = express();
var PORT = process.env.PORT || 8080;


app.use(bodyParser.urlencoded({ extended: true}))
app.use(bodyParser.json());





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
    console.log(res);
})



//START SERVER
//===================================================================
app.listen(PORT, function(){
    console.log("App listening on PORT " + PORT);
})