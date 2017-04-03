var express=require("express");
var router=express.Router();
var multer=require("multer");
var passport=require("passport");
var user=require("../controller/controller");
//routes
router.get("/similarity",_similarity.similarity);
module.exports=router;