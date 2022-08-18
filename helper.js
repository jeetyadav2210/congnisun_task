const jwt = require("jsonwebtoken");


exports.tokenCheck = (req, res, next) => {
    var id = req.params.id
    const bearerHeader = req.headers["authorization"];

    if (bearerHeader != undefined) {
        const s = bearerHeader.split(" ");
        let token = s[1]
        req.token = token

        jwt.verify(req.token, "jeet", (err, data) => {
            if (err) {
                res.json({
                    code: 400,
                    msg: err
                })
            } else {
                if (id == data.id) {
                    next()
                } else {
                    res.json({
                        code: 400,
                        msg: "authentication failled",
                    })
                }
            }
        })
    } else {
        res.json({
            code: 400,
            msg: "token not found"
        })
    }
}
