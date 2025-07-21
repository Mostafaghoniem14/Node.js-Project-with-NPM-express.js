const express = require("express");
const app = express();
const studentsRouter = require("./Routes/students");
const port = process.env.PORT||3000;
const path = require("path");
const helmet = require("helmet");
const cookieparser = require("cookie-parser");
const Logging = require("./Middlewares/Logging");


//Using Middlewares :
app.use(express.urlencoded({extended:true}));                          //"Built-in Middleware"
app.use(express.json());                                              //"Built-in Middleware"
app.use(express.static("Public"));                                   //"Built-in Middleware"
app.use(Logging);                                                   //"CUSTOM Middleware"
app.use(cookieparser());                                           //"Third-Party Middleware"
app.use(helmet());
app.use("/api/students" , studentsRouter);


//Set Application Setting for Templating Engines :
app.set("template engine" , "ejs");


// "eldata ray7a mn el JSON object" :
app.get("/" ,
    //Route Handler Middleware :
    (req , res , nxt)=>{
        console.log("The first Middleware Stage #1");
        nxt();
    }
    ,(req , res)=>{
    res.sendFile(path.join(__dirname , "/main.html"));
})


//Sending Data from client to sever Via HTTP REQUEST BODY "eldata ray7a mn el form" :
app.post("/welcome.html" , (req,res)=>{
    //CREATING & ENCODING COOKIES :
    res.cookie("username" ,Buffer.from(req.body.fnm + req.body.lnm).toString("base64"));
    //Setting HttpOnly parameter :
    res.cookie("userage" , 25 ,{httpOnly : true} );
    console.log(req.body);
    res.send(`thanks ${req.body.fnm} ${req.body.lnm} for sending required data :)`);
})



//Sending Data from client to sever Via QUERY STRING  "eldata ray7a mn el form" :
app.get("/welcome.html" , (req , res)=>{
    console.log(req.query);
    console.log(req.query.fnm);
    console.log(req.query.lnm);
    res.sendFile(path.join(__dirname , "welcome.html"))
})



//EX For Using Third-party Middleware "cookie-parser" :
app.get("/haha" , (req,res)=>{
    console.log(Buffer.from(req.cookies.username , 'base64').toString());
    console.log(req.cookies.userage);
    res.sendStatus(200);
})

app.listen(port , ()=>{
    console.log(`Listening on ${port} ...!!`);
})