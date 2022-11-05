const express =require('express');
const app =express();

//importing routes
const authRoute = require('./Routes/auth');

//creating middleware
app.use('/api/user',authRoute);

app.listen(3333,()=>{
    console.log("Server Started");

});
