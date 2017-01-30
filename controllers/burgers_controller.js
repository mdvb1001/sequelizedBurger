// Require functions from the Model
var Burger = require("../models/burger.js");
// Export these awesome routes
module.exports = function (app) {
    // Get the root route
    app.get("/", function (req, res) {
            Burger.findAll({
                where: {
                    devoured: false
                }
            }).then(function (result) {
                return res.render("index", {
                    burgers: result
                });
            });
    app.get("/", function (req, res){
            Burger.findAll({
                where: {
                    devoured: true
                }
            }).then(function (result1) {
                return res.render("index", {
                    devoured_burgers: result1
                });
            });
        });
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
            Burger.create({
                burger_name: newBurg.burger_name
            });
    });
    // Defines the updates for when burgers are "devoured"
    app.put('/:id', function (req, res) {
        var selectBurg = req.params.id;
        Burger.findOne({
            where: {
                id: selectBurg
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