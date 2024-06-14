/**
 * Para crear una estructura iterable debe implementar el 
 * método @@iterator, en código representado por [Symbol.iterator](){}
 * el cuál debe retornar un objeto iterador.
 * 
 * Como un generador retorna en cada ciclo de ejecución de la función
 * declarada "function*", un iterador, se puede retornar a la función
 * en el método @@iterator.
 */

//objeto genérico para el ejemplo
let generador_iterable = {
    min: null,
    max: null,

    //función generadora
    funcion_generadora: function* (){
        for(let i = this.min; i <= this.max; i++){
            yield i; //esto retorna un iterador de tipo {value: XXX, done:true/false}
        }
    },

    //método requerido para que la estructura sea un iterable
    [Symbol.iterator](){
        return this.funcion_generadora(); //se debe retornar un iterador
    }
};


//valores para la ejecución del objeto
generador_iterable.max = 100;
generador_iterable.min = 0;

/**
 * Como el objeto ya es un iterable, ya puede usarse 
 * el for-of como en otros iterables como cadenas o arreglos.
 */
for(num of generador_iterable){
    console.log(num);
}

