// Require functions from the Model
var db = require("../models");
// Export these awesome routes
module.exports = function (app) {
    // Get the root route
    app.get("/", function (req, res) {
        db.Burger.findAll({}).then(function (result) {
            var uneaten = [];
            var eaten = [];
            // var result = result_ + '';
            // var result = JSON.parse(JSON.stringify(result_));
            for (var i = 0; i < result.length; i++) {
                if (result[i].devoured){
                    eaten.push(result[i]);
                }else{
                    uneaten.push(result[i]);
                }
            }
            return res.render("index", {
                eaten: eaten,
                uneaten: uneaten
            });
        });
   });

    // Get the API route, which displays all burgers
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
            // (Note how we're using Sequelize here to run our searches)
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
        }).then(function(result){
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