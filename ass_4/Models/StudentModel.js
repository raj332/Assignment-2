const mongoose = require('../config/db');

const StudentSchema = mongoose.Schema({
    name: String ,
    rollno : Number ,
    semester : Number ,
    grade : String
});

let Student = mongoose.model('Student',StudentSchema,'students')
module.exports = Student