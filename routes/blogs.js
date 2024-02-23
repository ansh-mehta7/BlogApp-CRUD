const express=require('express')
const router=express.Router()
const {commentroute}= require("../controllers/commentController")

router.post("/comments/create",commentroute);
module.exports=router;

