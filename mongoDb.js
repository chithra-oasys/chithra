const express=require('express');
const bodyParser=require('body-parser');
const db=require('mongoose');
const app=express();
app.use(bodyParser.json());

db.connect('mongodb://localhost:27017/oasys_db',{
    family:4,
});

db.connection.on('error',console.error.bind(console,"error throw while connecting db"));
db.connection.once('open',()=>{
 console.log("db connected");
});

const oasysIT=db.model('oasysIT',new db.Schema({
    dep:String,
    menbers:Number,
    post:String,
    type:String
}));

//post method 

app.post("/oasysIT/add",async(req,res)=>{
    await new oasysIT(req.body).save();
    res.send("successfully saved");
});

//get method 
app.get("/oasysIT/get",async(req,res)=>{
    const value = await oasysIT.find();
    res.send(value)
})

//getById method
app.get("/oasysIT/get:id",async(req,res)=>{
    const id = req.params.id;
    const value = await oasysIT.getByid(id);
    res.send(value);

})

//delete method
app.delete("/oasysIT/delete/:id",async(req,res)=>{
    await oasysIT.deleteOne({_id: id});
    res.send("delete sucessfully");
})

//update method
app.put("/oasysIT/update/:id",async(req,res)=>{
    const id = req.params.id;
    await oasysIT.updateOne({_id :id},(req,res));
    res.send("updates sucessfully");
})


app.listen(3000);