//Duplicar objetos con spread syntax y objet.assign

//Objetos de ejemplo
let user = {
  edad: 20,
  nombre: "uriel"
};

let metodo = {
  saludo(){console.log("Saludo!");}
};


/*Usando la spread syntax podemos añadirle al 
  nuevo objeto, los objetos ya creados y sumarle métodos 
  o propiedades nuevas
*/
let admin = {...user, nivel:2, ...metodo};

console.log(admin);


console.log("----------Usando object.assign------------");
/*Usando Object.assign() se le transfieren los objetos que
  pasamos como argumentos a la variable copia, también 
  se le pueden pasar nuevos parámetros o métodos en la 
  asignación
*/

let copia = Object.assign(user, metodo, {nivel:4});
console.log(copia);


/*Nota: con la spread syntax no se crean propiedades
  getters ni setters, con Object.assign(), si
*/
