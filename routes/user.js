let { registration,login} = require("../controller/user");
var express = require('express');
var router = express.Router();

router.post("/registration", registration);
router.post("/user-login", login)

module.exports = router