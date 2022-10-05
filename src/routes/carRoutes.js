const router = require('express').Router()
const {getCars} = require('../controllers/carCotrollers.js')


router.get('/', getCars)


module.exports = router