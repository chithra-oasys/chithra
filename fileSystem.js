const fs=require("fs");
//write on the file
fs.writeFile("./file.text","welcome",(err)=>{
    if(err)throw err;
    console.log("read works");
});
 //read the file
 fs.readFile("./file.text",(err,data)=>{
    if(err)throw err;
    console.log(data.toString());
 });

 //append the file
 fs.appendFile("./file.text"," good will",(err)=>{
    if(err)throw err;
    console.log("appended successfully");
 });
