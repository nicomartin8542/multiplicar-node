//requires
const { crearArchivo, listarTabla } = require("./multiplicar/multiplicar");
const argv = require("./config/yargs").argv;
const colors = require("colors");

let comando = argv._[0];

switch (comando) {
    case "listar":
        listarTabla(argv.base, argv.limite)
            .then((resp) => console.log(resp))
            .catch((error) => console.log(error));
        break;
    case "crear":
        crearArchivo(argv.base, argv.limite)
            .then((resp) => console.log(resp))
            .catch((error) => console.log(error));
        break;
    default:
        console.log("comando no reconocido");
        break;
}