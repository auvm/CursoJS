/*todas las clases y métodos por defecto son públicos, 
  en las versiones recientes se añade funcionalidad para
  hacer cosas privadas
*/
class Curso{
    //solo disponible dentro de la clase
    #title = "curso profesional de JavaScript";
    #bienvenida(){
      console.log("Bienvenido al curso: "+this.#title);
    }
                  
    constructor(){
       this.#bienvenida();
    }
    
}

//al crear el objeto se hace uso de la función privada
let javascript = new Curso();

//Error, el atributo es privado
//console.log(javascript.#title);

//Error, el método es privado
//javascript.bienvenida();


/*conclusión, para llamar a métodos o atributos privados
  dentro de la clase, se debe incluir el # en el nombre

  Ayudan a encapsuar el código - bloques de código 
  aisladas que están protegidas restringiendo el acceso
*/
