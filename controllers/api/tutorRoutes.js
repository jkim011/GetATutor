const router = require('express').Router();
const {Tutor, Subject, User} = require('../../models')

//at the api/tutors endpoint
router.get('/', async (req,res) => {
    try{
        const tutorData = await Tutor.findAll({
            // include:[
            //     {
            //         model: Subject,
            //         attributes: [
            //             'math',
            //             'science',
            //             'coding',
            //             'humanities'
            //         ]
            //     }
            // ]
        });
        const tutorList = tutorData.map((tutor)=> tutor.get({plain: true}));
        res.status(200).json(tutorList)
    } catch(err){
        res.status(500).json(err)
    }
});

router.post('/', async (req,res) => {
    try{
        const newTutor = await Tutor.create({
            name: req.body.name,
            profile: req.body.profile,
            email: req.body.email,
        });
        res.status(200).json(newTutor);
    } catch (err){
        res.status(400).json(err)
    }
})



module.exports = router;