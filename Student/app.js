const express = require('express');

const app = express();


app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.set("view engine","ejs");
app.use('/student',require('./Routes/student'))
app.use("/user",require('./Routes/user'))
app.get("/",(req,res)=>{
    res.write("Hello World");
    res.end();
})

app.listen(3000,()=>{
    console.log("3000 is running");
})