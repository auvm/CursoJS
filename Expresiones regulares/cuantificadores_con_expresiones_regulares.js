/**
 * Los cuantificadores son "greedy" es decir, codiciosos,
 * buscan abarcar la mayor cantidad de caracteres
 * que coincidan con la expresión regular adyacente.
 */

console.log("13062000".match(/\d/));//retorna la primera coincidencia
console.log("13062000".match(/\d+/));//retorna la coincidencia completa (de un caracter o más de digitos)
/**
 * En específico el asterisco (*) retorna la coincidencia completa 
 * pero también una coincidencia con la cadena vacia, ya que
 * su comportamiento por defecto es detectar NINGÚN caracter o más, 
 * en este caso, de digitos.
 * 
 * NOTA: el más (+) detecta UNO caracter o más
 */
console.log("13062000".match(/\d*/));
console.log("".match(/\d*/));

/**
 * Para la selección de un número específico de caracteres,
 * encerramos entre corchetes un número mínimo y , un número máxico{}
 * de caracteres a elegir. {min, max}
 */
console.log("13062000".match(/\d{2,4}/));//de dos a cuatro caracteres
console.log("13062000".match(/\d{2,}/));//de dos o más caracteres 
console.log("13062000".match(/\d{1,}/));//de uno a más caracteres -> Equivalente al (+)
console.log("13062000".match(/\d{0,}/));//de cero a más caracteres -> Equivalente al (*)


/**
 * Para un número en especial de caracteres, se pone solo el número 
 * entre corchetes {}.
 * 
 * Para busar un caracter opcional, se puede poner el signo e interrogación,
 * de esta forma indica que el caracter anterior a él, puede o no existir,
 * en este casi la letra "s".
 */
//aquí simboliza que podría estar la "s" o no
console.log("http://www.google.com.mx".match(/https?:\/{2}w{3}/)); 


/**
 * Para hacer un cuantificador lazy(por defecto se comportan greedy),
 * se pone el signo más (+), con el que buscará una coincidencia junto
 * a los caracteres que le anteceden y se quedará con la primera encontrada.
 */
//Coportamiento greedy, abarca TODO de inicio a fin
console.log("<p> Hello, World! </p>".match(/<.+>/));//abre mayor qué < ... cualquier caracter ...(+<-La primera coincidencia) cierra menor qué >, 

//Comportamiento lazy, abarca solo la PRIMERA coincidencia
console.log("<p> Hello, <a> World! <a></p>".match(/<a+>/));


