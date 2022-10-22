const router = require("express").Router();
let User = require("../Models/UserModel")
const {check ,validationResult }= require("express-validator")
const {sign} = require("../libs/jwt")
router.get("/login",(req,res)=>{
    res.render("login");
})
router.post("/login",
[
    check("email").isEmail()
],async (req,res)=>{
    const errors = validationResult(req);
    if(! errors.isEmpty()){
        return res.status(400).json({error:errors.array()});
    }
    let {email ,password}= req.body ;
    console.log(req.body)
    try {
        let user = await  User.findOne({email})
        if(!user){
           return res.status(400).json({error : "user not found"})
        }
 console.log(user)
 console.log(password)
        if(user.password == password){
            sign(req,res);

        }else{
            return res.status(400).json({error : "wrong password"})
        }
    }catch(err){
        res.send(err);
    }
})
module.exports = router;