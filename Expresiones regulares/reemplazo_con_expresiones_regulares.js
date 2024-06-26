let texto1 = "codigo facilito es una buena plataforma de cursos. codigo facilito es genial!";
let texto2 = "1000 unidades disponibles de 2000";

console.log("************************ .replace() ***************************");
/**
 * .replace() toma una expresión regular y reemplaza la primera 
 * coincidencia por una cadena.
 * 
 * Si se usa la bandera g, reemplaza a todas las coincidencias.
 */
let nuevoTexto1 = texto1.replace(/codigo facilito/, "CódigoFacilito");
console.log("Primera coincidencia: \n\t"+nuevoTexto1);

nuevoTexto1 = texto1.replace(/codigo facilito/g, "CódigoFacilito");
console.log("Todas las coincidencia: \n\t"+nuevoTexto1);

console.log("\n************************ .replaceAll() ***************************");
/**
 * Si se quiere buscar mediante una cadena y reemplazar, se debe usar
 * el método .replaceAll() para reemplazar igualmente, todas las coincidencias
 */
nuevoTexto1 = texto1.replaceAll("codigo facilito", "CodigoteDificiloso");
console.log("Reemplazo con cadena: \n\t"+nuevoTexto1);



console.log("\n******************* .replaceAll() con Grupos *********************");
/**
 * Para separar las milesimas con una cosa, uso replace, para primero identificar los
 * grupos de las milesimas, el primer digito es el $1, el segundo de al menos tres unidades
 * es el $2, ahora identificados, solo le paso la cadena por la que quiero reemplzarlos,
 * que es el grupo uno separado por coma del grupo dos.
 */
nuevoTexto2 = texto2.replaceAll(/(\d)(\d{3})/g,"$1,$2");
nuevoTexto2 = texto2.replaceAll(/([0-9])([0-9]{3})/g,"$1,$2");//más entendible en mi opinión, pero hace lo mismo con esa sintaxis.
console.log(nuevoTexto2);

console.log("\n*************** .replaceAll() con Grupos en funciones *****************");
/**
 * los grupos tambien pueden ser tomados como argumentos en una función
 * anónima, junto con otros parametros que se retornan cuando se detecta la expresión 
 * regular.
 */
nuevoTexto2 = texto2.replaceAll(/([0-9])([0-9]{3})/g, function(match, grupo1, grupo2, offset, cadena){
    return grupo1 + "," + grupo2;
});
console.log(nuevoTexto2);

/**
 * podemos imprimir los demás datos que continen para saber qué son...
 */

nuevoTexto2 = texto2.replaceAll(/([0-9])([0-9]{3})/g, function(match, grupo1, grupo2, offset, cadena){
    return  "\n---Inicia---" +
            "\nmatch: "+ match +
            "\ngrupo1: "+ grupo1 +
            "\ngrupo2: " + grupo2 +
            "\noffset: " + offset +
            "\ncadena: " + cadena +
            "\n---Termina---";
});
console.log(nuevoTexto2);

/**
 * Siginificados:
 * match = la ocurrencia encontrada
 * grupo1 = número actual del grupo...
 * grupo2 = supongo que si se encutra un segundo grupo en la misma ocurrencia...
 * offset = posición en la que se encontró el match
 * cadena = la cadena completa que se analizó
 */