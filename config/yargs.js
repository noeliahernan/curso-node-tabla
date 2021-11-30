
/*const [,,arg3 = 'base=5'] = process.argv;
const [, base] = arg3.split('=');*/
//Yargs para pasarle argumentos por consola
const argv = require("yargs")
  //definimos una opción
  .options({
    b: {
      alias: "base",
      type: "number",
      //Indica si es obligatoria la opción
      demandOption: true,
      describe: 'Es la base de la tabla de multiplicar'
    },
    l: {
      alias: "listar",
      type: "boolean",
      default: false,
      describe: 'Muestra la tabla en consola'
    },
    h: {
        alias: "hasta",
        type: "number",
        default: 10,
        describe: 'Hasta que limite queremos mostrar'
      },
  })
  //Valida que el argumento recibido es del tipo que tiene que ser
  .check((argv) => {
    if (isNaN(argv.b)) {
      throw "La base tiene que ser un número";
    }
    if (isNaN(argv.h)) {
        throw "El límite tiene que ser un número";
      }
    return true;
  }).argv;

  module.exports = argv;