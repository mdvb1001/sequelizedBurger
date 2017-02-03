// Require functions from the models folder (index.js and burger.js)
var db = require("../models");
// Export these awesome routes
module.exports = function (app) {
    // Get the root route
    app.get("/", function (req, res) {
        db.Burger.findAll({}).then(function (result) {
            // define two categories of burgers
            var uneaten = [];
            var eaten = [];
            for (var i = 0; i < result.length; i++) {
                if (result[i].devoured) {
                    eaten.push(result[i]);
                } else {
                    uneaten.push(result[i]);
                }
            }
            // Sends both data types to respective handlebars tags
            return res.render("index", {
                eaten: eaten,
                uneaten: uneaten
            });
        });
    });
    // Gets the API route, which displays All burgers or One burger
    app.get("/api/burgers/:id?", function (req, res) {
        // If the user provides a specific character in the URL...
        if (req.params.id) {
            db.Burger.findOne({
                where: {
                    id: req.params.id
                }
            }).then(function (result) {
                return res.json(result);
            });
        } else {
            // Otherwise display the data for all of the characters.
            db.Burger.findAll({}).then(function (result) {
                return res.json(result);
            });
        }
    });
    // Post for creating burger
    app.post('/', function (req, res) {
        var newBurg = req.body;
        // Makes sure something is inputed
        db.Burger.create({
            burger_name: newBurg.foo
        }).then(function (result) {
            res.redirect('/');
        });
    });
    // Defines the updates for when burgers are "devoured"
    app.put('/:id', function (req, res) {
        var selectBurg = req.params.id;
        db.Burger.update({
            devoured: true
        }, {
            where: {
                id: selectBurg
            }
        }).then(function (result) {
            res.redirect('/');
        });
    });
};