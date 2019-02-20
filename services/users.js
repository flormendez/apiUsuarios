var db = require("../util/db");

function Service() {
  this.getAll = async (req, res) => {
    //declaramos que una función va a ser async para poder usar el await que va a ser la promesa.
    var query = "SELECT * FROM usuario";
    var result = await db.query(query);
    return result;
  };
  //   db.query(query, function(err, result, fields) {
  //     if (err) {
  //       console.log(err);
  //       res.status(500).send("Oops! Hubo un error. Reintente mas tarde");
  //       return;
  //     }

  //     res.status(200).send(JSON.stringify(result));
  //   });

  //diferencia entre arrow function y funciones anonimas (Comparte el scope )
  //el error 500 y el res.status NO va acá porque services se encarga de la base de datos, tiene que estar en el controller porque además tiene que ver con el protocolo http

  this.getById = (req, res) =>
    res.status(200).send("Obtener un usuario por el id"); //se pueden borrar los corchetes porque es solo una linea de ejecución

  this.post = (req, res) => res.status(200).send("Agrega un nuevo usuario");

  this.put = (req, res) => res.status(200).send("Actualiza usuario");

  this.deleteById = (req, res) => res.status(200).send("Borra usuario");
}

module.exports = Service;

//función del services: todo lo que es consultivo.
