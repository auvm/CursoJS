let arreglo = ["ruby", "Python", "C", "Java", "CP", 2];

/*indexOf - retorna el índice de la posición en donde se 
  encontró por primera vez
  
  Utiliza: === estrictamente igual --> Posición
*/
console.log("Fue encontrado en el índice: "+arreglo.indexOf("C"));

/*includes - retorna true/false si el arreglo contiene
  el elemento buscado
  
  Utiliza: === estrictamente igual --> true/false
*/
console.log("¿Lo contiene? "+arreglo.includes("C"));
console.log("¿Lo contiene? "+arreglo.includes("Nada"));

/*puede incluir como segundo argumento la posición desde
  dónde se quiere empezar la búsqueda (apartir de... inclusive)
*/

console.log("¿Lo contiene? "+arreglo.includes("C",2));


/*Para búsquedas más complejas

  find -> función prueba, retorna el elemento encontrado
*/
let respuesta = arreglo.find(function(elemento, posicion, arreglo){
  return elemento === "java" || elemento === "Java";
})

console.log("Se encontró: "+ respuesta)

//otro ejemplo

respuesta = arreglo.find(function(elemento, posicion, arreglo){
  return elemento % 2 === 0;
})

console.log("Se encontró el número par: "+ respuesta);

//la mísma función, pero para retornar el índice
respuesta = arreglo.findIndex(function(elemento, posicion, arreglo){
  return elemento === "java" || elemento === "Java";
})

console.log("Java es índice: "+ respuesta)

//la mísma función, pero para retornar si lo contiene en el arreglo
respuesta = arreglo.some(function(elemento, posicion, arreglo){
  return elemento === "java" || elemento === "Java";
})

console.log("¿Java existe? "+ respuesta)
