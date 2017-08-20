const express = require("express");
const productCtrl= require("./../controllers/productCtrl.js");
const bodyParser= require("body-parser");

let productRouter= express.Router();
var jsonParser= bodyParser.json();

productRouter.get("/",productCtrl.get);
productRouter.get("/:id",productCtrl.getTask)
productRouter.post("/",jsonParser,productCtrl.post);
productRouter.put("/:id",jsonParser,productCtrl.put);
productRouter.delete("/:id",jsonParser,productCtrl.delete);

module.exports=productRouter;
