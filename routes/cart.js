let { addProductIntoCart,CartItems,emptyCart,remove_product} = require("../controller/cart");
let { tokenCheck } = require("../helper")
var express = require('express');
var router = express.Router();

router.post("/add-to-cart",  addProductIntoCart);
router.get("/cart-details/:user_id",CartItems)
router.delete("/empty-cart/:user_id",emptyCart)
router.delete("/remove-product",remove_product)

module.exports = router