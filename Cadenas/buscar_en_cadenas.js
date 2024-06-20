let cadena = "Hola Uriel";

/**.IndexOf
 * retorna el índice a partir del cuál se
 * encuentra la cadena búscada dentro de la cadena
 * base. SOlO RETORNA LA PRIMERA INSTANCIA ENCONTRADA
 * 
 * Si no existe, retorna -1
 */
console.log(cadena.indexOf("Hola"));

//Ejemplo de verificación de que existe dentro de una cadena
if(cadena.indexOf("Uriel") > 0){
    console.log("Encontrado!")
}


/**
 * .includes retorna true/false si se encuentra la subcadena
 * en la cadena original.
 */
if(cadena.includes("Mundo")){
    console.log("Encontrado!")
}else{
    console.log("No existe.")
}

console.log("La última L encontrada en la posición: "+cadena.lastIndexOf("l"));

console.log("-----------------------------------------------")

/**
 * Métodos para buscar al comienzo o al final de una
 * cadena.
 */

//.startsWith
let link = "https://google.com.mx";
if(link.startsWith("https")) console.log("Es un link seguro");

//.endsWith
let photo = "auvm.jpg";
if(photo.endsWith(".jpg")) console.log("Es una imagen");
