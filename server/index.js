const express= require("express");
const bodyParser= require("body-parser");
const config= require("./../config/config.json");
const defaultRouter= require("./routes/defaultRouter");
const productRouter= require("./routes/productRouter");

let app= express();

var urlencodedParser = bodyParser.urlencoded({ extended: false })
var jsonParser= bodyParser.json();

let port= process.env.port || 4000;//config.config.serverPort;

app.listen(port,function(){
    console.log("Server is running on Port:"+port);
});

app.get("/",function(req,res){
    res.send("Welcome To Task Manager!");        
});

app.post("/",jsonParser,function(req,res){
    console.log(req.body)
    console.log("Created!");
    res.send("Created!");
})
//Public Routes
app.use("/home",defaultRouter);


//Private Routes

app.use('/product',productRouter);