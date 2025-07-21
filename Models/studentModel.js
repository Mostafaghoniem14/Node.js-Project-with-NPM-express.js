const fs = require("fs");
const path = require("path");
const studentPath = path.join(path.dirname(process.mainModule.filename) , "data" , "Students.json");
module.exports = class Student {
    constructor(name){
        this.name = name;
    };

    saveStudent(){
        let students = [];
        //Reading from file:
        fs.readFile(studentPath , (err , info)=>{
            if(!err){
                students=JSON.parse(info);
        //Updating data:
                this.id = students.length + 1;
                students.push(this);
        //Writting into file:
                fs.writeFile(studentPath , JSON.stringify(students) , (err)=>{
                    console.log("Error Occurred");
                })}
        })
    };

    static fetchAllStudents(callback){
        fs.readFile(studentPath , (err , inf)=>{
            if(!err){
                callback(JSON.parse(inf));
            }
            else{
                callback([]);
            }
        })
    };

    static getElementByid(data){
        data = fs.readFile(studentPath , (err , inf)=>{
            if(!err){
                return JSON.parse(inf);
            }
            else
                return [];
        })
        return data;
    };

};