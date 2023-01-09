const sequelize = require('../config/connection');
const seedTutor = require('./tutorData');
const seedSubject = require('./subjectData');
const seedUser = require('./userData');

const seedAll = async () => {
    await sequelize.sync({force: true});
    console.log("______________DATABASE SYNCED______________")

    await seedUser()
    console.log("______________USERS SEEDED______________")

    await seedTutor()
    console.log("______________TUTORS SEEDED______________")

    await seedSubject()
    console.log("______________SUBJECT SEEDED______________")

    process.exit(0);
}

seedAll();