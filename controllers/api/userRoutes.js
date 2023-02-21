const router = require('express').Router();
const { de } = require('date-fns/locale');
const {Tutor, Subject, User, Appointment} = require('../../models')

router.get('/', async (req, res) => {
    try {
        const userData = await User.findAll({ include: [
            {
                model: Subject,
                model: Appointment,
            }
        ]})
        res.json(userData)
    } catch(err) {
        res.status(500).json(err)
    }
})

router.get('/:id', async (req, res) => {
    try{
        const userData = await User.findByPk(req.params.id,{
        include: [
            {
                model: Subject,
                model: Appointment
            }
        ]
       }) 
       res.json(userData)
    }catch (err){
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
});

router.delete('/:id', async (req, res) => {
    try {
        const deleteUser = await User.destroy({
           where:{
            id: req.params.id,
           }
        })
        res.status(200).json(deleteUser)
    } catch(err){
        res.status(500).json(err)
    }
})

router.post('/:id', async (req,res)=>{
    console.log("USER ID*************", req.params.id, JSON.stringify(req.body))
    console.log(req.session.user_id)
    const subject = req.body
    subject.user_id = req.session.user_id
    
    
    try{
        const updateUser = await Subject.create(subject)    
     
        res.status(200).json(updateUser)
    } catch (err){
        res.status(500).json(err)
    }
});

router.post('/:id/appointments', async (req, res) =>{
    try {
        const newAppt = await Appointment.create({
            
            subject: req.body.subject,
            tutor: req.body.tutor,
            date: req.body.date,
            time: req.body.time,
            user_id: req.params.id
        });
        res.status(200).json(newAppt)
        console.log(newAppt);
    } catch(err){
        res.status(400).json(err);
    }
  });

router.delete("/:id/appointments/:apId", async (req,res) => {
    try {
        const deleteAppt = await Appointment.destroy({
            where: {id: req.params.apId}
        })
        res.status(200).json(deleteAppt)
    }catch(err){
        res.status(400).json(err)
    }
})





router.put('/:id', async (req,res)=>{
    console.log("USER ID*************", req.params.id)
    try{
        const updateUser = await Subject.update(req.body, {
            where: {user_id: req.params.id}

        })    
     
        res.status(200).json(updateUser)
    } catch (err){
        res.status(500).json(err)
    }
});

router.post('/auth/login', async (req, res) => {
    try{
        const userLogin = await User.findOne({
            where: {email: req.body.email}
        });

        if(!userLogin){
            res.status(400).json({message: 'Incorrect email or password'})
            return;
        }

        const validPw = await userLogin.checkPassword(req.body.password);

        if(!validPw){
            res.status(400).json({message: 'Incorrect email or password'})
            return;
        }

        req.session.save(() =>{
            req.session.user_id = userLogin.id;
            req.session.loggedIn = true;
            console.log("USER LOGIN!!!", userLogin)
            res.json(userLogin)
        })

    } catch(err){
        res.status(400).json(err)
    }
})

router.post('/auth/logout', (req, res) => {
    if (req.session.loggedIn) {
      req.session.destroy(() => {
        res.status(204).end();
      });
    } else {
      res.status(404).end();
    }
  });

module.exports = router