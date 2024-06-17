let a = "Hello, ";
let b = "world.";

//+
console.log(a+b);

//.concat()
console.log(a.concat(b));

//template literals -> anteriormente conocido como "template Strings"
let name = "Uriel";
let final_string = `Hola ${name}, cómo te va?`; //debe tener los acentos graves para ejecutar
console.log(final_string);

//padStart || padEnd -> para rellenar una cadena hasta obtener una longitud deseada
let mes = "6";
console.log(mes.padStart(2,"0"));


//ejemplo de un número de cuenta para proteger el número completo
const fullNumber = '2034399002125581';
const last4Digits = fullNumber.slice(-4);
const maskedNumber = last4Digits.padStart(fullNumber.length, '*');

console.log(maskedNumber);
// Expected output: "************5581"