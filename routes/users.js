var express = require("express");
var controller = require("../controller/usersController");

var ctl = new controller();
var router = express.Router();
//Usuarios

router.get("/", ctl.getAll);

router.get("/:id", ctl.getById);

router.post("/", ctl.post);

router.put("/:id", ctl.put);

router.delete("/id", ctl.deleteById);

module.exports = router;
