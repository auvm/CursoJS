/**
 * Para ejecutar varias promesas y ejecutar cierta función 
 * al terminarlas todas, hay varías opciones.
 */
//promesas de primer ejemplo
let p1 = new Promise((resolve, reject) => setTimeout(resolve, 500, "...proceso 01/02..."));
let p2 = new Promise((resolve, reject) => setTimeout(resolve, 800, "...proceso 02/02..."));

//función adicional que ejecutamos cuando todas las promesas finalicen
function finalizado(){
    console.log("Procesos completados👍");
}

/**
 * un promise-hell sería algo así, métodos 
 * then anidados con la siguiente promesa y 
 * en la última promesa, la función final.
 */
p1.then(function(argumentsP1){
    console.log(argumentsP1);
    p2.then(function(argumentsP2){
        console.log(argumentsP2);
        finalizado();       
    })
});

//promesas del segundo ejemplo ----------------------------------------------------------------
let p3 = new Promise((resolve, reject) => setTimeout(reject, 1000, "...proceso 01 de 02..."));
let p4 = new Promise((resolve, reject) => setTimeout(resolve, 900, "...proceso 02 de 02..."));

/**
 * Existen métodos especiales como .all que recibe
 * un iterable-un arreglo con las promesas a ejecutar 
 * que, una vez finalicen todas las promesas, usas el método
 * .then para ejecutar la función final ó en dado caso,
 * .catch para ejecutar en caso de fallar una de las promesas
 * 
 * NOTA:si falla una promesa en ejecutarse, es "reject", 
 * rechaza la promesa completa.
 */
Promise.all([p3, p4]).then(resultados_de_ejecucion => console.log(resultados_de_ejecucion))
                     .catch(err => console.log("Error en la ejecución: "+err))


/**
 * Éste último método sería muy útil al momento de crear una vista
 * de un sitio web, después de haber consultado todos los items ó 
 * datos de una base de datos, para posterioemente, entonces sí 
 * construir la vista. En caso de error al accedes a la base de 
 * datos, entonces construye otra cosa o un mensaje de error.
 */