require('dotenv').config();
const express = require('express');
const app=express();
const port =3000;
const db = require('./config/mongoose');

const passport = require("passport");
const passportJWT =require ("./config/passport-jwt-strategy");


app.use(express.urlencoded());
app.use(express.json());

//Setting Route folder to use routes
app.use(passport.initialize());


const bodyparser = require('body-parser');


app.use(express.urlencoded());
app.use(bodyparser.json());
//importing routes


app.use('/',require('./routes'));

app.listen(port,function (err){
    if (err)
    {
    console.log("Error while Running  Server ");
    return;
    }
    else{
        console.log("Server is up and Running on Port:",port);

    }

});
