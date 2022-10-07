const router = require('express').Router();
const {getDashboardPage, getCarsPage, getAddCarsPage, getEditCarsPage} = require('../controllers/pageControllers.js')

router.get('/', getDashboardPage)
router.get('/cars', getCarsPage)
router.get('/addCars', getAddCarsPage)
router.get('/editCars/:id', getEditCarsPage)


module.exports = router