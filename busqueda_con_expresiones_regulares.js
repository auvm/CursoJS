/**
 * Hay pocos métodos que pueden recibir una expresión regular
 */

let cadena = "Hola, mi nombre es auvm y tengo 24 años. 2024.";

console.log("************************ .search() ***************************");
/**
 * El método .search() funciona exactamente igual a .indexOf(), a diferencia
 * de que recibe una expresión regular para funcionar, mientras que .indexOf()
 * necesitaba una cadena.
 */
console.log(cadena.search(/Uriel/)); //-1 si no encuentra la expresión
console.log(cadena.search(/auvm/)); //retorna la posición a partir de la cual se puede encontrar la expresión

console.log("************************ .match() ***************************");

/**
 * El método match retorna un arreglo con la primera ocurrencia que 
 * coincidan con la expresión regular registrada.
 * 
 * Si se usa la bandera g, se retornan todas las coincidencias en 
 * el mismo arreglo.
 */
console.log("Primer coincidencia: "+cadena.match(/[0-9]/));//solo retorna la primer coincidencia
console.log("Todas las coincidencia: "+cadena.match(/[0-9]/g)); //también se puede usar \d
/**
 * Si usas en simbolo más (+), se guardan las inicidencias
 * como números completos. El más significa que incluya a las
 * ocurrecias consecutivas como una sola.
 */
console.log("Todas las coincidencia como números completos: \n"+cadena.match(/[0-9]+/g));

/**
 * El método .martchAll() de las cadenas hace lo mismo que .match()
 * pero retorna un iterable con las incidencias, a diferencia del arreglo
 * que retorna .match().
 */

console.log("************************ .matchAll() ***************************");
let coincidencias = cadena.matchAll(/[0-9]+/g);

for (const iterator of coincidencias) {
    console.log(iterator.toString());
}