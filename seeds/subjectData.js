const {Subject} = require('../models');

const subjectData = [
    {
        math: false,
        science: false,
        coding: false,
        humanities: true,
        tutor_id: 1
    },
    {
        math: false,
        science: true,
        coding: false,
        humanities: false,
        tutor_id: 2
    },
    {
        math: true,
        science: true,
        coding: true,
        humanities: true,
        tutor_id: 3
    },
    {
        math: false,
        science: true,
        coding: true,
        humanities: false,
        tutor_id: 4
    },
    
  


]

const seedSubject = () => Subject.bulkCreate(subjectData);

module.exports = seedSubject;