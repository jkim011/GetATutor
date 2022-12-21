const {Subject} = require('../models');

const subjectData = [
    {
        math:{
           Boolean: false
        },
        science:{
            Boolean: false
        },
        coding:{
            Boolean: false
        },
        humanities: {
            Boolean: true
        }       
    },
    {
        math:{
            Boolean: false
         },
         science:{
             Boolean: true
         },
         coding:{
             Boolean: false
         },
         humanities: {
             Boolean: false
         }     
    },
    {
        math:{
            Boolean: false
         },
         science:{
             Boolean: true
         },
         coding:{
             Boolean: false
         },
         humanities: {
             Boolean: true
         }     
    },
    {
        math:{
            Boolean: true
         },
         science:{
             Boolean: false
         },
         coding:{
             Boolean: true
         },
         humanities: {
             Boolean: false
         }     
    },


]

const seedSubject = () => Subject.bulkCreate(subjectData);

module.exports = seedSubject;