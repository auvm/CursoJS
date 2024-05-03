//Operadores de comparación
/*
  == Igual
  === Estrictamente igual
  
  != Desigual
  !== Desigual estricta
  
  X < Y Menor qué
  X > Y Mayor qué
  
  <= Menor o igual qué
  >= Mayor o igual qué
 */

let result = 2 < 4;
console.log(result);

if(result){
  console.log("Hola mundo");
}

let edad = 21;
if(edad >= 18){
  console.log("Mayor de edad");
}

//las comparaciones de strings comparan por orden lexicográfico
//EN LAS MAYÚSCULAS, LA A VA ANTES DE LA U, POR ESO ES FALSO
console.log("Angel" > "Uriel");
//En las minúsculas, van despues de todas las MAYÚSCULAS, por eso es verdadero
console.log("angel" > "Uriel");

console.log("-------Comparadores estrictos--------");
edad = "21";
console.log(edad == 21); //true pq son el mismo valor
console.log(edad === 21); //false pq uno es un número y el otro un string

/*Los comparadores estrictos comparan el valor y el tipo de dato

NOTA: RECOMENDACIÓN, USAR SIEMPRE LOS ESTRICTAMENTE IGUAL ===

*/
