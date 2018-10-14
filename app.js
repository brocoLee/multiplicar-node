const argv = require('./config/yargs').argv;
const colors = require('colors');

const { crearArchivo, listar } = require('./multiplicar/multiplicar');
let comando = argv._[0];

switch (comando) {
    case 'listar':
        listar(argv.base, argv.limite)
            .then(listado => console.log(`la tabla del ${argv.base} : \n${listado}`))
            .catch(e => console.log(e));
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado : ${archivo.green}`))
            .catch(e => console.log(e));
        break;

    default:
}