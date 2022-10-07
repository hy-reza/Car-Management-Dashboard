'use strict';

const { faker } = require("@faker-js/faker");
const uuid4 = require("uuid4");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     let carSize = ["Small", "Medium", "Large"];
     let carType = ["Sport", "Family", "Other"]
     faker.seed(12312332);
     let dataCars = [];
     for (let i = 1; i <= 15; i++) {
       let id = uuid4();
       dataCars.push({
         id: id,
         car_name:  faker.vehicle.vehicle(),
         car_price: faker.datatype.number({ min: 200000, max: 2000000 }),
         car_type : carType[Math.floor(Math.random() * carSize.length)],
         car_size:  carSize[Math.floor(Math.random() * carSize.length)],
         car_photo: "./assets/images/cars/1665158909849-pexels-alexgtacar-1592384.jpg",
         createdAt: new Date(),
         updatedAt: new Date(),
         car_availability: true
       });
     }
     await queryInterface.bulkInsert("cars", dataCars, {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete("cars", null, {});
  }
};
