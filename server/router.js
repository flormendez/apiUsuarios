var express = require("express");

var router = express.Router();

var userRouter = require("../routes/users");
var clientsRouter = require("../routes/clients");

router.use("/users", userRouter);
router.use("/clients", clientsRouter);

module.exports = router;
