//Booleanos true/false

//para ciclos, condiciones o banderas

let notifications_active = true;
let device_in_use = false;

console.log(notifications_active);
console.log(device_in_use);

//la función Boolean() evalúa una variable booleana
console.log(Boolean(notifications_active));
//Evalúa cadenas tambien, vacia = false, cualquier otra = true
Boolean("false");//retorna true, pq tiene contenido
Boolean(false);//retorna false
Boolean(true);//retorna true

console.log("---------Tipos Falsy---------");
//Tipos Falsy:
console.log(Boolean(0));
console.log(Boolean(-0));
console.log(Boolean(""));
console.log(Boolean(false));
console.log(Boolean(NaN));
console.log(Boolean(null));

console.log("---------Tipos Truthy---------");
//Tipos Truthy - todos aquellos que no son falsy
console.log(Boolean(1));
console.log(Boolean(100));
console.log(Boolean("lleno"));
console.log(Boolean(true));

/*Cuando el intérprete necesita saber si un valor es truthy o falsy hace
  una conversión implícita, sin cambiar su valor original.*/
