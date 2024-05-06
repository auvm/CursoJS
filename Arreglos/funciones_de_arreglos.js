/* Arreglos, colección de elementos agrupados */

let arreglos = ["rails",
                "laravel",
                "django",
                1, 2, 3,
                function(){
                  console.log("hola mundo!");
                },
                [1,2,3,4,5]];

console.log("---------------- Arreglo ------------------");
for(let i=0; i<arreglos.length; i++){
  console.log(i+1+".- "+arreglos[i]);
}

//reasignar
arreglos[0] = "python";

//agregar al final 
arreglos.push("¡¡¡¡¡¡AL FINAL!!!!!!");

//agregar al principio
arreglos.unshift("¡¡¡¡¡¡AL PRINCIPIO!!!!!!");


console.log("---------------- Arreglo ------------------");
for(let i=0; i<arreglos.length; i++){
  console.log(i+1+".- "+arreglos[i]);
}


//Elimina al final y retorna el elemento eliminado
let elim_pop = arreglos.pop();

//Elimina al principio y retorna el elemento eliminado
let elim_shift = arreglos.shift();

console.log("---------------- Arreglo ------------------");
for(let i=0; i<arreglos.length; i++){
  console.log(i+1+".- "+arreglos[i]);
}

console.log(elim_pop);
console.log(elim_shift);


//al agregar elementos las funciones también retornar un valor
//retornan la nueva longitud del arreglo
let ret0 = arreglos.push("nuevo retorno 1");
let ret1 = arreglos.unshift("nuevo retorno 2");
let ret2 = arreglos.unshift("nuevo retorno 3");

console.log(ret0);
console.log(ret1);
console.log(ret2);
