/*Evalua una operación sobre cada elemento,
  si el valor es thruty, retorna el elemento evaluado
*/

let numeros = [2,3,5,6,0,11];

let nuevo_arreglo = numeros.filter(function(numero){
  return false;
});

console.log(nuevo_arreglo);

let pares = numeros.filter(function(numero){
  /*Si la evaluación es true, retorna el 
  valor evaluado*/
  return numero % 2 === 0;
});

console.log(pares);

let impares = numeros.filter(function(numero){
  /*Si la evaluación es true, retorna el 
  valor evaluado*/
  return numero % 2 !== 0 ; 
});

console.log(impares);

impares = numeros.filter(function(numero){
  /*Si la evaluación es true, retorna el 
  valor evaluado*/
  return numero % 2; /*también retorna los impares porque
  el módulo de 2 de los números pares, es cero, 
  un falsy, por lo que no retorna el valor original
  al arreglo final*/
});
console.log(impares);

let lenguajes = ["Python", "C", "Ruby", "Go", "PHP"];
let lenguajes_filtrado = lenguajes.filter(function(lenguaje){
  /*Si la evaluación es true, retorna el 
  valor evaluado*/
  return lenguaje !== "Ruby" ; 
});

console.log(lenguajes_filtrado);

