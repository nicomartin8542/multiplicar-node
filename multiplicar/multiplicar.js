//requires
const fs = require("fs");
const colors = require("colors");

let listarTabla = async(base, limite = 10) => {
    let data = "";

    if (!Number(base) || !Number(limite)) throw "El valor ingresado no es valido";

    console.log("==================================".green);
    console.log(`Lista de tabla ${base}`.green);
    console.log("==================================".green);

    for (let i = 1; i <= limite; i++) {
        data += `${base} * ${i} = ${base * i}\n`;
    }
    return data;
};

let crearArchivo = async(base, limite = 10) => {
    let dir = `archivos/tabla-${base}.txt`;
    let data = "";

    if (!Number(base) || !Number(limite))
        throw "El valor ingresado no es un numero";
    // if (!Number(base)) throw new Error("El valor ingresado no es un numero");
    for (let i = 1; i <= limite; i++) {
        data += `${base} * ${i} = ${base * i}\n`;
    }
    //Creao archivo.
    fs.writeFile(dir, data.trim(), (err) => {
        if (err) throw err.message.red
    });
    let salida = `tabla-${base}.txt`.green;
    return `Archivo creado: ${salida}`;
};

module.exports = {
    crearArchivo,
    listarTabla,
};