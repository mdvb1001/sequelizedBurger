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