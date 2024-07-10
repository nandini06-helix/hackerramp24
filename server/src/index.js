const express=require('express');
const app=express();
const cors=require('cors');
const mongoose=require('mongoose');

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb+srv://thnandini04:helix664@cluster0.8xfxsay.mongodb.net/Cluster0?retryWrites=true&w=majority&appName=Cluster0")
app.listen(3001,()=>{
    try{
        console.log("server is connected...");
    }
    catch(err){
        console.log("could not connect to server");
    }
})


