class Curso{
  /*no compatible en versiones anteriores muy nuevo*/
  title = "Hola";

  inscribir(nombre){
    this.nombre = nombre;
  }

  //otra forma de hacer métodos
  descripcion = (descr) => this.descripcion = descr;
}

//crear objetos
let c = new Curso();

//acceder a métodos
c.inscribir("Uriel");
c.descripcion("esto es la descripción");


console.log(c.nombre);
console.log(c.descripcion);
