// DEPENDENCIES
//=================================================================
var express = require("express");
var bodyParser = require ("body-parser");
var path = require("path");
var friends = require("./app/data/friends.js");

//SET UP EXPRESS APP
//=================================================================
var app = express();
var PORT = process.env.PORT || 8080;


app.use(bodyParser.urlencoded({ extended: true}))
app.use(bodyParser.json());



require("./app/routes/apiRoutes")(app);
require("./app/routes/htmlRoutes")(app);



//START SERVER
//===================================================================
app.listen(PORT, function(){
    console.log("App listening on PORT " + PORT);
})