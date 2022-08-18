let connectioQuery = require("../connaction")

exports.addProduct = (req, res) => {
    const {product_name,product_id,product_price} = req.body
    let query_data = `INSERT INTO Product_item(product_name,product_price) values ('${product_name}','${product_price}')`
    connectioQuery.query(query_data, (err, data) => {
        if (err) {
            res.json({
                code: 400,
                msg: "something went wrong"
            })
        } else {
            res.json({
                code: 200,
                msg: "product added sucessfully"
            })
        }
    })
}
