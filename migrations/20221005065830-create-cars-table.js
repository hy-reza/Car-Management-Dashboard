"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("cars", {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
        // autoIncrement: true,
        allowNull: false,
      },
      car_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      car_size: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      car_type: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      car_photo: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      car_price: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      car_availability: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("users");
  },
};
