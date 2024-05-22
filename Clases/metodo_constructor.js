/*constructores - en JavaScript, solo se puede tener un constructor
  -también pueden tener valores por defecto
  -tiene el objeto automático "arguments
*/

class Curso{
  constructor(titulo, color="yellow"){
    this.titulo = titulo;
    this.color = color;
    console.log(arguments);
  }
}

let cur01 = new Curso("Curso profesional de JavaScript", 1, 2, 3, 4, 5)

console.log(cur01);

