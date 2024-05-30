let request = require('request-promise');

let promsea = request('http://www.google.com');
/*.then toma la función a realizarse al finalizar correctamente
    la petición*/
promsea.then(function(){console.log("Terminé la petición")})
/*.catch para acciones si ocurre un error*/
        .catch(function(err){console.log(err)})
/*.finally para acciones que ocurran si o si, finalice con
    error o correctamente*/
        .finally(function(err){console.log("Finalizó la tarea.")});

console.log("Yo sucedo después");


/*la promesa toma los callbacks ó funciones como argumentos
para ejecutarlas en distintas etapas de la ejecución
de la función asíncrona*/