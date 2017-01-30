// Require functions from the Model
var Burger = require("../models/burger.js");
// Export these awesome routes
module.exports = function (app) {
    // Get the root route
    app.get("/", function (req, res) {
        if (req.params.devoured === false) {
            Burger.getAll({
                where: {
                    devoured: false
                }
            }).then(function (result) {
                return res.render("index", {
                    burgers: result
                });
            });
        } else {
            Burger.getAll({
                where: {
                    devoured: true
                }
            }).then(function (result) {
                return res.render("index", {
                    devoured_burgers: result
                });
            });
        }
    });
    // Get the API route, which displays all burgers
    app.get("/api/burgers/:id?", function (req, res) {
        // If the user provides a specific character in the URL...
        if (req.params.id) {
            Burger.findOne({
                where: {
                    id: req.params.id
                }
            }).then(function (result) {
                return res.json(result);
            });
        } else {
            // Otherwise display the data for all of the characters.
            // (Note how we're using Sequelize here to run our searches)
            Burger.findAll({}).then(function (result) {
                return res.json(result);
            });
        }
    });
    // Post for creating burger
    app.post('/', function (req, res) {
        var newBurg = req.body.burger;
        // Makes sure something is inputed
        if (newBurg !== "") {
            Burger.create({
                where: {
                    burger_name: newBurg.burger_name
                }
            }).then(function (result) {
                return res.json(result);
            });
        } else {
            res.redirect('/');
        }
    });
    // Defines the updates for when burgers are "devoured"
    app.put('/:id', function (req, res) {
        var selectBurg = req.params.id;
        Book.findOne({
            where: {
                title: selectBurg
            }
        }).then(function (result) {
            Burger.update({
                where: {
                    devoured: true
                }
            }).then(function (result){
                return res.json(result);
            });
        });
    });
};