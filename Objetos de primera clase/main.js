
/*Para ser un objeto de primera clase se debe:
  Debe ser posible retornarlo
  Debe ser posible asignarlo a una variable
  Debe ser posible enviarlo como argumento
 */

//Una función puede recibir como argumento otra función

function executor(funcion){
  funcion();
}

function decirHola(){
  console.log("Hola mundo");
}

executor(decirHola);

//Una función puede retornar otra función

function build(){
  function a(){console.log("Hola desde a!");}
  return a;
}

let f = build();
f();


/*
aunque normalmente cuando se quiere retornar una función
se hace uso de las funciones anónimas
*/

function mybuild(){
  return function(){console.log("Hola desde g!");}
}

let g = mybuild();
g();
