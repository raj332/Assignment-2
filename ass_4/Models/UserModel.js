const mongoose = require('../config/db');
const UserSchema = mongoose.Schema({

    email : String,
    password :String

});

let User = mongoose.model('User',UserSchema,"users");
module.exports = User ;