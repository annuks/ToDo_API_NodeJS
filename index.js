const express = require('express');
const app =express();
const port =7777;
const bodyParser = require('body-parser');
const mongoose = require('')

app.use(bodyParser.json());

app.get('/',(req,res)=>{
    res.send("Home Page");
});


app.listen(port,function(err){
    if (err){
        console.log("Error while running Server");
        return;
    }
    else{
        console.log("Server is up and Running on Port:",port);
    }
})