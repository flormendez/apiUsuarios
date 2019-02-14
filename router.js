var express = require('express');

var route = express.Router();

//Usuarios

router.get("/usuarios", function(req, res) {
    res.status(200).send("Todos los usuarios");
  });
  
  router.get("/usuarios/:id", function(req, res) {
    res.status(200).send("Obtener un usuario por el id");
  });
  
  router.post("/usuarios", function(req, res) {
    res.status(200).send("Agrega un nuevo usuario");
  });
  
  router.put("/usuarios/:id", function(req, res) {
    res.status(200).send("Agrega un nuevo usuario");
  });
  
  router.delete("/usuarios/id", function(req, res) {
    res.status(200).send("Agrega un nuevo usuario");
  });
  
  module.exports = router;
  