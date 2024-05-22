/*Herencia:
  cada descendiente hereda de todos sus ancestros
*/

class Human{
  especie = "humano";
  respirar(){console.log("Inhala... Exhala.");}
}

class Admin extends Human{}

let admin = new Admin();

admin.respirar();
console.log(admin.especie);



/* -------------- EJEMPLOS HERENCIA -------------*/

/*Para añadir funcionalidad a clases ya definidas
  "sobre-escribir"

class CustomeDate extends Date{}
class CustomeArray extends Array{}
*/

/* -------------- HERENCIA DE CONSTRUCTOR -------------*/
/*

function User(){}
class Admin extends User{}
*/

/* -------------- EJEMPLOS SOBRE ESCRITURA -------------*/


class User{
  
  constructor(name){
    this.name = name;
  }
  
  saludar(){console.log("Hola usuario!")}
}

class Administrador extends User{
  /*sobre escribirmos el método del padre, pero aún
  podemos acceder al original, con super.XXX
  */
  saludar(){
    console.log("Método original:");
    super.saludar();
    
    console.log("Método modificado:");
    console.log("Hola administrador!")
  }
  
  /*también podemos usar el constructor padre original,
    y en este caso, usar en futuros objetos, los atributos
    q en el padre se declaran
  */
  constructor(name){
    super(name);
  }
  
}

/*pasamos al constructor el argumento name...*/
let e = new Administrador("Uriel");
e.saludar();

console.log("Nombre: "+e.name);
