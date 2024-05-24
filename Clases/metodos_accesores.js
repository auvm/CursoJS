/*solo dejar accesible los métodos o atributos que
  el programa vaya a utilizar
*/

class User{
  
  get nombre(){
    return this._nombre;
  }
  
  set nombre(nombre){
    /*Ejemplo de una validación al momento
    de settear*/
    if(typeof nombre !== "string") throw new Error("Error: No es una cadena");
    this._nombre = nombre;
  }
}

let user = new User();

user.nombre = "ángel"; //setter 
console.log(user.nombre); //getter

/*Intenta settear nuevamente y lanza error*/
user.nombre = 12;//Error

