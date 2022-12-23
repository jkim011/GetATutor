const router = require('express').Router();
const {Tutor, Subject, User} = require('../../models')

router.get('/', async (req, res) => {
    try {
        const userData = await User.findAll({})
        res.json(userData)
    } catch(err) {
        res.status(500).json(err)
    }
})

router.post('/', async (req, res) => {
    try {
        const postUser = await User.create({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
        });
        req.session.save(() => {
            req.session.user_id = postUser.id,
            req.session.username = postUser.username
            req.session.loggedIn = true
            res.json(postUser)
        })
    } catch(err) {
        res.status(500).json(err)
    }
})

module.exports = router