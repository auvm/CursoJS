let cadena = "  Hola mundo!  ";

console.log("--- Métodos para cortar los espacios en blanco en la cadena al comienzo o al final ---");
console.log(cadena.trimStart());
console.log(cadena.trimEnd());
console.log(cadena.trim());

console.log("\n--- Método para repetir una cadena N cantidad de veces ---");
console.log(cadena.repeat(3));

console.log("\n--- Método para ver la longitud de caracteres de código en la cadena ---");
console.log("cantidad de código: "+cadena.length);


console.log("\n--- Método para remplazar algo en una cadena ---");
console.log(cadena.replace("mundo", "Ángel"));


//DEMO:
let novo = (cadena.includes("mundo") ? cadena.replace("mundo", "Mierdas") : cadena);
