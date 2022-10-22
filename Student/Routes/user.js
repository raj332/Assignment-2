const { sign } = require('../libs/jwt');
let User = require('../Models/User');
const router= require('express').Router();

router.post('/login',async (req,res)=>{
 try{
    console.log(req.body)
    let user = await User.findOne({username :req.body.username})
    if(!user){
        res.send("Invalid username");
    }else
    {
        if(user.password = req.body.password){
            sign(req,res);
        }else{
         res.send("invalid password");
        }
    }
 }catch(err){
    res.send(err);
 }
   
    
})
module.exports = router;