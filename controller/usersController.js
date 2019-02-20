var service = require("../services/users");

var srv = new service();

function Controller() {
  this.getAll = async (req, res) => {
    //siempre que pongo un async entiendo que la funcion retorna una promesa
    var result = await srv.getAll();
    res.status(200).send(JSON.stringify(result));
  };

  this.getById = (req, res) => {
    var id = req.body.id;

    if (!id) {
      res.status(404).send("Usuario no encontrado");
      return;
    }
    service.getById(id);
  };

  this.post = (req, res) => {
    srv.post(req.body);
  };

  this.put = (req, res) => {
    srv.put(req.body);
  };

  this.deleteById = (req, res) => {
    var id = req.body.id;

    if (!id) {
      res.status(404).send("Usuario no encontrado");
      return;
    }
    srv.getById(id);
  };
}
module.exports = Controller;
