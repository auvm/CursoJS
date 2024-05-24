function Course(){}

Course.prototype.inscribir = function(){
  console.log("Ya llegué!");
}

let course_js = new Course();
let course_ruby = new Course();

course_js.inscribir();
course_ruby.inscribir();

console.log("-----------------------------------");

/*se puede actualizar y enlazar nuevos métodos, 
  esto replica en todos los objetos
  creados con la misma clase*/
Course.prototype.inscribir = function(){
  console.log("Ya llegué! V2.0");
}

Course.prototype.otro = function(){
  console.log("💽🎉💾");
}

course_js.otro();
course_ruby.inscribir();

console.log("-----------------------------------");

/*se crean y acceden a propiedades*/

Course.prototype.conteo = 0;

let course_python = new Course();
course_python.__proto__.conteo += 1;
let course_java = new Course();
course_java.__proto__.conteo += 1;

console.log("Conteo: "+Course.prototype.conteo);

console.log("-----------------------------------");

//course_java.prototype.conteo += 1; //EROR SE ACCEDE CON __PROTO__
//console.log("Conteo: "+Course.__proto__.conteo);//ERROR SE LEÉ DESDE .PROTOTYPE
