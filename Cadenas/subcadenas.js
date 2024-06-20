let cadena = "hola_mundo!";

for (const word of cadena) {
    console.log(word);
}

//.substring es no incluyente
console.log(cadena.substring(0,4));
//si uno argumento es -(menor), lo convierte a 0(cero)
console.log(cadena.substring(-4,4));
//si el argumento de inicio es mayor, se intercambiarán
console.log(cadena.substring(11,0));


/**
 * Otro método es el slice, que si soporta negativos, tomando
 * los caracteres del final al principio.
 */
console.log(cadena.slice(-6,-1));
/**
 * Si los argumentos están invertidos, aquí no se ejecutan.
 */
console.log(cadena.slice(9,5));