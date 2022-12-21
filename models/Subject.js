const {Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection')

class Subject extends Model{}

Subject.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        math: {
            type: DataTypes.BOOLEAN,
        },
        science: {
            type: DataTypes.BOOLEAN,
        },
        coding: {
            type: DataTypes.BOOLEAN,
        },
        humanities: {
            type: DataTypes.BOOLEAN
        },
        
        tutor_id: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references:{
                model: "tutor",
                key: 'id'
            }
        }
    },
{
    
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'subject',
    
}
)

module.exports = Subject