const express = require("express");
const bodyparser = require("body-parser");
const mysql = require('mysql2');
const bcrypt = require("bcrypt");
const app = express();
app.use(bodyparser.json());
const port=3000;
const db = mysql.createConnection({
    host:"localhost",
    user:'root',
    password:"root",
    database:"oasys_dbs",
    port:3306
});
db.connect((error)=>{
    if(error){
    console.error("not connect in database")}
    else{
        console.log("connect to database")
    }
})
app.post("/post",async(req,res)=>{
    const{name,password}=req.body;
    const hashpassword =await bcrypt.hash(password,10)
    db.query("insert into table1 (name,password) value(? ,?)",[name,hashpassword],(error,results,Fields)=>{
        if(error){
            console.error("error showm in database",error.stack)
            res.send("error in database").status(200)
        }else{
            res.send("saved in database").status(500)
        }
    })
})
app.get("/get",(req,res)=>{
    db.query("select * from table1",(error,result,fields)=>{
        if(error){
            console.error("error in database",error.stack);
            res.send("error statement").status(200);

        }else{
            res.send("save sucesfully").status(result)
        }
    })
})
app.listen(port,()=>{
    console.log("port", port);})