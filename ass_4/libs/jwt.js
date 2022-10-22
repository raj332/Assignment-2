const jwt = require("jsonwebtoken")
const secret ="IAMRAJ@123"
const sign =(req,res)=>{
    const token= jwt.sign({email : req.body.email},secret,{algorithm:"HS256"})
    res.redirect('/student/display')
   
}

const verify=(req,res,next)=>{
    var token =  req.headers.authorization;
    if(!token){
        res.send("Not authorized")
    }
    try{
token = token.split(" ")[1]
let payload = jwt.verify(token,secret)
next();
}catch(error){
        res.send(error)
    }
}

module.exports={sign,verify}