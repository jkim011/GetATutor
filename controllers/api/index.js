const router = require('express').Router();
const tutorRoutes = require('./tutorRoutes')
const userRoutes = require("./userRoutes")

router.use('/tutors', tutorRoutes)
router.use('/users', userRoutes)

module.exports = router;