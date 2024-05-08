//Iterables - objetos en js que pueden ser divididos en otros elementos más pequeños

//Spread syntax (...)
console.log("-------------- Spread Sintax (...) --------------");
let arreglo = [1,2,3];
let nombre = "Uriel";

console.log(arreglo);
console.log(...arreglo);
console.log(nombre);
console.log(...nombre);


//Rest parameters
console.log("-------------- Rest parameters --------------");

function promedio(nombre, ...calificaciones){
   //(Esto crea un objeto) es otra cosa
  console.log(arguments);//arguments crea un objeto y no es lo mismo que la spread syntax
                        
  console.log(nombre, calificaciones);
}

promedio("Ángel", 8, 9, 10, 6);


//otro ejemplo
function demo(...arreglo){                       
  console.log("Arreglo final: ", arreglo);
}

//crea un arreglo, reuniendo todos los argumentos mandados
demo(1, 2, 4, 5, 9, 10, 6);
