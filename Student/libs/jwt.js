const jwt = require('jsonwebtoken');
const secret ="RAJISBEST"
const sign = (req,res)=>{
console.log("In sign")
const token = jwt.sign({username :req.body.username },secret,{algorithm:'HS256'})
res.send(token);

}
const verify =(req,res,next)=>{

    let head = req.headers.authorization;
    console.log(head);
    if(!head){
        res.send("not Authorized")
    }
    try{
        let token = head.split(' ')[1];
        let playload= jwt.verify(token,secret);
        next();
    }catch(error){
        res.send(error);
    }
   
    
}
module.exports={sign,verify}