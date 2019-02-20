var mysql = require("mysql");
var dotenv = require("dotenv");
var util = require("util");

dotenv.config();

var connection = mysql.createConnection({
  //crea solamente una conexion a la base de datos. create pull es otro metodo, crea otra.

  host: process.env.DBHOST,
  port: process.env.DBPORT,
  user: process.env.DBUSER,
  password: process.env.DBPASSWORD,
  database: process.env.DBSCHEMA
});

connection.query = util.promisify(connection.query); //para mysql. A ese callback (query) le agrego el lenguaje de promesa

module.exports = connection;

//conexión a la base de datos, la conexión es lo que nos permite visualizar, editar, etc.

//se separa en otro archivo para reutilizarlo en otro archivo.

//problema está hardcodeado: dejar en duro un valor o dato. Hardcodear es una mala práctica
