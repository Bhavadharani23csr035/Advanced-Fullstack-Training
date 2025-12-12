const mongoose = require("mongoose");
const staffSchema = new mongoose.Schema({
    name:{ type:String,required:true },
    email:{type:String,required:true,unique:true},
    type:{type:String ,required:true},
    phone:{type:String,required:true},
    gender:{type:String,required:true},
    password:{type:String,required:true},
    dob:{type:Date,required:true},
    qualification:{type:String,required:true},
    experience:{type:Number,required:true},
    salary:{type:Number,required:true}, 
    address:{type:String,required:true},
    city:{type:String,required:true},       
    state:{type:String,required:true},          
    pincode:{type:Number,required:true}
},
{
    timestamps:true,
});        



    module.exports=mongoose.model('staff',staffSchema);