const fs = require('node:fs')
// const { promisify } = require('util')

// Cambiar de callback a promesa
// Utilizar solo en modulos nativos que no tienen promesas nativas
// const readFilePromise = promisify(fs.readFile);

console.log('Leyendo el primer archivo...');
// lectura de archivos asincrona
fs.readFile('./archivo.txt', 'utf-8', (err, text) => {
    // En este callback, tenemos 2 parametros
    // uno para el error y otro para la impresion del texto
    console.log(text)
});

console.log('Hacer cosas mientras se lee el archivo')


console.log('Leyendo el segundo archivo...');
fs.readFile('./archivo2.txt', 'utf-8',(err, text) => {
    // En este callback, tenemos 2 parametros
    // uno para el error y otro para la impresion del texto
    console.log('Segundo archivo: ',text)
});



