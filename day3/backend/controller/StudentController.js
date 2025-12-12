const student=require('../model/studentmodel')
const addStudent=async(req,res)=>{
    try{
    const newstd =new student({
        name:req.body.name,
        email:req.body.email,
        type:req.body.type,
        phone:req.body.phone,
        gender:req.body.gender,
        branch:req.body.branch,
        rollNo:req.body.rollNo
    });
    await newstd.save();

    res.status(201).json({message:"User added"},newstd);
}catch(err){
        res.status(409).json({error:err.message});
    }

};
const getAllStudents=async(req,res)=>{
try{
    const students=await student.find();
    res.status(200).json(students);
}
catch(error){
res.status(500).json({message:"unable to fetch details"});
}
}
const getStudentById=async(req, res)=>{
    try{
        const student=await student.findById(req.params.id);
        res.status(200).json(student);
    }
    catch(error){
    res.status(500).json({message:"unable to fetch details"});
    }
    }
const updateStudentById=async(req, res)=>{
    try{
        const updatedstudent=await student.findByIdAndUpdate(
            req.params.id,
            { $set:{name:req.body.name,email:req.body.email,type:req.body.type,phone:req.body.phone,gender:req.body.gender,branch:req.body.branch,rollNo:req.body.rollNo}},
            {new:true}
        );
        res.status(200).json(updatedstudent);
    }
    catch(error){
    res.status(500).json({message:"unable to fetch details"});
    }
}

const deleteStudentById=async(req, res)=>{
    try{
        const deletedstudent=await student.findByIdAndDelete(req.params.id);
        res.status(200).json(deletedstudent);
    }
    catch(error){
    res.status(500).json({message:"unable to fetch details"});
    }
}

module.exports={addStudent,getAllStudents,getStudentById,updateStudentById,deleteStudentById};