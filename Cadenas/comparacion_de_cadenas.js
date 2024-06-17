// <, >, <=, >=, ==
/**
 * Local compare hace una comparación en orden alfabético,
 * si aparece antes que la compración, da -1, si es posterior
 * de 1.
 */
console.log("A".localeCompare("z"));
console.log("a".localeCompare("b"));
console.log("a".localeCompare("B"));

console.log("A".localeCompare("a"));
console.log("Z".localeCompare("a"));
console.log("b".localeCompare("b"));

//Otro ejemplo de que todas las cadenas son INMUTABLES!
console.log("A".toLocaleLowerCase() == "a".toLocaleLowerCase());

let prueba = "Hola";
let segundaPrueba = prueba.toUpperCase();

console.log(prueba);
console.log(segundaPrueba);