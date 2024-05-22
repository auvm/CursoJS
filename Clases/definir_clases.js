/*clases - sintaxis para definir objetos
  js es orientado a prototipos
*/

//otra forma de definir clase
let Curso = class{
  
}

class Course{
  //constructor
  constructor(titulo){
    this.title = titulo;
  }
  
  //métodos
  inscribir(){
     console.log("Inscrito en el curso: "+this.title);
  }
}

let curso01 = new Course("Curso profesional de JavaScript");

console.log(curso01.title);
curso01.inscribir();
