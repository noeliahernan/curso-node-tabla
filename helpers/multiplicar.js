const fs = require("fs");
const colors = require('colors');
const crearArchivo = async (base = 5, listar = false, hasta = 10) => {
  try {
    let salida, consola = "";
    for (let i = 1; i <= hasta; i++) {
      salida += `${base} x ${i} = ${base * i}\n`;
      consola += `${base} ${'x'.rainbow} ${i} ${'='.cyan} ${base * i}\n`;
    }
    //Imprimimos en pantalla la salida
    console.log(listar);
    if(listar){
        console.log(colors.cyan("========================="));
        console.log(colors.cyan("Tabla del:", base));
        console.log(consola);
    }
    //Escribimos un fichero con la salida de la tabla
    /*fs.writeFile(`tabla-${base}.txt`, salida, (err) =>{
        if(err) throw err;
        console.log(`tabla-${base}.txt creado`);
    } )*/

    fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
    return `tabla-${base}.txt`;
  } catch (err) {
    throw err;
  }
};
module.exports = {
  crearArchivo,
};
