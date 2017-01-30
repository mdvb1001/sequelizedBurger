var Burger = require("../models/burger.js");
module.exports = function (app) {
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
};