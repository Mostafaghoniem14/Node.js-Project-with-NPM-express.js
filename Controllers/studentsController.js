const Validator = require("../Templates/Util/studentsValidator");
const student = require("../Models/studentModel");
const fs = require("fs");
const path = require("path");
const studentPath = path.join(path.dirname(process.mainModule.filename) , "data" , "Students.json");


const getAllstudents = (req , res)=>{
    res.set('Access-Control-Allow-Origin' , "*");
    student.fetchAllStudents((obj)=>{
        res.render("students.ejs", {std:obj})
    });
};

const getStudentById = (req,res)=>{
    let id = req.id;
    
    const std = student.fetchAllStudents((Students)=>{
        const std = Students.find((val)=>{
            return val.id == id;
        });
        if(std)
            res.json(std);
        else
            res.send("Not Found");
    });
}

const CreateNewStudent = (req , res)=>{
    let valid = Validator(req.body);
    if(valid){
    let std = new student(req.body.name);
    std.saveStudent();
    res.json(req.body);}
    else
        res.status(403).send("forbidden command");
}


const DeletingStudentById = (req, res) => {
    student.fetchAllStudents((students) => {
        const idx = students.findIndex((val) => val.id == req.params.id);
        if(idx != -1){
            let deletedSTD = students.splice(idx , 1);
            fs.writeFile(studentPath , JSON.stringify(students) , (err)=>{
                if(err){
                    res.status(500).send("Failed To Delete Student");
                }
                else{
                    res.status(200).send("One Element Deleted");
                }
            });
        }
        else{
            res.status(404).send("Cannot Find Student");
        }

    });
}


const UpdatingStudentById = (req, res) => {
    student.fetchAllStudents((students) => {
        const idx = students.findIndex((val) => val.id == req.params.id);
        if (idx !== -1) {
            // Update only the fields in the body
            for (let key in req.body) {
                students[idx][key] = req.body[key];
            }
            fs.writeFile(studentPath, JSON.stringify(students), (err) => {
                if (err) {
                    res.status(500).send("Failed to update student");
                } else {
                    res.json(students[idx]);
                }
            });
        }
        else {
            res.status(404).send("Student not found");
        }
    });
};



module.exports = {getAllstudents , getStudentById , CreateNewStudent ,DeletingStudentById , UpdatingStudentById};