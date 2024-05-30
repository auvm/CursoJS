let request = require('request-promise');

//hace la consulta y retorna el objeto
let objeto_promesa = request('https://www.google.com.mx');

//define la tarea para después de la consulta
objeto_promesa.then(function(){
    console.log("terminó el elace.");
});

//el otro código puede seguir funcionando...
for(let i = 1; i < 11; i++){
    console.log(i+".- Coninua ejecutando...");
}

/*a diferencia de los callbacks, las promesas retornan un objeto,
ese objeto cuenta con el método "then", que se le pasa la
función que queremos que se ejecute después de la solicitud sea 
completada.
*/


/*Estados de las promesas:
1. fullfiled: 0 completada, se completó todo con éxito
2. rejected: 0 rechazada, significa que la promesa no se completó con éxito
3. (pending): 0 pendiente, que es el estado de la promesa cuando la operación no ha terminado, aquí decimos que la promesa no se ha completado
4. settled: 0 finalizada, cuando la promesa terminó ya sea con éxito o con algún error.
*/

