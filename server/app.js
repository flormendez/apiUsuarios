//Configuración de la aplicación

var express = require("express");
var bodyParser = require("body-parser");
var dotenv = require("dotenv");
var router = require("./router"); //si es un archivo propio, no un modulo como express, dotenv y eso va con punto y barra.

dotenv.config();

var app = express();

app.set("port", process.env.PORT || 3000); //seteo el puerto

app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

app.use(bodyParser.json());

app.use("/", router);

module.exports = app;
