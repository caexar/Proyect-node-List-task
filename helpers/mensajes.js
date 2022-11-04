const { resolve } = require("path");

require("colors");


const mostrarMenu = () => {

    return new Promise( resolve => {
        
        console.clear();
        console.log("=======================".green);
        console.log(" Seleccione una opcion ".green)
        console.log("=======================\n".green);
    
        console.log(`${ "1.".green } Crear tarea`);
        console.log(`${ "2.".green } Listar tareas`);
        console.log(`${ "3.".green } Listar tareas completadas`);
        console.log(`${ "4.".green } Listar tareas pendiente`);
        console.log(`${ "5.".green } Completar tarea(s)`);
        console.log(`${ "6.".green } Borrar tareas`);
        console.log(`${ "0.".green } Salir \n`);
    
        const readline = require('readline').createInterface({
            //el  process.stdin: sirve para que node sepa que debe pausar y esperar la informacion del usuario
            input: process.stdin,
            // process.stdout: mostrarle un mensaje en consola al usuario
            output: process.stdout
        });
    
        //para usar el outpu y preguntarle algo al usuario
        readline.question('Seleccione una opcion: ', (opt) => {
            //hay que cerrar el readline con .close porque leugo se quedara esperando informacion
            readline.close();
            resolve(opt);
        })


    });

}

const pausa = () => {

    return new Promise(resolve => {
        const readline = require("readline").createInterface({
            //el  process.stdin: sirve para que node sepa que debe pausar y esperar la informacion del usuario
            input: process.stdin,
            // process.stdout: mostrarle un mensaje en consola al usuario
            output: process.stdout
        });
    
        //para usar el outpu y preguntarle algo al usuario
        readline.question(`\nPresione ${ "ENTER".green} para continuar\n`, (opt) => {
            //hay que cerrar el readline con .close porque leugo se quedara esperando informacion
            readline.close();
            resolve();
        })

    })

}

module.exports = {
    mostrarMenu,
    pausa
}