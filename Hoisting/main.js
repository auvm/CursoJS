//Hoisting

/*Se le llama así a usar una función antes de usarla,
  lo que no sucede con las variables
*/


demo();

//solo sucede con la definición, más no con la asignación
function demo(){
  var x = 10;
  console.log(x);
 
}

//No es recomendado usar las variables antes de declararlas

/*Con las variables no aplica el hoisting de asignación,
ya que al principio marca indefinido, luego imprime el valor
asignado
*/
console.log(y);
var y = 20;
console.log(y);

