const express=require("express");
const app=express();
const jwt=require('jsonwebtoken');
require('dotenv').config();
app.use(express.json());
const posts=[
    {
   username:"chithra",
   title:"chithra1"
    },
    {
        username:"shiva",
        title:"shiva@1"
    }
]

app.get("/get",authenticateToken,(req,res)=>{
    res.json(posts.filter(post=>post.username===req.user.name));
});
app.post("/login",(req,res)=>{
    const username=req.body.username;
    const user={name:username}
    const accesstoken=jwt.sign(user,process.env.ACCESS_TOKEN_SECRET);
    res.json({accesstoken:accesstoken});
});

function authenticateToken(req,res,next){
    const authHeader=req.headers['authorization'];
    const token=authHeader && authHeader.split(' ')[1];
    if(token==null)return res.sendstatus(401);
    jwt.verify(token,process.env.ACCESS_TOKEN_SECRET,(err,user)=>{
        if(err)return  res.sendStatus(403);
        req.user=user;
        next();
        });
}

app.listen(4000);