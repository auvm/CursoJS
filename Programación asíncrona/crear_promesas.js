let promesa = new Promise(function(resolve, reject){
    //valores de retorno para la promesa
    resolve(10); //fullfiled
    reject("algo salió mal") //reject
});

/*usado para el ejemplo para crear promesa*/
let request = require('request');

/*se define la función tipo promesa q toma una url*/
function leerPagina(url){
    /*va a retornar un objeto tipo promesa, por lo que
      se instancia el nuevo objeto que toma como constructor
      la función a realizar*/
    return new Promise(function(res, rej){
        /*en este caso usa el módulo de node para hacer
          una consulta - y dicha función por si sola
          soliticita los argumentos y manda la respuesta
          o el error*/
        request(url, function(error, response){
            if(error) return reject(error);

            resolve(response);
        })
    })
}

/*aquí usamos la promesa recién creada incluyendo
  el catch por si surge un error*/
let promesa01 = leerPagina("https://google.com");
promesa01.then(res => console.log(res))
        .catch(err => console.log(err));
