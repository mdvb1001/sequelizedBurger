// Dependencies
// Require connection from connection.js
// var sequelize = require('../config');
module.exports = function (sequelize, DataTypes) {
    var Burger = sequelize.define("Burger", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        burger_name: DataTypes.STRING,
        devoured: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        // created_at: {
        //     type: Sequelize.DATE,
        //     defaultValue: Sequelize.NOW
        // }
    }, {
        timestamps: true
    });
    return Burger;
};
