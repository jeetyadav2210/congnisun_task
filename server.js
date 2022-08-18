var express=require('express')
var connaction=require("./connaction")
var app=express()
app.use(express.json())




app.get("/helloworld",(req,res)=>{
    res.send("helloworld")
})


let users = require("./routes/user");
let products = require("./routes/item_details")
let cart = require("./routes/cart")


app.use("/api",users);
app.use("/api",products);
app.use("/api",cart)


app.listen(7050,()=>{
    console.log("server is working now");
})