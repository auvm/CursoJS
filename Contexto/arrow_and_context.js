//LO MISMO QUE HAY EN LA CARPETA CONTEXTO Y ARROW FUNCTION

/*Las arrow function se distinguen por dos características:
  -tienen una sintaxis más corta que la declaración con function
  -Heredan el valor de this del contexto en el que fueron
   creadas y NO se reasigna al momento de ejecutar 
   
   En contraste:
  -la declaración de function() hereda el valor del contexto
  en el momento de ejecución y SI se reasigna a posteriori
  
*/

let estudiante = {
  nombre: "Uriel",
  saludar: () => {console.log("Hola soy "+this.nombre);},
  saludarAlt: function(){console.log("Hola "+this.nombre);},
}

/*la arrow tiene hasta entonces el contexto de window*/
estudiante.saludar();//Hola undefined


/*al momento de ejecutar, se tiene el contexto de estudiante*/
estudiante.saludarAlt();//Hola uriel

function Estudiante() {
  this.nombre = "Uriel";
  this.saludar = () => {console.log("Hola soy "+this.nombre);};
  this.saludarAlt = function(){console.log("Hola "+this.nombre);};
}

let e = new Estudiante();

//al momento de creación, se hereda el contexto de Estudiante
setTimeout(e.saludar, 100);

/*como el contexto cambia al momento de ejecutar pasandose
como argumento, queda indefinido y ya no hace lo que queremos*/
setTimeout(e.saludarAlt, 100);


/*Conclusión:
  -arrow: hereda contexto al momento de ser creado y el mismo no cambia
  -function: hereda el contexto al momento de ser ejecutado
*/
