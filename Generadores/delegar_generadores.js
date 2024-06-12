/** 
 * Delegar un generador es igual a = generadores anidados
 * el yield manda a llamar a la expresión a su derecha, 
 * lo que retorna esa expresión será el valor retornado
 * del generador.
 */

//Generador que cuenta del 1 al 5 
function* generador_contador(){
    //generador secundario en el ejemplo
    for (let index = 1; index <= 5; index++) {
        yield index; //es el "value" del objeto iterador retornado
    }
}

/**
 * Este generador manda a llamar a la expresión con su único yield,
 * la ejecución del generador secundario para imprimir hasta 5,
 * 
 * CADA MÉTODO .NEXT() ejecutado al generador primario, SERÁ DELEGADO
 * AL GENERADOR SECUNDARIO. Cuando el generador secundario retone {done:true}
 * se regresa a la ejecución del generador primario.
 * 
 * Y en este caso, termina la ejecución del generador primario.
 */

function* retornador(){
    //generador primario en el ejemplo
    yield* generador_contador();
    console.log("------Regresa el control al generador primario------")
}

let ret = retornador();

console.log(ret.next());
console.log(ret.next());
console.log(ret.next());
console.log(ret.next());
console.log(ret.next());
console.log(ret.next());
console.log(ret.next());