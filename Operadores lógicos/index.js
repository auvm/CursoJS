/*Operadores lógicos

Existen 4 operadores:
&& El operador AND
|| El operador OR 
! El operador NOT
?? El operador mullish coalescing // fusión de nulos o unión nulosa
*/

console.log();

console.log(Boolean(20 && 10));
console.log(Boolean("hola" && "" ));
console.log(Boolean(true && false));

console.log("-------Tabla de verdad-------");
console.log(Boolean(true && true)); // AND
console.log(Boolean(true && false));
console.log(Boolean(false && true));
console.log(Boolean(false && false));

console.log("-------Condiciones-------");
let edad = 21;
console.log(edad >= 18 && edad < 30);

console.log("-------Retorno del primer falsy en AND-------");
console.log("hola" && 0 && "" );
console.log("hola" && "" && "nada" );

console.log("-------Retorno del primer truty en OR-------");
console.log("hola" || 0 || "" );
console.log("" || "nada" || "hola" );

//si todos son falsy, retorna el último falsy
console.log(null || "" || 0);

console.log("-------Retorno negado con NOT-------");
//NOT combierte a su representación booleana y luego la invierte
console.log(!0);
console.log(!"");
console.log(!true);
console.log(!(15 > 10));

console.log("-------Retorno negado con NOT-------");
//debemos evaluar un dato para saber si es núlo especificamente
console.log(null ?? "hola");
