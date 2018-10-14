const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}


const argv = require('yargs')
    .command('listar', 'lista las tablas de multiplicar', opts)
    .command('crear', 'crea un archivo de las tablas de multiplicar', opts)
    .help()
    .argv;


module.exports = {
    argv
}