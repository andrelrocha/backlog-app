"use strict";
const {
    Model
} = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
        static associate(models) {
            Users.hasMany(models.Contents, {
                foreignKey: "userId",
            });
        }
    }
    Users.init({
        name: DataTypes.STRING,
        email: {
            type: DataTypes.STRING,
            unique: true,
            validate: {
                isEmail: {
                    msg: "Invalid email format"
                }
            },
        }
    }, {
        sequelize,
        modelName: "Users",
        paranoid: true,
        scopes: {
            all: { where: {} },
        }
    });
    return Users;
};