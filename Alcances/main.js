/*
  scope global
  scope local
*/

//esto es una variable global, no recomendada
var nombre = "uriel";
console.log(nombre);

/*Es mucho más recomendado limitar el acceso, 
  ya que solo se usará en esa función, siendo local
*/
function decirHola(){
  nombre = "Cody";
  console.log("Hola "+nombre);
}

decirHola();

console.log("---------- alcance de función y bloque ----------")
function hola(name){
  if(name){
    //var saludo = "hola "+ name;
    let saludo = "hola "+ name;
  }
  /*En este ejemplo se puede ver que aunque
    la variable saludo se definió en el bloque anterior, 
    se puede usar porque está dentro del 
    alcance de función - usando var*/

  /*Usando let genera un error porque limita el 
    uso al bloque*/
  console.log(saludo);
}

hola("uriel");

/*

  var -> alcance en la función más próxima
  
  let y const -> alcance en el bloque más próximo
  
  ¿Cúando usar cada uno?
  constantes = const
  var = declarada pero disponible dentro de la función
  
  let = variables consistentes en todos los lenguajes de programación
        limietando al bloque donde se declaro, es lo más recomendable
*/

