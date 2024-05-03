//imprimir números del 1 al 10

/*Partes de un ciclo:
1.- Instrucción inicial
2.- Condición para continuar
3.- Instrucción después de cada iteración
*/

//ciclo for
console.log("-------- Ciclo For --------");
for(let i=1; i <=10; i++){
  if(i === 9){
    console.log(i+".- Rompe");
    break;
  }else{
      console.log(i+".- Continua");
  }
}

//ciclo while
console.log("------- Ciclo While -------");
let i = 1;
while(i <= 10){
  if(i === 9){
    console.log(i+".- Rompe");
    break;
  }else{
      console.log(i+".- Continua");
  }
  i++;
}

//hasta que se ingrese un valor falsy se detiene
while(prompt()){
  console.log("ejecución")
}

//ciclo do while
console.log("------- Ciclo Do While -------");

i = 1;
do{
  if(i === 9){
    console.log(i+".- Rompe");
    break;
  }else{
      console.log(i+".- Ejecución");
  }
  i++;
}while(i <= 10);
