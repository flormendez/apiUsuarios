var mysql = require('mysql');

var connection = mysql.createConnection({   //crea solamente una conexion a la base de datos. create pull es otro metodo, crea otra.
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "usuarios"
  });
  
  module.exports = connection;


  //conexión a la base de datos, la conexión es lo que nos permite visualizar, editar, etc.