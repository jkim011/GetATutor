const sequelize = require('../config/connection');
const seedTutor = require('./tutorData');
const seedSubject = require('./subjectData');

const seedAll = async () => {
    await sequelize.sync({force: true});
    console.log("______________DATABASE SYNCED______________")

    await seedTutor
    console.log("______________TUTORS SEEDED______________")

    await seedSubject 
    console.log("______________TUTORS SEEDED______________")

    process.exit(0);
}

seedAll();