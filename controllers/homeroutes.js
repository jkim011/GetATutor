const router = require('express').Router();
const {Tutor, Subject, User, Appointment} = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
    try{
        res.render('homepage', {loggedIn: req.session.loggedIn})
    } catch(err){
        res.status(500).json(err); 
    }
})

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

router.get('/profile', withAuth, async (req, res) => {
    try {
        const userData = await User.findByPk(req.session.user_id, {
            attributes: {exclude: ['password']},
            //include subjects to study, potential tutors
            include:[{model: Subject}, {model: Appointment}]
        });
        const userProfile = userData.get({plain:true})
       
        console.log("Here is the user:", userProfile)
        

        

        res.render("profile", {
            ...userProfile,
            loggedIn: true

        })
    } catch (err) {
        res.status(500).json(err);
    }
})

router.get('/choose-subjects', withAuth, async (req, res) => {
    try {
        res.render("choose-subjects",
        {loggedIn: req.session.loggedIn})
    } catch (err) {
        res.status(500).json(err);
    }
})

router.get('/rechoose-subjects', withAuth, async (req, res) => {
    try {
        res.render("rechoose-subjects", 
        {loggedIn: req.session.loggedIn})
    } catch (err) {
        res.status(500).json(err);
    }
})

module.exports = router;