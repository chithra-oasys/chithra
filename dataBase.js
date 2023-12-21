const bodyParser=require('body-parser');
const express=require('express');
const mysql=require('mysql2');
const app=express();
const port=3000;

app.use(bodyParser.json());
const db=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database:'oasys_db',
    port:3306
});

db.connect((err)=>{
    if(err){
    console.err("error showing while db connection "+err.stack);
}
else{
    console.log("db successfully connected");
}
});

//post or create method 
app.post("/add",(req,res)=>{
    const{fieldName,members,experience}=req.body;
    db.query("Insert into oasys(fieldName,members,experience) values(?,?,?)",[fieldName,members,experience],
    (error,result,fields)=>{
        if(error){
     console.error("error occured while inserting data",error.stack);
     res.status(500).send("error occured while saving data");
        }
        else{
            res.status(200).send("successfully saved");
        }
    });
});


//read or get method 
app.get("/get",(req,res)=>{
    db.query("select * from oasys",(error,results,fields)=>{
        if(error){
        console.error("error fetching data",error.stack);
        res.status(500).send("error fetching data");
        }
        else{
            res.status(200).json(results);
        }
    });
});

//put or update method 
app.put("/update/:id", (req, res) => {
    const { fieldName, members, experience } = req.body;
    const id = req.params.id;
    db.query("UPDATE oasys SET fieldName=?, members=?, experience=? WHERE id=?", [fieldName, members, experience, id], (error, results, fields) => {
        if (error) {
            console.error("Error updating data:", error.stack);
            res.status(500).send("Error updating data");
        } else {
            res.status(200).send("Successfully updated");
        }
    });
});


//deleting method 

app.delete("/delete/:id",(req,res)=>{
    const memId=req.params.id;
    db.query("delete from oasys where id=?",[memId],(error,results,fields)=>{
        if(error){
            console.error("error deleting data",error.stack);
            res.status(500).send("error deleting data");   
        }
        else{
            res.status(200).send("successfully deleted");
        }
    });
});

app.listen(port,()=>{
    console.log(`application connected on port ${port}`);
});