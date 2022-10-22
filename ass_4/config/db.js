const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/User",{ useNewUrlParser: true },(err)=>{
    if(err){
        console.log("Error in Db Connections")
    }else{
        console.log("DB Connected");
    }
});

module.exports = mongoose;