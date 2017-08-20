const express = require("express");

let defaultRouter= express.Router();

//httpGet

defaultRouter.get('/', function(req,res){
    res.send("Express API");
});

module.exports= defaultRouter;