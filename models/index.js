const Subject = require('./Subject')
const User = require('./User');
const Tutor = require('./Tutor');

Tutor.hasOne(Subject,{
    foreignKey: "tutor_id",
    onDelete: 'CASCADE'
})

Subject.belongsTo(Tutor,{
    foreignKey: 'tutor_id',
    onDelete: "CASCADE"
});

User.hasOne(Subject, {
    foreignKey: "user_id",
    onDelete:"CASCADE"
});

Subject.belongsTo(User, {
    foreignKey:"user_id",
    onDelete: "CASCADE"
});



module.exports = { Subject, User, Tutor }
