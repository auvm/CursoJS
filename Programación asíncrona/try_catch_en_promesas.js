(async function(){
    try{
        let primesa01 = await Promise.reject("¡¡¡ERROR:!!! Rehcazamos la promesa 01");
        let primesa02 = await Promise.reject("¡¡¡ERROR:!!! Rehcazamos la promesa 02");
    }catch(err){
        console.log(err)
    }
})();

/**
 * Para las posibles promesas rechazadas, 
 * no usa el método catch, sino las ejecuta
 * dentro de un entorno de prueba try{}catch{}
 * en donde la primera promesa fallida provoca que
 * las demás no se ejecuten.
 */

