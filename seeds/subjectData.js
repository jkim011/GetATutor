const {Subject} = require('../models');

const subjectData = [
    {
        math: false,
        science: false,
        coding: false,
        humanities: true,
        tutor_id: 1
    },
  


]

const seedSubject = () => Subject.bulkCreate(subjectData);

module.exports = seedSubject;