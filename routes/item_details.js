let { addProduct} = require("../controller/item_details");
let { tokenCheck } = require("../helper")
var express = require('express');
var router = express.Router();

router.post("/add-product",  addProduct);



module.exports = router