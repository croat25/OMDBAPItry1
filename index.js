var express=require("express");
var app = express();
var request=require("request");
app.set("view engine","ejs");
 app.get("/",function(req,res){
  res.render("search"); 
 });
console.log("just to change the code");

app.get("/results",function(req,res){
    var input=req.query.search;
    var url = "http://omdbapi.com/?s=";
    request(url+input,function(error,response,body){
       if(!error && response.statusCode ===200){
           var data=JSON.parse(body);
           res.render("results",{data:data});
       } 
    });
});

app.listen(process.env.PORT||3000,function(){
   console.log("movie app has started"); 
});