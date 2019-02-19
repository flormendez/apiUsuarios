var service = require("../services/users");

function controller() {
  this.getAll = function(req, res) {
    service.getAll(req, res);
  };

  this.getById = function(req, res) {
    var id = req.body.id;

    if (!id) {
      res.status(404).send("Usuario no encontrado");
      return;
    }
    service.getById(id);
  };

  this.post = function(req, res) {
    service.post(req.body);
  };

  this.put = function(req, res) {
    service.put(req.body);
  };

  this.deleteById = function(req, res) {
    var id = req.body.id;

    if (!id) {
      res.status(404).send("Usuario no encontrado");
      return;
    }
    service.getById(id);
  };
}
module.exports = controller;
