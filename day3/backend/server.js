const express=require('express')
const env=require('dotenv').config()

const connection=require('./config/db')
const app=express()
connection()
const port=process.env.PORT;
app.use(express.json())


const studentRoutes=require("./routes/Studentroute")


app.use("/api",studentRoutes)
app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
})
