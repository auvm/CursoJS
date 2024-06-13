/**
 * Un iterable con iterador...
 * Los iterables son todos aquellos objetos que implementan en método
 * @@iterator, que en código es igual a [Symbol.iterator](){...},
 * ese método debe retornar un objeto implemente el método next(), 
 * en este caso, por ser un iterador(que todos implementan el método next()),
 * se invoca a sí mismo.
 */
let rango = {
    //se tienen variables para la utilidad
    min: null,
    max: null,
    currentValue: null,

    /**
     * implemento el método del iterador para contar desde el número en min
     * hasta el número en max...
     */
    next(){
        if(this.currentValue == null){
            this.currentValue = this.min;
        }
        let result = {};
        if(this.currentValue >= this.min && this.currentValue <= this.max){
            result = {value: this.currentValue, done: false};
            this.currentValue += 1;
        }else{
            result = {done: true}
        }
        return result;
    },

    //implemento el @@iterator, para que sea un iterador
    [Symbol.iterator](){
        return this;
    }
};

//lleno las variables
rango.min = 1;
rango.max = 10;

//ya se puede usar el for que funciona con itarables
for(n of rango){
    console.log(n);
}

/**
 * De esta forma se pueden crear estructuras personalizadas
 * que sean iterables, dando acceso a todos los métodos
 * que requieren un iterador para funcionar, y que además, 
 * tienen una funcionalidad específica
 */