//Argumentos y parámetros

                //parámetro
function cuadrado(numero){
  return numero * numero;
}
        //argumento
cuadrado(2);

/*
  En java script:
 *no se declara el tipo de dato en el parámetro
 *no se validan el número de argumentos enviados
 *si se llama la función sin argumentos, se retorna undefined
 
*/

let resultado = cuadrado(2);
console.log(resultado);


/*Se puede asignar un valor por defecto
en la definición del parámetro*/
function cuadrado(numero = 10){
  return numero * numero;
}
        //argumento
console.log(cuadrado());


/*los parámetros con valores por defecto deben
ir al final de los valors que no tienen*/
function saludar(apellido, nombre=""){
  console.log(nombre, apellido);
}

saludar("Velasco");
saludar("Velasco", "Ángel");

function sumaTodos0(){
  //arguments es palabra reservada para todos los argumentos enviados
  console.log(arguments)
}

sumaTodos0(1,2,3,4,5,6);

function sumaTodos1(){
  let suma = 0;
  for(let i = 0; i < arguments.length; i++){ suma += arguments[i];}
  console.log(suma);
}

sumaTodos1(1,2,3);
