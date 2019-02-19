var db = require("../util/db");

function getAll(req, res) {
  var query = "SELECT * FROM usuario";
  db.query(query, function(err, result, fields) {
    if (err) {
      console.log(err);
      res.status(500).send("Oops! Hubo un error. Reintente mas tarde");
      return;
    }

    res.status(200).send(JSON.stringify(result));
  });
}

function getById(req, res) {
  res.status(200).send("Obtener un usuario por el id");
}

function post(req, res) {
  res.status(200).send("Agrega un nuevo usuario");
}

function put(req, res) {
  res.status(200).send("Actualiza usuario");
}

function deleteById(req, res) {
  res.status(200).send("Borra usuario");
}

module.exports = {
  getAll: getAll,
  getById: getById,
  post: post,
  put: put,
  deleteById: deleteById
};

//función del services: todo lo que es consultivo.
