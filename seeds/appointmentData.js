const {Appointment} = require("../models")

const appointmentData = [
    {
        subject: "Math",
        tutor: "Professor Xaiver",
        date: "2023-02-28",
        time: "09:00",
        user_id: "1"
    },
    {
        subject: "Coding",
        tutor: "Trinity Moss",
        date: "2023-04-28",
        time: "10:00",
        user_id: "1"
    },
    {
        subject: "Coding",
        tutor: "Trinity Moss",
        date: "2023-04-28",
        time: "11:00",
        user_id: "2"
    }
]

const seedAppointment = () => Appointment.bulkCreate(appointmentData)

module.exports = seedAppointment;