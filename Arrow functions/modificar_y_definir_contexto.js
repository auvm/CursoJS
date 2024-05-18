//ESTA CLASE SE REPITE Y ES LO MISMO EN LA CARPETA DE ARROW Y LA DE CONTEXTO
function Estudiante(){
  this.nombre = "uriel";
  this.saludar = function(){console.log(this, arguments);};
}

let e = new Estudiante();
e.saludar();

console.log("--------------- CALL -------------------");

/*FUNCIONES QUE MODIFICAN EL CONTEXTO
  Inmediata: call y apply
  Lazy: bind
*/


/*call - pasa como argumento el 
  valor q queremos que sea el contexto
  o sea, el valor de "this"
  
  En este caso un objeto vacio.
   UPDATE: con la propiedad "titulo".
  
  Adelante se pueden pasar los argumentos que
  necesite la función como tal
*/
e.saludar.call({titulo: "contexto de call"}, "esto", "es", "un", "argumento");

console.log("---------------- APPLY ------------------");
/*apply, es muy similar a call, pero 
  los argumentos que enviamos se envían
  todos juntos en un arreglo.
*/
e.saludar.apply({titulo: "contexto de apply"}, ["sigue", "siendo", "argumento"]);

console.log("---------------- BIND ------------------");
/*bind - para cuando no se necesita ejecutar la función*/

let nuevaFuncion = e.saludar.bind({titulo: "contexto de bind"}, "un", "dos", "...", "argumentos");

nuevaFuncion();

/*El escenario de bind es ocuparlo para especificar que el contexto
  núnca cambie, haciendolo explicito dentro del objeto:
*/
function Estudiante01(){
  this.nombre = "uriel";
  this.saludar = function(){console.log(this, arguments);};
  
  /*sobre escribe la función saludar para especificar 
    que siempre el contexto sea el objeto creado
  */
  this.saludar = this.saludar.bind(this);
}

console.log("------------CONTEXTO ORIGINAL-------------");
let nuevo = new Estudiante01();
nuevo.saludar();

console.log("------------INTENTANDO MODIFICAR EL CONTEXTO -------------");
/*agrego cosas que cambian el contexto, como reasignar y pasar
  el objeto como argumento
*/
let asignacion = nuevo.saludar;
asignacion(); //aquí debió cambiar el contexto, pero sigue siendo el mismo por el bind

setTimeout(nuevo.saludar, 100);

/*CONCLUSIÓN: CALL Y APPLY nos ayudan a especificar un valor de
  "this" en especifico, es decir "el contexto", si la función que queremos ejecutar
  requiere argumentos, también con esas se le pueden pasar.
  
  BIND nos ayuda a definir desde el principio que el contexto sea
  el objeto como tal, aún y cuando la función que queramos invocar
  sea pasada como argumento, re asignada, etc. Es un hardcode del contexto.
*/
