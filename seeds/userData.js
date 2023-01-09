const {User} = require('../models');

const userData = [
    {
        username: "Ryan Street",
        email: "ryans@gmail.com",
        password: "1234qwer",
        
    },
    {
        username: "Wario",
        email: "wario@gmail.com",
        password: "1234qwer",
        
    },

]

const seedUser = () => User.bulkCreate(userData)

module.exports = seedUser;