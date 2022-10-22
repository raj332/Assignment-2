const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/StudentDB",{ useNewUrlParser: true },(error)=>{
    if(error){
        console.log("Error in Db Connections")
    }else{
        console.log("DB Connected");
    }
});

module.exports =  mongoose ;