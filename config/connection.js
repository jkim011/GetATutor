const Sequelize = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
    "GetATutor_db",
    "root",
    "KwanghoMySqL-01",
    {
        host: 'localhost',
        dialect: 'mysql',
        port: 3306,
    }
)

module.exports = sequelize;