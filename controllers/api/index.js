const router = require('express').Router();
const tutorRoutes = require('./tutorRoutes')

router.use('/tutors', tutorRoutes)

module.exports = router;