var express = require("express");

var router = express.Router();

//Usuarios

router.get("/", function(req, res) {
  res.status(200).send("Todos los clientes");
});

router.get("/:id", function(req, res) {
  res.status(200).send("Obtener un c por el id");
});

router.post("/", function(req, res) {
  res.status(200).send("Agrega un nuevo usuario");
});

router.put("/:id", function(req, res) {
  res.status(200).send("Agrega un nuevo usuario");
});

router.delete("/id", function(req, res) {
  res.status(200).send("Agrega un nuevo usuario");
});

module.exports = router;
