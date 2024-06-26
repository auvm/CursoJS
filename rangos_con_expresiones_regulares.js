console.log("\n**************** Rangos de caracteres literales ********************");
/**
 * los agrupamientos con corchetes [ ] significan que puede haber
 * cualquiera de los caracteres literales que contienen los corchetes.
 * 
 * Si no incluyeran los corchetes, sería una coincidencia "literal", de
 * los caracteres exactamente en ese orden.
 */
console.log("abcd".match(/[abcd]/)); //hace match con el primer caracter encontrado del rango
console.log("abcd".match(/abcd/));//hace match, pero porque es la cadena tal cual!

console.log("b".match(/[abcd]/));//hace match porque b, si está en el rango
console.log("b".match(/abcd/));//no hace match porque no hay un "abcd" en la cadena

console.log("\n**************** Rangos de caracteres  ********************");
/**
 * Pero para hacer un rango, se pone con un guión entre
 * los caracteres iniciales y finales, mínimo o máximo del rango
 */
let texto = "hola";
console.log(texto.match(/[a-c]/));
//Otros ejemplos de rangos
console.log("b".match(/[a-d]/));
console.log("3".match(/[0-5]/));

/**
 * Si el guión está al principio o al final de la expresión regular, 
 * cuenta como un caracter literal. Es decir, pasa a formar
 * parte de la busqueda.
 */
console.log("-".match(/[-a]/));//puede ser un guión '-' o la letra 'a'

console.log("\n**************** Or  ********************");
texto = "hola";
/**
 * A continuación no debería hacer match, porque el texto tendría que
 * decir "hoa" u "hla"
 */
console.log(texto.match(/h[o|l]a/));
texto.match(/h[o|l]a/) ? console.log("Coincide") : console.log("No hay coincidencia"); //lo hice solo para probar el operador ternario
/**
 * Si cambiamos el texto, ahora si daría el match
 */
texto = "hoa";
console.log(texto.match(/h[o|l]a/)); 
texto.match(/h[o|l]a/) ? console.log("Coincide") : console.log("No hay coincidencia"); //lo hice solo para probar el operador ternario