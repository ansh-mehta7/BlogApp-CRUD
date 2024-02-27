 // import the model 
 const Post =require('../models/post')
 const Comment=require('../models/comment')

 exports.createComment=async (req,res)=>{
      try{
           const {post,user,body}= req.body;
           const comment=new Comment({
               post,body,user
           });
           const savedComment=await comment.save();
           // this comment we will add in post comment array 

           const updatedPost=await Post.findByIdAndUpdate(post,
               {$push : {comments:savedComment._id}},{new:true})
                         .populate("comments")
                         .exec(); 
               res.status(200).json({
                    post:updatedPost
               }); 

      }
      catch(error){
       res.status(500).json({
          post:error.message,
       });
      }
 }