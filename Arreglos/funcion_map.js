/* map - genera un nuevo arreglo después de aplicar
  una función de modificación para cada elemento del
  arreglo original
*/


let numbers = [1, 2, 3, 4, 5, 7];

/*Ejemplo de una función que devuelve
  los cuadrados de los números en un arreglo
*/

let squares = [];
for(let i = 0; i < numbers.length; i++){
    squares.push(numbers[i] * numbers[i]);
}

console.log(squares);

/*Con la función map, se puede crear una instrucción más sencilla que
  la anterior para hacer lo mismo
*/

let map_squares = numbers.map(function(numero){
  return numero * numero;
});

console.log(map_squares);

/*Ejemplo, pasando de cadenas a enteros
  Nota: la función map no es mutable
  (no altera la variable original)

  UPDATE: porque todas las cadenas son inmutables
*/
let cadenas = ["1", "3", "5", "7"];
let int_cadenas = cadenas.map(function(string_num){
  return parseInt(string_num);
});
console.log("Original: ",cadenas);
console.log("Enteros: ",int_cadenas);



