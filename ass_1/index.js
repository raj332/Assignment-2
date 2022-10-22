const express =require ('express')
const multer =require('multer')
const app= express();
app.set('view engine','ejs');
let options =multer.diskStorage({
    destination:(req,file,cb)=>{
        console.log(file.mimetype)
      if(file.mimetype !=='image/jpeg'){
        return cb('Invalid Format')
      }
      cb(null,'./imgs');
    },
    filename:(req,file,cb)=>{
      cb(null,Date.now()+file.originalname)
    }
})
let upload =multer({
    storage:options
})

app.get('/',(req,res)=>{
    res.render("index");
})
app.post('/upload',upload.single("images"),(req,res)=>{
    res.send("File Uploaded");
})
app.post('/uploads',upload.array("multi_images",2),(req,res)=>{
    res.send("Multi File Uploaded");
})
app.use(express.urlencoded({ extended: true }));
app.listen(3000,()=>{
    console.log("Listening 3000")
})