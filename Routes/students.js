const express = require("express");
const router = express.Router();
const ejs = require("ejs");
const studentsContoller = require("../Controllers/studentsController");

//Parameter Middleware :
router.param("id" , (req , res , nxt , val)=>{
    //Validation and Adding param as prop for REQ :
    req.id = val;
    if(Number(val)){
        nxt();
    }
    else
        res.send("Invaild ID");
})


// "eldata ray7a mn el JSON object" :
router.all("/" , (req , res , next)=>{
    console.log("Middleware For all CRUDS on Students");
    next();
})


router.get("/" ,studentsContoller.getAllstudents);

//Sending Data from client to sever Via URL PARAMETER "eldata ray7a mn el JSON object" :
router.get("/:id" ,studentsContoller.getStudentById);


//Create new student : "Handling Http POST Request"
router.post("/" , studentsContoller.CreateNewStudent);


//Delete student : "Handling Http DELETE Request"
router.delete("/:id" , studentsContoller.DeletingStudentById);


//Update student : "Handling Http PUT Request"
router.put("/:id" , studentsContoller.UpdatingStudentById);


module.exports = router;