class Api{
  /*los métodos y atributos estáticos son usados
  cuando no se requiere que los objetos creados
  tengan dichos elementos, son solo de utilidad
  
  por lo tanto lo STATIC le pertenece a LA CLASE
  */
  static ENDPOINT = "localhost:3000";
  //método que usa otro elemento estático
  static get(){console.log(this.ENDPOINT);}

  /*método que crear un objeto de la clase,
  pero como lo statico le pertenece a la clase
  en la imprisión del objeto solo tiene el atributo
  name.*/
  static crea_objeto(){return new this();}


  name = "Hola";
}

Api.get();
console.log(Api.crea_objeto());
