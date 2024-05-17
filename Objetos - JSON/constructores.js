/*Funciones constructoras - los atributos y métodos que se usen 
  dentro de una función, se pasan a la variable asignada de tipo objeto, 
  sin necesidad de crear clases
*/

//Es buena práctica empezar el nombre de la función constructora en 
mayúscula si y solo si es constructor
function Course(title){
  this.title = title;
  this.inscribir = function(){console.log("Inscrito en el curso: 
"+title);};
  
}

//Para crearlo, debes usar new y la función
let objeto = new Course("Curso profesional de JS");
console.log(objeto);


//otro ejemplo
var nuevo_objeto = new Course("Curso python!!");
console.log(nuevo_objeto);
nuevo_objeto.inscribir();
