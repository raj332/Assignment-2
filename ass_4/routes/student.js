const router = require("express").Router();
const { verify } = require("jsonwebtoken");
const Student = require("../Models/StudentModel");

router.get('/display',(req,res)=>{
         Student.find((err,students)=>{
        if(err){
            res.send(err);
        }
        res.render("display",{students:students})
         })
})

router.get('/add',(req,res)=>{
    res.render("add");
})

router.post('/',(req,res)=>{

let student1 = new Student({
    name :req.body.name,
    rollno :req.body.rollno,
    semester :req.body.semester,
    grade :req.body.grade
})
    student1.save((err, student)=>{
     if(err){
        console.log(err);
     }
     res.redirect("/student/display");
    })
})
router.get("/edit/:id",(req,res)=>{
    Student.findOne({"_id":req.params.id },(err,student)=>{
        if(err){
            res.send(err)
        }
        if(!student){
            res.send("No Student found")
        }
        res.render("edit",{student :student})
    })
})
router.post("/update",(req,res)=>{
    Student.findOneAndUpdate({"rollno":req.body.rollno},
    {
        name:req.body.name,
        rollno:req.body.rollno,
        semester:req.body.semester,
        grade : req.body.grade
    },
    {new:true},function(err,student){
        if(err){
            res.send(err)
        }
        res.redirect("/student/display")
    }
    )
})

router.get("/delete/:id",(req,res)=>{

    Student.findByIdAndDelete({"_id":req.params._id},(err,student)=>{
        if(err){
            res.send(err)
        }
        res.redirect("/student/display")
    })
})

module.exports = router ;