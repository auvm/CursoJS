/**
 * La palabra reservada async produce que la función en la
 * que se defina, retorne una promesa de manera implicita.
 * 
 * en el ejemplo siguiente, es como si el resolve de la promesa
 * retornada, fuera el resultado de sumar num1 + num2
 */
async function suma(num1, num2){
    return num1 + num2;
}

/**
 * 
 * En comparación a una función que sí es asíncrona, la función
 * con el modificador async, puede utilizar dentro
 * de la misma función await
 */
async function calcular(){
    return new Promise((resolve, reject) => {
        setTimeout(resolve, 1000, 18);
    })
}