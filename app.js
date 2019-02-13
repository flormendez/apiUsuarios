var express = require("express");
var bodyParser = require("body-parser");
var dotenv = require("dotenv");

dotenv.config();

var app = express();

app.set("port", process.env.PORT || 3000); //seteo el puerto

app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

app.use(bodyParser.json());

//Usuarios

app.get("/usuarios", function(req, res) {
  res.status(200).send("Todos los usuarios");
});

app.get("/usuarios/:id", function(req, res) {
  res.status(200).send("Obtener un usuario por el id");
});

app.post("/usuarios", function(req, res) {
  res.status(200).send("Agrega un nuevo usuario");
});

app.put("/usuarios/:id", function(req, res) {
  res.status(200).send("Agrega un nuevo usuario");
});

app.delete("/usuarios/id", function(req, res) {
  res.status(200).send("Agrega un nuevo usuario");
});

module.exports = app;
