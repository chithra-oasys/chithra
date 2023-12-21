const fs=require('fs');
const writableStream=fs.createWriteStream('read.txt');
const readableStream=fs.createReadStream('read.txt');
const data="chithra";
const values="shiva";

writableStream.write(data+values);
readableStream.on('data',function(value){
    console.log(value.toString());
});