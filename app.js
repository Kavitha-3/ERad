require ('dotenv').config();
const { json,urlencoded } = require('express');
const express=require("express");
const app=express();
const{DBConnection}=require("./config/database");
const {router}=require("./employee/employee.route");

DBConnection().then((connection)=>{
    console.log("DB Connected to the port::",process.env.DB_PORT);
    }).catch((err)=>{
        console.log(err);
    });
app.use(json());
app.use(urlencoded({extended:true}));

app.use("/employee",router);

module.exports={app}