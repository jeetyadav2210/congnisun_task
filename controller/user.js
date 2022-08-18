let Connection = require("../connaction")
const jwt = require("jsonwebtoken");

exports.registration = (req, res) => {
    const { username, email, password } = req.body
    let sqlq = 'SELECT* FROM Users WHERE email=?'
    Connection.query(sqlq, email, (response, data) => {
        if (data.length == 0) {
            Connection.query(`INSERT INTO Users(username,email,password) VALUES ('${username}','${email}','${password}')`, (row) => {
                if (row) {
                    res.json({

                        err: row,
                        code: 400
                    })
                } else {
                    res.json({ code: 200, msg: "registration sucessfull" })
                }
            })
        } else {
            res.send("email alredy exit please login")
        }
    })
}



exports.login = (req, res) => {
    const { email, password } = req.body
    var ram = 'SELECT* FROM Users WHERE email=?'
    Connection.query(ram, email, (data, row) => {
        if (row.length != 0) {
            if (row[0].password == password) {
                let id = row[0].email
                jwt.sign({ id }, "jeet", { expiresIn: '5h' }, (err, token) => {
                res.json({
                    code: 200,
                    msg: "login succefully",
                    token:token
                })
            })
            } else {
                res.json({
                    code: 400,
                    msg: "password not match"
                })
            }
        } else {
            res.json({
                code: 400,
                msg: "email not found"
            })

        }
    })
}
