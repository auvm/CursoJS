/**
 * Las promesas se pueden encadenar para que se ejecuten
 * de manera consecutiva, una después de otra, útil en casos
 * donde una segunda o tercer promesa, necesita del resultado
 * de ejecutar otra promesa anteriormente.
*/

function primeraPromesa(){
    return new Promise((resolve, reject) => setTimeout(resolve, 500, "...msj primera promesa..."));
}
function segundaPromesa(){
    return new Promise((resolve, reject) => setTimeout(resolve, 800, "...msj segunda promesa..."));
}

/**
 * Se manda a ejecutar la primer promesa, cuando se completa 
 * se puede encadenar otro método .then si se pasa un segundo
 * objeto promesa a ejecutar en el .then de la primera promesa.
 */
primeraPromesa().then(segundaPromesa).then(msj => console.log(msj));
