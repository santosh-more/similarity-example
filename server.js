//packages
var express=require("express");
var bodyparser=require("body-parser");
var mongoose=require("mongoose");

//files
var Profiles=require("./models/information");

var app=express();
port=process.env.PORT || 8080;

//use
app.use(bodyparser());
app.use(express.static(__dirname+"/public"));
app.use(express.static(__dirname+"/uploads"));

//methods
app.use("/*",function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Method", "GET,POST,PUT,DELETE,OPTION");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
//routes
app.all("/*",require("./routes/route"));
// app.all("/",function(req,res){
// 	res.status(200).json({status:200,message:"Hey is works"});
// });
//mongoose
mongoose.connect("mongodb://localhost/meanProfiles");
mongoose.connection.on("connected",function() {
	console.log("Connected to mongoDB");
	app.listen(port,function(){
	console.log("Server listening on the port" +port);
});
});