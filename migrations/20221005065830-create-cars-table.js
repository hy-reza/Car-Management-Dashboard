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
      car_photo: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      car_price: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("users");
  },
};
