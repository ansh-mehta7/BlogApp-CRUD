// import the models 
const Post =require("../models/post")
const Like=require("../models/like")

exports.likePost=async (req,res)=>{
    try{
            const {post,user}=req.body;
            const like=new Like({
                post,user
            })
            const savedLike=await like.save();
            const updatedPost=await Post.findByIdAndUpdate(post,
                {$push : {likes:savedLike._id}},{new:true})
                          .populate("likes")
                          .exec(); 
            res.json({
                post:updatedPost
            })

    }
    catch(error){
        res.status(500).json({
            post:error.message,
         });

    }
}
exports.unlikePost=async (req,res)=>{
   try{
    const {post,like}=req.body;
    const deletedLike=await Like.findOneAndDelete({
       post:post,
       _id:like
    })
    const updatedPost=await Post.findByIdAndUpdate(post,{$pull:{likes:deletedLike._id } },{
       new:true
    })
    res.json({
       post:updatedPost
    })
   }
     catch(error){
        res.status(400).json({
            error:("error in unkiking the post ")
         });

    }
}