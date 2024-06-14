/**
 * La creación primitiva de una cadena no tiene mayor 
 * complejidad, pero cuando se usan métodos de las mismas
 * se debe saber que se crean objetos de su tipo String
 * para acceder a ellos, se obtiene el resultado y luego se
 * desecha.
 */
//primitivo
let nombre = "Uriel";
console.log(nombre.length);//se construye un objeto instantane y luego se desecha
console.log(typeof(nombre))

/**
 * Por otro lado los objetos tienen accedo a dichos métodos y
 * el valor de las cadenas se almacena en su propio objeto.
 */
//objeto
let name = new String("Uriel");
console.log(name.length);
console.log(typeof(name))

