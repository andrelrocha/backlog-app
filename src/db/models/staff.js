"use strict";
const {
    Model
} = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Staff extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
        static associate(models) {
            Staff.hasMany(models.Contents, {
                foreignKey: "staffId",
            });
        }
    }
    Staff.init({
        name: DataTypes.STRING,
        role: DataTypes.STRING,
        otherProjects: DataTypes.ARRAY(DataTypes.STRING)
    }, {
        sequelize,
        modelName: "Staff",
        paranoid: true,
    });
    return Staff;
};