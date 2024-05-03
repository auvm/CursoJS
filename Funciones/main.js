//Declaración de función

/*Las funciones definidas se van al principio del alcance o scope
  del programa, permitiendo ejecutarlas en cualquier parte del 
  código
*/
function saludar(){
  console.log("Hola mundo 🎉");
}

saludar();

function cuadrado(numero){
  return "El cuadrado de "+numero+" es: "+numero * numero;
}

let cuadrado_de_dos = cuadrado(2);
console.log(cuadrado_de_dos);


//Expresión de función - funciones anónimas
/*Las funciones por expresión no pueden usarse
  sin antes haber sido declaradas
*/
let my_function = function(){return 0;};

my_function();
