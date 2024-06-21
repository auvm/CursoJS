//la versión 13.0 de UNICODE contenía 143,859 caracteres de kis 1,111,998 aún disponibles

/**
 * Cade rango de caracteres está contenido dentro del 
 * rango U+0000 hata el U+10FFFF.
 */

/**
 * La siguiente función convierte un caracter a 
 * su representación hexadecimal y luego al CodePoint
 * de UNICODE.
 */

function toCodePoint(char){
    var hex = char.charCodeAt(0).toString(16); //convierte el caracter a hexadecimal
    return "\\u" + "0000".substring(0, 4 - hex.length) + hex; //agrega los 0's faltantes al inicio
}

console.log(toCodePoint("a"));
console.log("\u0061");


/**
 * planos de UNICODE son 17 planos
 * 
 * BMP -> Basic Multilingual Plane
 * Planos astrales (donde viven los emojis) => Surrogate pair = High surrogate pair y el Low surrogate pair
*/
console.log("💾".length); //imprime 2 pq está conformado por dos unidades hexadecimales de código
console.log("🏃‍♂️".length); //pueden requerir más de dos pares para identificar un emoji
