const { crearArchivo } = require("./helpers/multiplicar");
const argv = require ("./config/yargs");
const colors = require('colors');
//Limpiamos la consola
console.clear();
crearArchivo(argv.b, argv.l, argv.h)
  .then((nombreArchivo) => console.log(nombreArchivo.rainbow, "creado"))
  .catch((err) => console.log(colors.red("Se ha producido el siguiente error:"), err));
