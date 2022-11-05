const router = require('express').Router();


router.post('/create-todo',(req,res)=>{
    res.send("Create-Todo List");
})



module.exports= router;