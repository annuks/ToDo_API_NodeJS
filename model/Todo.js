const mongoose= require('mongoose');

const todoSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
        max:1000
    },
    date:{
        type:Date,
        default:Date.now
    },
});
module.exports=mongoose.model('Todo',todoSchema);