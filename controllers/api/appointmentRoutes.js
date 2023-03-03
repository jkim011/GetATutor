const router = require('express').Router();
const { Appointment } = require("../../models")

router.delete("/:id", async (req,res)=>{
    try{
        const deleteAppt = Appointment.delete({
            where:
            {id: req.params.id}
        })
        res.status(200).json(deleteAppt)
    }catch(err){
        res.status(400).json(err)
    }
})

router.get("/", async (req,res) => {
    try{
        const allAppts = Appointment.findAll({})
        res.status(200).json(allAppts)
    }catch(err){
        res.status(400).json(err)
    }
    
})

module.exports = router