/**
 * Un generador es una función que retorna un iterador, 
 * muy parecida a éstos últimos, pero con una sintaxis 
 * mucho más clara.
 * 
 * El generador interrumpe la ejecución de la función
 * y la reanuda con cada llamado al método .next() de la función
 */

//Generador que cuenta del 1 al 5
function* generador_contador(){
    for (let index = 1; index <= 5; index++) {
        yield index; //es el "value" del objeto iterador retornado
    }
}

let generador = generador_contador();
console.log(generador.next());
console.log(generador.next());
console.log(generador.next());
console.log(generador.next());
console.log(generador.next());
console.log(generador.next());

/**
 * Para que sea una función generadora se declara con
 * function y un asterisco "*" en function -> function* nom_función
 * el objeto retornado posee los atributos {value:XXX done:false/true}
 */