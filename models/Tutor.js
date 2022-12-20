const { Model, DataTypes } = require('sequelize'); 
const sequelize = require('../config/connection');

class Tutor extends Model {}

Tutor.init({
    id:{
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    name:{
        type: DataTypes.STRING,
        allowNull: false,
    }
})

module.exports = Tutor
