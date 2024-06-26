/**
 * Los grupos pueden servir especialmente para dos cosas,
 * 1.-Recordar parte de los patrones por separado ó
 * 2.-Aplicar cuantificadores a los grupos.
 */

/**
 * La \S lo que búsca es cualquier caracter sin considerar el espacio en blanco.
 * 
 * El ejemplo busca la estructura de un correo electrónico
 */
console.log("auvm@gmail.com".match(/\S+@\S+/));//retorna la coincidencia total


console.log("\n**************************");
/**
 * retorna la coincidencia total, como la versión de arriba, y el grupo,
 * que en este caso corresponde al username.
 */

console.log("auvm@gmail.com".match(/(\S+)@\S+/));


console.log("\n**************************");
/**
 * Para detectar y nombrar partes de la expresión regular,
 * se le asigna un nombre al grupo, poniendo un signo de interrogación de cierre,
 * seguido entre simbolos de mayor y menor qué, el nombre que le queremos asignar,
 * como si fuera una variable.
 */
console.log("auvm@gmail.com".match(/(?<username>\S+)@(?<domain>\S+)/));

/**
 * Si en un caso de uso especifico no necesitamos que se recuerden los grupos, 
 * es decir, que no aparezcan en las coincidencias, ponemos
 * el ?:, así podemos ver la diferencia.
 */
console.log("auvm@gmail.com".match(/(\S+)@(\S+)/));
console.log("auvm@gmail.com".match(/(?:\S+)@(?:\S+)/));

//Todo esto muy útil sobre todo para reemplazar caracteres por coincidencias.