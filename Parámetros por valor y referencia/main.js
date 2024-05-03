let edad = 20;

console.log("------------ parámetro por valor ------------");
/*como se pasa el parámetro por valor (una copia del valor)
  dentro de la función esa copia se modifica, pero
  el valor original no se altera
*/
function modificador_por_valor(edad){
  edad = 25;
  console.log("Dentro de la función:"+edad);
}

console.log(edad);
modificador_por_valor(edad);
console.log(edad);

console.log("------------ parámetro por referencia ------------");
/*como se pasa el parámetro por referencia (la dirección del valor original)
 dentro y fuera de la función se altera el contenido
 o valor orginal del objeto o estructura
*/
let edades = [20,22,23]
function modificador_por_referencia(edades){
  edades[0] = 21;
  console.log("Dentro de la función:"+edades);
}

console.log(edades);
modificador_por_referencia(edades);
console.log(edades);
