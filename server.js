// Require all the dependencies
var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var exphbs = require("express-handlebars");

// Server set-up
var app = express();
var PORT = process.env.PORT || 8000;

var db = require("./models"); //////////////////////////////////

// Links the static content (i.e. css and images)
app.use(express.static(__dirname + '/public'));
// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Override with POST having ?_method=DELETE
app.use(methodOverride("_method"));

// Set the engine up for handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// link to routes
require("./controllers/burgers_controller.js")(app);


// Listens for connection to server (using Sequelize) on PORT
db.sequelize.sync().then(function(){
    app.listen(PORT, function() {
        console.log("listening on: " + PORT);
    });
});