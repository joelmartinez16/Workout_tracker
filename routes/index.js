const router = require('express').Router()
router.use('/api', require('./api'))
router.use("/", require('./html-routes'))

module.exports = router

