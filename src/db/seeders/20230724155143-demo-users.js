"use strict";

const { v4: uuidv4 } = require("uuid");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up (queryInterface, Sequelize) {
        await queryInterface.bulkInsert("Users", [{
            id: uuidv4(), 
            name: "John Doe",
            email: "email@email.com",
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            id: uuidv4(), 
            name: "Jane Doe",
            email: "email2@mail.com",
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            id: uuidv4(), 
            name: "John Smith",
            email: "novoemail@email.com",
            createdAt: new Date(),
            updatedAt: new Date()
        }
        ], {});
    },

    async down (queryInterface, Sequelize) {
        await queryInterface.bulkDelete("Users", null, {});
    }
};
