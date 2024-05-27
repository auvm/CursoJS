function Course(title){this.title = title;}


let javaScript = new Course("Curso prfesional de JavaScript");
let ruby = Object.create(javaScript);

/*aunque está asignando un nuevo titulo,
  la propiedad no le pertenece a ruby,
  la encuentra en la cadena de prototipos.
*/
ruby.title = "Curso de Ruby";
console.log(ruby);
console.log(javaScript);



//update - así funciona la herencia de prototipos
function LiveCourse(date){
  this.published_at = date;
}

//añade al proto de course, la función inscribir
Course.prototype.inscribir = function(){console.log("inscrito");}

//añade al proto de LiveCourse, el proto de Course
LiveCourse.prototype = Object.create(Course.prototype);

//crea un nuevo objeto LiveCourse
javaScript = new LiveCourse(new Date());

/*Aquí pasa la herencia:
  1. Busca la función en el objeto, no la encuentra
  2. Busca la función en el proto de la función 
     constructora "LiveCourse", no la encuentra
  3. Busca la función en el proto de "Course"
     ahí si la encuentra y la trae.
*/
javaScript.inscribir();

console.log(javaScript);
