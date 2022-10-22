const express = require('express');
const app = express();
const {verify} = require("./libs/jwt")
app.use(express.urlencoded({extended:true}));
app.use(express.json())
app.get('/',verify,(req,res)=>{
    res.send("Hello World")
})
app.set("view engine",'ejs');
app.use('/user',require('./routes/user'))
app.use('/student',require('./routes/student'))
app.listen(3000,()=>{
    console.log("Listening 3000")
});