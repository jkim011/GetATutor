const {Tutor} = require('../models');
 
const tutorData = [
    {
        name: "John Keating",
        profile: "I'm an english teacher with a knack for inspiration, and a love for dead poets.",
        email: "Keating@GetATutor.com"
    },
    {
        name: "Walter White",
        profile: "Chemistry is all about change",
        email: "White@getatutor.com",
    },
    {
        name: "Professor Xavier",
        profile: "Knowledge is more than a superpower",
        email: "profX@getatutor.com",
    },
    {
        name: "Trinity Moss",
        profile: "Coding is a rabbit-hole, and I'll show you how deep it goes",
        email: 'Trinity@getatutor.com'
    }
 ]

const seedTutor = () => Tutor.bulkCreate(tutorData);

module.exports = seedTutor