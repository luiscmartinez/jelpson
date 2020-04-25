const router = require('express').Router()
const controllers = require('./yelpControllers')

router.get('/search', controllers.search)

module.exports = router
