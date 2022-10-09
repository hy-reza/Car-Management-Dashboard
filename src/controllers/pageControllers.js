const errorHandler = require("../middleware/errorHandler.js");
const { Cars } = require("../../models");
const { Op } = require("sequelize");
const moment = require("moment");
const toRupiah = require("@develoka/angka-rupiah-js");

exports.getDashboardPage = (req, res) => {
  try {
    res.status(200).render("index", {
      layout: "mainLayout",
      title: "Dashboard",
      breadcrumbs: ["Dashboard"],
    });
  } catch (e) {
    errorHandler(res, e);
  }
};

exports.getCarsPage = async (req, res) => {
  const { id, size, name } = req.query;
  try {
    let findedCars = null;
    if (id) {
      findedCars = await Cars.findAll({
        where: {
          id: id,
        },
      });
    } else if (size) {
      findedCars = await Cars.findAll({
        where: {
          car_name: {
            [Op.iRegexp]: name || "[a-z]",
          },
          car_size: size,
        },
      });
    } else if (name) {
      findedCars = await Cars.findAll({
        where: {
          car_name: {
            [Op.iRegexp]: `${name}`,
          },
          car_size: {
            [Op.iRegexp]: size || "[a-z]",
          },
        },
      });
    } else {
      findedCars = await Cars.findAll();
    }
    if (!findedCars) throw new Error(`Error: Invalid query `);
    res.status(200).render("cars", {
      layout: "mainLayout",
      title: "List Car",
      breadcrumbs: ["Cars", "List Car"],
      data: findedCars,
      activeUrl: req.url,
      moment,
      toRupiah,
    });
  } catch (e) {
    errorHandler(res, e);
  }
};

exports.getAddCarsPage = (req, res) => {
  try {
    res.status(200).render("addCars", {
      layout: "mainLayout",
      title: "Add New Car",
      breadcrumbs: ["Cars", "List Car", "Add New Car"],
    });
  } catch (e) {
    errorHandler(res, e);
  }
};

exports.getEditCarsPage = async (req, res) => {
  const { id } = req.params;
  try {
    const findedCars = await Cars.findByPk(id);
    res.status(200).render("editCars", {
      layout: "mainLayout",
      title: "Add New Car",
      breadcrumbs: ["Cars", "List Car", "Edit Car"],
      data: findedCars,
    });
  } catch (e) {
    errorHandler(res, e);
  }
};
