const express = require('express')
const router = express.Router()

//middleware
const auth = function (req ,res , next){
    console.log("I am inside auth wlla middleware");

    //tmahari sahayta ke  liye ek dummy user add kr rha hu

    req.user = { userId : 1 , role : "student"};

    if(req.user){
        //if a valid user is there in req , then proceed ti next middleware
        next();
    }
    else {
        //if not a valid user
        res.json({
            success:false,
            message:"not a valid user",
        })
    }
}

const isStudent = function (req , res , next){
    console.log("I am inside student wla middleware");

    if (req.user.role === "student"){
        next();
    } else {
        res.json({
            success:false,
            message : " Access denied this route is only for students"
        })
    }
}

const isAdmin = function (req , res , next){
    console.log("I am inside isAdmin wala middleware");

    if (req.user.role === "admin"){
        next();
    } else {
        res.json({
            success:false,
            message : " Access denied : this route is only for admin"
        })
    }
}

router.get("/student", auth ,isStudent , (req , res)=>{
    console.log("I am inside student route");
    res.send ("student specific page");
})

router.get("/admin", auth , isAdmin , (req , res)=>{
    console.log("only access for admin");
    res.send("access to admin ")
})

module.exports= router