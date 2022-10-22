const mongoose = require('../Config/db');

const StudentSchema = mongoose.Schema({
    Name : String ,
    Rollno : Number,
    Age : Number ,
    Semester :Number
    
})

let Student  = mongoose.model('Student',StudentSchema)
module.exports = Student ;