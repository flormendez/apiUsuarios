//Configuración del servidor

var app = require("./app");

var port = app.get("port"); //obtengo el puerto

app.use(function(err, req, res, next) {
  if (err) {
    res.status(500).send("Oops! Ha ocurrido un error. Intente más tarde");
  }
});

app.listen(port, function() {
  console.log("Running app on port" + port);
});

//el listen va aca porque es algo del servidor, no algo de la app
