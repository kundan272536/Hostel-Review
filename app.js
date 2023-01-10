const express=require("express");
const bodyparser=require("body-parser");
const ejs=require("ejs");
const mongoose=require("mongoose");
const app=express();
app.use(express.static("public"));
app.set('view engine','ejs');
app.use(bodyparser.urlencoded({
    extended:true
}));
// mongoose.set('strictQuery', true);
// mongoose.connect("mongodb://localhost:27017/hostelDb",{useNewUrlParser:true, useUnifiedTopology: true});

// const userSchema={
//     email:String,
//     password:String
// };
//  const Sudent=new mongoose.model("Student",userSchema);
app.get("/",function(req,res){
    res.render("home");
});
app.get("/login",function(req,res){
    res.render("login");
});
app.get("/register",function(req,res){
    res.render("register");
});
app.get("/home",function(req,res){
    res.render("home");
});
app.get("/about",function(req,res){
    res.render("about");
});
app.get("/hostels",function(req,res){
    res.render("hostels");
});
app.get("/boys-hostels",function(req,res){
    res.render("boys-hostels");
});
app.get("/girls-hostels",function(req,res){
    res.render("girls-hostels");
})
app.get("/contact",function(req,res){
    res.render("contact");
});

app.listen(3000,function(){ 
    console.log("Server started on port no 3000");
});  