const express =require('express');
const app =express();
const port =3333;
const mongoose= require('mongoose');
const dotenv  = require('dotenv');
const bodyParser= require('body-parser');
dotenv.config();

//importing routes
const authRoute = require('./Routes/auth');

//creating middleware

mongoose.connect(process.env.DB,()=>{
    console.log("Connected to MongoDB::")
})

app.use(express.urlencoded());


app.use('/api/user',authRoute);
app.use(express.json());

app.listen(port,function (err){
    if (err)
    {
    console.log("Error in Server ");
    return;
    }
    else{
        console.log("Server is up and Running on Port:",port);

    }

});
