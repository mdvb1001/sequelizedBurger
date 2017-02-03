// Defines the burgers model/table and export it
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
    }, {
        timestamps: true
    });
    return Burger;
};
