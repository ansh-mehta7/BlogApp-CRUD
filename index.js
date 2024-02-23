const express =require('express')
const app=express()
require("dotenv").config();
const port=process.env.PORT|| 3000

app.use(express.json())

const blog=require('./routes/blogs')
app.use("/api/v1",blog)


app.get("/",(req,res)=>{
    res.send("this is the homepage ")
    
})
const dbConnect=require('./config/db')
dbConnect();
app.listen(3000,()=>{
    console.log(`app is running successfully at port ${port}`)

})
