"use strict";
const {
    Model
} = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Contents extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
        static associate(models) {
            Contents.belongsTo(models.Users, {
                foreignKey: "userId",
            });

            Contents.belongsTo(models.Staff, {
                foreignKey: "staffId",
            });
        }
    }
    Contents.init({
        name: DataTypes.STRING,
        category: DataTypes.STRING,
        genre: DataTypes.STRING,
        yrRelease: DataTypes.INTEGER,
        description: DataTypes.STRING,
        reviewNote: DataTypes.DOUBLE,
        userNote: DataTypes.DOUBLE
    }, {
        sequelize,
        modelName: "Contents",
        paranoid: true,
    });
    return Contents;
};