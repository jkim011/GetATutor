const router = require('express').Router();
const tutorRoutes = require('./tutorRoutes')
const userRoutes = require("./userRoutes")
const appointmentRoutes = require("./appointmentRoutes")

router.use('/tutors', tutorRoutes)
router.use('/users', userRoutes)
router.use('/appointments', appointmentRoutes)

module.exports = router;