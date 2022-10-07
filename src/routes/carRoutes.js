const router = require("express").Router();
const {
  getCars,
  postCars,
  updateCars,
  deleteCars,
} = require("../controllers/carCotrollers.js");
const uploadFile = require("../middleware/uploadFile.js")

router.get("/", getCars);
router.post("/", uploadFile, postCars);
router.put("/:id", uploadFile, updateCars);
router.delete("/:id", deleteCars);

module.exports = router;
