const mongoose = require("mongoose");
const studentSchema = new mongoose.Schema({
    name:{ type:String,required:true },
    email:{type:String,required:true,unique:true},
    type:{type:String ,required:true},
    phone:{type:String,required:true},
    gender:{type:String,required:true},
    rollNo:{type:String,required:true,unique:true},
    branch:{type:String,required:true},},
    {
        timestamps:true,
    })
    module.exports=mongoose.model('student',studentSchema);