let connectioQuery = require("../connaction")

exports.addProductIntoCart = (req, res) => {
    const { product_name, product_id, user_id, product_price } = req.body
    let query_data = `INSERT INTO shopping_Cart(product_name,product_id,user_id,product_price) values ('${product_name}','${product_id}','${user_id}','${product_price}')`
    connectioQuery.query(query_data, (err, data) => {
        if (err) {
            res.json({
                code: 400,
                msg: "something went wrong"
            })
        } else {
            res.json({
                code: 200,
                msg: "product added to cart sucessfully"
            })
        }
    })
}


exports.CartItems = (req, res) => {
    const { user_id } = req.params
    let query_data = `SELECT *FROM shopping_Cart INNER JOIN Product_item ON shopping_Cart.product_id = Product_item.product_id WHERE shopping_Cart.user_id=?`
    connectioQuery.query(query_data, user_id, async(err, data) => {
        if (err) {
            res.json({
                code: 400,
                msg: "something went wrong"
            })
        } else {
            if (data.length > 0) {
                let data1=[]
                let total_count =0
               await data.map(item => {
                total_count+=item.product_price
                    if (data1.find(object => {
                        if (object.product_id === item.product_id) {
                            object.same_product_count++;
                            object.same_product_total_price+=object.product_price;
                            return true;
                        } else {
                            return false;
                        }
                    })) {
                    } else {
                        item.same_product_count = 1;
                        item.same_product_total_price = item.product_price;
                        data1.push(item);
                    }
                })
                console.log(data,data1);
                res.json({
                    code: 200,
                    msg: data1,
                    totalProduct:data.length,
                    cartTotalPrice:total_count
                })
            } else {
                res.json({
                    code: 200,
                    msg: data
                })
            }
        }
    })
}


exports.emptyCart = (req, res) => {
    const { user_id } = req.params
    let query_data = `DELETE FROM shopping_Cart where user_id=?`
    connectioQuery.query(query_data, user_id,(err, data) => {
        if (err) {
            res.json({
                code: 400,
                msg: "something went wrong"
            })
        } else {
            res.json({
                code: 200,
                msg: "cart empty sucessfully"
            })
        }
    })
};

exports.remove_product=(req,res)=>{
    const { user_id,product_id } = req.body
    let query_data = `DELETE FROM shopping_Cart where user_id=? AND product_id=?`
    connectioQuery.query(query_data, [user_id,product_id],(err, data) => {
        if (err) {
            res.json({
                code: 400,
                msg: "something went wrong"
            })
        } else {
            res.json({
                code: 200,
                msg: "product remove from cart sucessfully"
            })
        }
    })
}