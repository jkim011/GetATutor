const router = require('express').Router();
const {Tutor, Subject, User} = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
    try{
        res.render('homepage')
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
        let subject={subject:{
            math:'Math',
            science:'Science',
            coding:'Coding',
            humanities:'Humanities'
        }}
        res.render("subjects",subject)
    } catch (err) {
        res.status(500).json(err);
    }
})

router.get('/profile', withAuth, async (req, res) => {
    try {
        const userData = await User.findByPk(req.session.user_id, {
            attributes: {exclude: ['password']},
            //include subjects to study, potential tutors
            include:[{model: Subject}]
        });
        const userProfile = userData.get({plain:true})
       
        console.log(userProfile)

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
        res.render("choose-subjects")
    } catch (err) {
        res.status(500).json(err);
    }
})
router.get('/tutors', async (req, res) => {
    try {
        
        res.render("tutors")
    } catch (err) {
        res.status(500).json(err);
    }
})
module.exports = router;