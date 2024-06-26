/** 
 * Para buscar una dirección URL en un texto,
 * comienta con el http, opcional a https (PROTOCOLO)
 * seguido de dos puntos :
 * seguido de diagonal diagonal //
 * seguido del equivalente a www y un punto . siendo esta parte opcional (SUBDOMINIO)
 * después suma de cualquier caracter... un dominio principal (DOMINIO)
 * le siguie un punto y suma de cualquier caracter... el TopLevelDomain (DOMINIO DE NIVEL SUPERIOR)
 * 
 * 
*/
/https?:\/\/(\S+\.)?\S+(\.\S+)/

//ejemplo común y corriente para encontrar 
console.log("https://www.codigofacilito.com".match(/(https?:\/\/(\S+\.)?\S+(\.\S+))/));

let texto = "Visita https://www.codigofacilito.com ahora!!!";
//modifica el texto reemplazando la cadena por una etiqueta HTLM con la url y su cierre
let texto_modificado = texto.replace(/(https?:\/\/(\S+\.)?\S+(\.\S+))/, "<a href=$1>$1</a>")

console.log(texto_modificado);