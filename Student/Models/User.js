const mongoose= require( "../Config/db");

const UserSchema = mongoose.Schema({
    username : String,
    password :String
})
let User = mongoose.model('User',UserSchema,"users");
module.exports = User;

let options = multer.diskstorage({
destination :(req,file,err)=>{
   if(file.mimetype != 'image/jpeg'){
    res.send(err);
   }else{
    err(null , './img')
   }

},
filename :(req,file,cb)=>{
   cb(null ,Date.now()+file.originalname);
}

})
let upload = multer({
    storage : options
})