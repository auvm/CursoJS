//Destructuring assigment
let user = {name : "uriel", age : 20, country:"MX"};

/*Se pasa el nombre de la propiedad del 
  objeto que se quiere asignar a : el nombre 
  de la variable.
*/
let {name:name_user} = user;
console.log(name_user);

/*si se omite un nombre de variable, toma
  el nombre de la propiedad del objeto
*/
let {age} = user;
console.log(age);

/*LA SINTAXIS DE ASIGNACIÓN TAMBIÉN SE PUEDE
  TRASFERIR A LAS FUNCIONES AL RECIBIR PARÁMETROS
*/

function saludar({name}){
  console.log("------------------------------");
  console.log("Usuario: "+name);
}

saludar(user);

/*se puede juntar con la spreed syntax para pasar
  las propiedades restantes a otro objeto
*/

let  {country, ...objeto_restante} = user;
console.log(country);
console.log(objeto_restante);

//para valores por defecto, si no lo encuentra
let {apellido = "N/A"} = user;
console.log(apellido);

//ACCESO POR ORDEN -------------------------------------
let calificaciones = [9,8,7];
let [matematicas, programacion, ciencias] = calificaciones;

console.log(ciencias);
//---------------------------------------------------

function suma([v1,v2]){
  console.log(v1+v2);
}

suma([1,3]);

//asignar a variables independientes -------------------------------------

function getCalif(){
  return([9,6,10]);
}

let [biologia, java, mates] = getCalif();
console.log(java);
