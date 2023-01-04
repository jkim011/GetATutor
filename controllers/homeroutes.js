const router = require('express').Router();
const {Tutor, Subject, User} = require('../models')

router.get('/login', async (req, res) => {
    try {
        res.render("login")
    } catch(err) {
        res.status(500).json(err);
    }
})

router.get('/signup', async (req, res) => {
    try {
        res.render("signup")
    } catch (err) {
        res.status(500).json(err);
    }
})

router.get('/subjects', async (req, res) => {
    try {
        res.render("subjects")
    } catch (err) {
        res.status(500).json(err);
    }
})

module.exports = router;