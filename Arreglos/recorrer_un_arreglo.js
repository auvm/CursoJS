let arreglo = [1, 2, 3, 4];

//recorrer del final al comienzo
for(let i = arreglo.length; i > 0; i--){
  console.log(arreglo[i-1]);
}

console.log("9 lives to it...self");

//recorrer del inicio al final
for(let i=0; i < arreglo.length; i++){
  console.log(arreglo[i]);
}

//función foreach del arreglo
arreglo.forEach(function(element){console.log(element);});

let lenguajes = ["ruby", "php", "javascript", "C", "Python"];

/*se usa una función anónima que se ejecutará
  una vez por cada elemento en el arreglo
*/
console.log("------- Impresión de lenguajes -------");
lenguajes.forEach(function(lenguaje){
  console.log(lenguaje);
});

/*usar uno u otro método por velocidad
  es totalmente trivial, es lo mismo
*/


/*la función anónima dentro del forEach también puede recibir
el índice del elemento actual ciclado, como parámetro
*/
console.log("------- Con índice -------");
lenguajes.forEach(function(lenguaje, indice){
  console.log(indice + ".- "+ lenguaje);
});

/*además del índice, se puede recuperar el arreglo 
  completo como un tercer parámetro
*/
console.log("------- Con índice y arreglo -------");
lenguajes.forEach(function(lenguaje, indice, arreglo){
  console.log(indice + ".- "+ lenguaje + " de: " + arreglo);
});


/*foreach puede recibir (como segundo argumento) un valor
  que se le asigna al contexto "this"
  por cada elemento 
*/
console.log("------- This -------");
lenguajes.forEach(function(elemento){
  console.log(elemento+" - "+this);
}, "Hola mundote!");//aquí va el segundo argumento en el forEach
