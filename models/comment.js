const mongoose=require('mongoose')
const commentSchema= new mongoose.Schema(
    {
        post:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"Post" //  giving refrence to post model  
        },
        user:{
            type:String,
            required:true,

        },
        body:{
            type:String,
            required:true
        }
    }
);
// exports 
module.exports=mongoose.model("Comment",commentSchema)
