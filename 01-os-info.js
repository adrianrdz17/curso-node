// Es recomendable usar el prefijo node para bibliotecas nativas de node
const os = require('node:os');

console.log('Informacion del sistema operativo')
console.log('Nombre del sistema operativo', os.platform())
console.log('Version del sistema operativo', os.release())
console.log('Arquitectura: ', os.arch())
console.log('CPUs: ',os.cpus());

console.log('Memoria libre', os.freemem());
console.log('Memoria total', os.totalmem());
console.log('Uptime: ', os.uptime()/60/60)