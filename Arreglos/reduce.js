/*La función reduce en un arreglo busca reducir 
la cantidad de elementos, pasandolos a un 
acumulador que los va a contener, es decir
se reduce el arreglo a una sola variable, el 
acumulado
*/

//se tiene un arreglo
let nombres = ["Ángel", "Juan", "Eduardo", "Cano"];

/*la reducción toma una función anónima con dos argumentos,
el acumulador y los elementos individuales del arreglo, 
como segundo argumento se pasa "" que es el valor
inicial que se le puede dar al acumulador*/ 
let list = nombres.reduce(function(acumulador, nombre){
  //retorna el acumulado más, los elementos que quieras...1
  return acumulador + "<li>" + nombre + "</li>";
},"");

console.log(list);

let solicitudes = [1, 2, 1, 1];

let total_solicitudes = solicitudes.reduce(function(acc, solicitud){
  return acc + solicitud;
}, 0);

console.log("Total de solicitudes: "+ total_solicitudes);


let lenguajes_encuesta = ["Python", "C", "Flask", "HTML"];

let lista_lenguajes = lenguajes_encuesta.reduce(function(acc, lenguaje){
  return acc + " " + lenguaje+",";
}, "");

console.log("Lista de lenguajes: "+ lista_lenguajes);
