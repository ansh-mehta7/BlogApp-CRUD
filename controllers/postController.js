const Post=require("../models/post")
exports.createPost=async(req,res)=>{
    try{
          const {title,body}= req.body;
          const post=new Post({
            title,body,
          })
          const savedPost=await post.save();
          res.status(200).json({
            post:savedPost,
          })
    }

    catch(error){
            return res.status(400).json({
                error:"error in creating a post",
            })
    }
}
exports.getAllPost=async(req,res)=>{
     try{
            const posts=await Post.find().populate("comments")
            .exec();
            res.status(200).json({
                posts,
            })
     }
     catch(error){
        return res.status(400).json({
            error:"error in creating a post",
        })
     }
}
 