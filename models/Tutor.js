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
    },
    profile:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
          validate: {
            isEmail: true,
          },
    },
  
},
{
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'tutor',
}
)

module.exports = Tutor
