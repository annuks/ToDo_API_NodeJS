const mongoose= require('mongoose');

const userSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true,
        max:100
    },
    password:{
        type:String,
        required:true,
        max:1024
    },
    date:{
        type:Date,
        default:Date.now
    },
});
module.exports=mongoose.model('User',userSchema);