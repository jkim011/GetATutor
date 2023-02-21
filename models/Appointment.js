const {Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection')

class Appointment extends Model{}

Appointment.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        subject: {
            type: DataTypes.STRING,
            allowNull:false
        },
        tutor: {
            type: DataTypes.STRING
        },
        date: {
            type: DataTypes.STRING
        },
        time: {
            type: DataTypes.STRING
        },
        user_id:{
            type: DataTypes.INTEGER,
            allowNull: true,
            references:{
                model: "user",
                key: 'id'
            }
        }

    },
    {
    
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'appointment',
    
}

    )

module.exports = Appointment