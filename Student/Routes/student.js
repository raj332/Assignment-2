const { findOneAndDelete } = require('../Models/Student');
const Student = require('../Models/Student');
const router = require('express').Router();
const multer = require('multer');
const {verify}=require('../libs/jwt')
let option = multer.diskStorage({
    destination:(req,file,err)=>{
       if(file.mimetype !== 'image/jpeg'){
        return err('Invailid Format');
       }
       err(null,'./imgs');

    },
    filename:(req,file,cb)=>{
         cb(null,Date.now()+file.originalname)
    }

})
let upload= multer({
    storage : option
})
router.get("/insert",(req,res)=>{
    res.render("insert");
})
router.post("/insert",upload.single("Img") ,(req,res)=>{
    console.log(req.body)
    let student1 = new Student({
        Name :req.body.Name,
        Rollno :req.body.Rollno,
        Age : req.body.Age,
        Semester :req.body.Semester
    })
    
     
    student1.save((err,stu)=>{
        if(err){
            res.send(err);
        }
        res.redirect("/student/display");
    })
})

router.get("/display",(req,res)=>{
     Student.find((err,students)=>{
        if(err){
            res.send(err);
        }else{
            res.render("display",{students:students})
        }
     })
})
router.get("/update/:rollno",(req,res)=>{
    Student.findOne({"Rollno":req.params.rollno},(err,student)=>{
  if(err){
    res.send(err);
  }else{
     res.render("edit",{viewstudent:student})
  }
    })
})

router.post("/edit",verify,(req,res)=>{
    console.log(req.body)
    Student.findOneAndUpdate({"Rollno" :req.body.Rollno},{
        Name:req.body.Name,
     Semester:req.body.Semester,
       Age:req.body.Age
    },{new:true},(err,student)=>{
        if(err){
            res.send(err)
        }else{
            res.send("/student/display");
        }
     
    })
})


router.get("/delete/:rollno",(req,res)=>{
     Student.findOneAndDelete({"Rollno":req.params.rollno},(err,student)=>{
           if(err){
             res.send(err);
           }else{
            res.redirect("/student/display");
           }
     })
})


module.exports = router;