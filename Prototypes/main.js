function Course(){
    Course.prototype.inscribir = function(){
      console.log("hola!");
    }
}

Course.prototype.inscribir = function(){
  console.log("hola");
}


let course = new Course();
course.abandonar = function(){ console.log("abandonar");};
//course.inscribir();

console.log(course.toString());

/*ni en el objeto ni en el prototipo, es en el
prototipo ligado al prototipo anterior donde se
encuentra el método toString(), forma parte de
LA CADENA DE PROTOTIPOS de los objetos
*/
