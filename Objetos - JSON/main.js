//JavaScript Object Notation -> JSON

//Objeto de ejemplo
let curso = {
  //Propiedades
  titulo: "Curso profesional de JS",
  formato: "Video",
  bloques: ["Introducción", "Funciones", "Objetos", "etc."],
  
  //Métodos
  inscribir: function(){
    console.log("*******************");
    console.log("Inscrito");
    console.log("*******************");
  },
  instalación: function(){
    console.log("Instalando...");
    console.log("Instalado.");
  }
}




//consulta de propiedad
console.log(curso.titulo);

//reasignación de propiedad
curso.titulo = "Curso programación web";

//reasignación de método
curso.instalación = function(){
  console.log("-------------------");
  console.log("Instalando...");
  console.log("Instalado.");
  console.log("-------------------");
}

//ejecución de métodos
curso.inscribir();
curso.instalación();
