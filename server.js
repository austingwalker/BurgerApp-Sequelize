// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
//
// ******************************************************************************
// *** Dependencies
// =============================================================
var express = require("express"); //
var bodyParser = require("body-parser"); //

// Sets up the Express App
// =============================================================
var app = express(); //
var PORT = process.env.PORT || 8080; //

// Requiring our models for syncing
var db = require("./models"); //

// Sets up the Express app to handle data parsing

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false })); //*
// parse application/json
// app.use(bodyParser.json());

var exphbs = require("express-handlebars"); //

app.engine("handlebars", exphbs({ defaultLayout: "main" })); //
app.set("view engine", "handlebars"); //

// Static directory
app.use(express.static("public")); //

// Routes
// =============================================================
var routes = require("./controllers/burgers_controller.js"); //

app.use(routes); //

// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync({ force: false }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
}); //
