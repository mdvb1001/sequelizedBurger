// Dependencies
var Sequelize = require('sequelize');
// Require connection from connection.js
var sequelize = require('../config/connection.js');
var Burger = sequelize.define("burger", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    burger_name: Sequelize.STRING,
    devoured: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    },
    created_at: {
        type: Sequelize.DATE,
        field: 'beginTime',
        defaultValue: sequelize.literal('NOW()')
    }
}, {
    timestamps: true
});

Burger.sync();

module.exports = Burger;



// // Export all of these functions so we can call them in controllers folder
// module.exports = { //
//     // Function to display all burgers in json format
//     getAll: function (callback) {
//         Burger.findAll({})
//         .then(function(result) {
//             return res.json(result);
//         });
//     },
//     // Function that queries all Uneaten burgers
//     getUneaten: function (callback) {
//         connectionSQL.query("SELECT * FROM burgers WHERE devoured = 0", function (err, data) {
//             callback(data);
//         });
//     },
//     // Function that queries all Devoured burgers
//     getDevoured: function (callback) {
//         connectionSQL.query("SELECT * FROM burgers WHERE devoured = 1", function (err, data) {
//             callback(data);
//         });
//     },
//     // Function that queries any burger by ID#
//     getBurgerById: function (burgerId, callback) {
//         connectionSQL.query('SELECT * FROM burgers WHERE id = ?', [burgerId], function (err, data) {
//             if (err) throw err;
//             callback(data);
//         });
//     },

// };